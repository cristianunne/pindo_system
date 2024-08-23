from django.shortcuts import render, redirect
from empresas.models import Empresas
from django.contrib import messages
from django.http import Http404

from django.views.decorators.csrf import csrf_exempt
import base64
from django.core.files.base import ContentFile
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

from empresas.utility import filterEmpresas, filterEmpresasWithId

from sagpyas.models import Sagpyas
from sagpyas.utility import get_sagpyas_by_empresa

from rodales_gis.utility import get_area_rodal_gis_by_empresa, get_area_rodal_state_gis_by_empresa

from plantaciones.serializers import getSuperficiePlantacionForestalByEmpresa, getSuperficiePlantacionOnlyValueByEmpresa

from rodales.models import Rodales


# Create your views here.

from general_utility import getEmpresasApiSap


def index(request):

    empresas = Empresas.objects.all()
  
    context = {'empresas' : empresas, 
               'category' : 'Empresas',
                'action' : 'Administración de Empresas'}

    return render(request, 'empresas/index.html', context)


@login_required
def add(request):

    context = {}

    #traigo los datos de las empresas
    data_sap = getEmpresasApiSap(request)
  
    if data_sap:
        
        empresa_sap = filterEmpresas(data_sap)
        context.update({'empresa_sap' : list(empresa_sap.items())})


    if request.method == 'POST':
        
        sap_id = request.POST.get('select-empresa')
        address = request.POST.get('address')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        cuit = request.POST.get('cuit')
        name = None

        #traigo el nombre
        for item in data_sap:

            if(item['idempresa'] == sap_id):
                name = item['nombre']
                break
        
        try:
            #creo el objeto
            empresa = Empresas()
            empresa.sap_id = sap_id
            empresa.name = name
            empresa.address = address
            empresa.phone = phone
            empresa.email = email
            empresa.cuit = cuit
            empresa.save()

            messages.success(request, "La Empresa se ha agregado con éxito")

            return redirect('empresas-index')

        
        except Exception as e:
            messages.error(request, str(e))
            return render(request, 'empresas/add.html', context)
    
    return render(request, 'empresas/add.html', context)


def editEmpresa(request, id):
    context = {}

  
    

    try:
        empresa = Empresas.objects.get(empresas_id = id)
        context.update({'empresa_data' : empresa})

        #traigo los datos de las empresas
        data_sap = getEmpresasApiSap(request)
  
        if data_sap:
            empresa_sap = filterEmpresasWithId(data_sap, empresa.sap_id)
            context.update({'empresa_sap' : list(empresa_sap.items())})
      

        if request.method == 'POST':
            sap_id = request.POST.get('select-empresa')
            #name = request.POST.get('name')
            address = request.POST.get('address')
            phone = request.POST.get('phone')
            email = request.POST.get('email')
            cuit = request.POST.get('cuit')
            name = None

            #traigo el nombre
            for item in data_sap:

                if(item['idempresa'] == sap_id):
                    name = item['nombre']
                    break

            empresa.sap_id = sap_id
            empresa.name = name
            empresa.address = address
            empresa.phone = phone
            empresa.email = email
            empresa.cuit = cuit

            try:
                empresa.save()
                messages.success(request, "La Empresa se ha editado con éxito")

                return redirect('empresas-index')

            except Exception as e:
                messages.error(request, str(e))
                return render(request, 'empresas/edit.html', context)

        else :
            return render(request, 'empresas/edit.html', context)

    except Exception as e:
        messages.error(request, str(e))
        return redirect('empresas-index')
    

@login_required
@csrf_exempt
def deleteEmpresa(request, id):

    try:
        obj = Empresas.objects.get(pk=id)
        obj.delete()
       
        messages.success(request, "La Empresa ha sido eliminado.")
        return redirect('empresas-index')

    except Empresas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
        

def modifiedLogoEmpresa(request, id):
      try:
        context = {
               'category' : 'Empresas',
                'action' : 'Administración de Empresas / Cambio de Logo'}

        empresa = Empresas.objects.get(empresas_id = id)
        
        context.update({'empresa_data' : empresa})
        """if request.method == 'POST':
            file = request.POST.get('dropzone-default')
            print(file)"""
       

        return render(request, 'empresas/modified_logo.html', context=context)
      
      except Exception as e:
        messages.error(request, str(e))
        return redirect('user-index')
      

@login_required
@csrf_exempt
def uploadImage(request):

    if request.method == 'POST':
        image_data = request.FILES['file']
        empresa_id = request.POST.get('empresa_id')

        try:
            empresa = Empresas.objects.get(pk=empresa_id)

            if image_data != None:
                #format, imgstr = image_data.split(';base64,')
                image_string = base64.standard_b64encode(image_data.read())

                empresa.image = image_string.decode()
                empresa.save()
                return JsonResponse({'respuesta' : True})


        except Empresas.DoesNotExist:
              return JsonResponse({'respuesta' : False})
        except Exception as e:
            return JsonResponse({'respuesta' : False})
        

@login_required
def viewEmpresa(request, id):
    
    context = {
               'category' : 'Empresas',
                'action' : 'Administración de Empresas / Detalles'}
    

    try:
        empresa = Empresas.objects.get(pk = id)

        rodales = Empresas.objects.get(pk = id).empresas_rodales.filter(usos_rodales__name__icontains = 'Forestal') \
        .values('pk', 'name', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'is_finish', 'is_sap', 'created', 'usos_rodales__name', 
                'empresa__name', 'rodales_rodales_gis__superficie', 'user__first_name', 'user__last_name', 'rodales_plantaciones',
                'rodales_plantaciones__plantacion_plantaciongis')
        
        
        

        context.update({
            'empresa_current' : empresa,
            'rodales' : rodales
        });
    
        rodales_bop = Empresas.objects.get(pk = id).empresas_rodales.filter(usos_rodales__name__icontains = 'Conservación') \
        .values('pk', 'name', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'is_finish', 'is_sap', 'created', 'usos_rodales__name', 
                'empresa__pk', 'empresa__name', 'rodales_rodales_gis', 'rodales_rodales_gis__superficie', 'user__first_name', 'user__last_name')
        
      
        
       
        context.update({
           
            'rodales_bop' : rodales_bop
        });
    
        #traigo el sagpya sagpyas_rodales

        sagpyas = get_sagpyas_by_empresa(idempresa=id)

        context.update({
           
            'sagpyas' : sagpyas
        });

      
        

        sup_t = get_area_rodal_gis_by_empresa(idempresa=id)
      
        superficie_total = round(float((sup_t['area_'].sq_m / 10000)), 2) if sup_t != False else 0
        
        #superficie plantada
        sum_plantacion = getSuperficiePlantacionOnlyValueByEmpresa(id)
        
        
        res_area = get_area_rodal_state_gis_by_empresa(idempresa=id)
        
        #superficie plantada
        sum_plantacion = getSuperficiePlantacionForestalByEmpresa(id)

        sup_ = res_area['area_'] if res_area['area_'] is not None else 0

        superficie_actual = round(float((sup_ / 10000)), 2) if res_area != False else 0

        #superficie_actual = round(float(get_area_rodal_state_gis_by_empresa(idempresa=id) / 10000), 2)
        sum_plan = sum_plantacion['suma_superficie'] if sum_plantacion['suma_superficie'] != None else 0
    

        #traigo los resultados resumen
        context.update({
           
            'total_rodales' : len(rodales),
            'total_rodales_bop' : len(rodales_bop),
            'superficie_total' : superficie_total,
            'superficie_plantacion' : sum_plan,
            'superficie_actual': superficie_actual
        });
    
        #calculo la superficie usando rodales_gis


    except Exception as e:
        messages.error(request, str(e))
        return redirect('user-index')


    return render(request, 'empresas/view.html', context=context)



