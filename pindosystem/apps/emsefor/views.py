from django.shortcuts import render, redirect
from emsefor.models import Emsefor, EmseforMaquinas
from django.contrib import messages
from django.http import Http404
from django.urls import reverse

from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
import base64
from django.core.files.base import ContentFile
from general_utility import getEmseforsApiSap

from emsefor.utility import filterEmsefor, filterEmseforWithId
from plantaciones.serializers import getPlantacionesByEmsefor
from plantaciones.utility import get_rodales_by_plantaciones_by_emsefor

from intervenciones.utility import get_sobrevivencias_by_emsefor, get_podas_by_emsefor, get_raleos_by_emsefor, get_talarasa_by_emsefor, \
get_rodales_by_type_intervencion_by_emsefor


from maquinas.models import Maquinas
from django.db.models import Sum, F, Count

# Create your views here.

def index(request):

    emsefor = Emsefor.objects.all()
   

    context = {'emsefors' : emsefor, 
               'category' : 'Emsefor',
                'action' : 'Administración de Emsefor'}

    return render(request, 'emsefor/index.html', context)

@login_required
def addEmsefor(request):

    context = {}
    #traigo los datos de las empresas
    data_sap = getEmseforsApiSap(request)

    if data_sap:
        
        emsefor_sap = filterEmsefor(data_sap)
       
        context.update({'emsefor_sap' : list(emsefor_sap.items())})
        
       

    if request.method == 'POST':
        
        #name = request.POST.get('name')
        address = request.POST.get('address')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        cuit = request.POST.get('cuit')
        contratista = request.POST.get('contratista')
        sap_id = request.POST.get('select-emsefor')

        name = None

        for item in data_sap:
            if(item['lifnr'] == sap_id):
                name = item['name']
                break


        try:
            #creo el objeto
            emsefor = Emsefor()
            emsefor.name = name
            emsefor.sap_id = sap_id
            emsefor.address = address
            emsefor.phone = phone
            emsefor.email = email
            emsefor.cuit = cuit
            emsefor.contratista = contratista
            emsefor.save()

            messages.success(request, "La Emsefor se ha agregado con éxito")

            return redirect('emsefor-index')

        
        except Exception as e:
            messages.error(request, str(e))
            return render(request, 'emsefor/add.html', context)
    
    return render(request, 'emsefor/add.html', context)

@login_required
def editEmsefor(request,id):
    context = {}




    try:
        emsefor = Emsefor.objects.get(emsefor_id = id)
        context.update({'emsefor_data' : emsefor})

          #traigo los datos de las empresas
        data_sap = getEmseforsApiSap(request)

        if data_sap:
        
            emsefor_sap = filterEmseforWithId(data_sap, emsefor.sap_id)
        
            context.update({'emsefor_sap' : list(emsefor_sap.items())})

        if request.method == 'POST':
            
            address = request.POST.get('address')
            phone = request.POST.get('phone')
            email = request.POST.get('email')
            cuit = request.POST.get('cuit')
            contratista = request.POST.get('contratista')
            sap_id = request.POST.get('select-emsefor')

            name = None

            for item in data_sap:
                if(item['lifnr'] == sap_id):
                    name = item['name']
                    break

            emsefor.sap_id = sap_id
            emsefor.name = name
            emsefor.address = address
            emsefor.phone = phone
            emsefor.email = email
            emsefor.cuit = cuit
            emsefor.contratista = contratista

            try:
                emsefor.save()
                messages.success(request, "La Emsefor se ha editado con éxito")

                return redirect('emsefor-index')

            except Exception as e:
                messages.error(request, str(e))
                return render(request, 'emsefor/edit.html')

        else :
            return render(request, 'emsefor/edit.html', context)

    except Exception as e:
        messages.error(request, str(e))
        return redirect('emsefor-index')
    

def deleteEmsefor(request, id):
    try:
        obj = Emsefor.objects.get(pk=id)
        obj.delete()
       
        messages.success(request, "La Emsefor ha sido eliminado.")
        return redirect('emsefor-index')

    except Emsefor.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

def modifiedLogoEmsefor(request, id):
      try:
        context = {
               'category' : 'Emsefor',
                'action' : 'Administración de Emsefor / Cambio de Logo'}

        emsefor = Emsefor.objects.get(emsefor_id = id)
        
        context.update({'emsefor_data' : emsefor})
        """if request.method == 'POST':
            file = request.POST.get('dropzone-default')
            print(file)"""
       

        return render(request, 'emsefor/modified_logo.html', context=context)
      
      except Exception as e:
        messages.error(request, str(e))
        return redirect('emsefor-index')
      

@login_required
@csrf_exempt
def uploadImage(request):

    if request.method == 'POST':
        image_data = request.FILES['file']
        emsefor_id = request.POST.get('emsefor_id')

        try:
            emsefor = Emsefor.objects.get(pk=emsefor_id)

            if image_data != None:
                #format, imgstr = image_data.split(';base64,')
                image_string = base64.standard_b64encode(image_data.read())

                emsefor.image = image_string.decode()
                emsefor.save()
                return JsonResponse({'respuesta' : True})


        except Emsefor.DoesNotExist:
              return JsonResponse({'respuesta' : False})
        except Exception as e:
            return JsonResponse({'respuesta' : False})
        

@login_required
def viewEmsefor(request, id):
    try:
        context = {
               'category' : 'Emsefor',
                'action' : 'Administración de Emsefor / Ver Emsefor'}
        
        emsefor = Emsefor.objects.get(pk=id)

        context.update({
            'emsefor' : emsefor
        })

        #traigo los datos resumenes
        cant_plantaciones = len(getPlantacionesByEmsefor(id))

        cant_sobrevivencias = len(get_sobrevivencias_by_emsefor(id))
        cant_podas = len(get_podas_by_emsefor(id))
        cant_raleos = len(get_raleos_by_emsefor(id))
        cant_talarasas = len(get_talarasa_by_emsefor(id))

        context.update({
            'cant_plantaciones' : cant_plantaciones,
            'cant_sobrevivencias' : cant_sobrevivencias,
            'cant_podas' : cant_podas,
            'cant_raleos' : cant_raleos,
            'cant_talarasas' : cant_talarasas

        })

        #traigo las plantaciones considerando las intervenciones
        rod_plantacion = get_rodales_by_plantaciones_by_emsefor(id)
        rod_sobrevivencia = get_rodales_by_type_intervencion_by_emsefor(id, type='Sobrevivencia')
        rod_poda = get_rodales_by_type_intervencion_by_emsefor(id, type='Poda')
        rod_raleo = get_rodales_by_type_intervencion_by_emsefor(id, type='Raleo')
        rod_talarasa = get_rodales_by_type_intervencion_by_emsefor(id, type='Talaraza')

        context.update({
            'rod_plantacion' : rod_plantacion,
            'rod_sobrevivencia' : rod_sobrevivencia,
            'rod_poda' : rod_poda,
            'rod_raleo' : rod_raleo,
            'rod_talarasa' : rod_talarasa
        })


        return render(request, 'emsefor/view.html', context=context)
    
    except Exception as e:
        messages.error(request, str(e))
        return redirect('emsefor-index')
    


@login_required
def addMaquinaEmsefor(request, idemsefor):

    try:

        context = {
               'category' : 'Emsefor',
                'action' : 'Administración de Emsefor / Agregar Máquinas'}
        
        #traigo las maquinas ya asignadas
        maquinas_current = Emsefor.objects.get(pk=idemsefor).maquinas.all()

        
        #traigo solos los ids
        ids_maquinas = []

        for maq in maquinas_current:
            ids_maquinas.append(maq.pk)
       
        maquinas = Maquinas.objects.exclude(maquinas_id__in = ids_maquinas)



        emsefor = Emsefor.objects.get(pk=idemsefor)

        context.update({
            'maquinas' : maquinas,
            'emsefor' : emsefor
        })

        if request.method == 'POST':
            lista=request.POST.getlist('maq_select')

            maq_selects = Maquinas.objects.filter(maquinas_id__in = lista)

            emsefor.maquinas.add(*maq_selects)
            messages.success(request, "La/s Máquina/s se ha/n asignado correctamente!.")
       
            return HttpResponseRedirect(reverse("emsefor-view", args=[idemsefor]))


        return render(request, 'emsefor/add_maquinas.html', context=context)

    except Exception as e:
        messages.error(request, str(e))
        return redirect('emsefor-index')
    


@login_required
def viewMaquinasEmsefor(request, idemsefor):
    
    
    try:

        context = {
               'category' : 'Emsefor',
                'action' : 'Administración de Emsefor / Ver Máquinas'}
        

        #traigo las maquinas usando la emsefor
        #maquinas = Maquinas.objects.prefetch_related('emsefor_maquinas').filter(emsefor_maquinas__pk = idemsefor)
       
        emsefor = Emsefor.objects.get(pk=idemsefor)

        maquinas_emse = EmseforMaquinas.objects.prefetch_related('maquinas').filter(emsefor=emsefor).\
            annotate(pk = F('maquinas__pk'), marca = F('maquinas__marca'), modelo = F('maquinas__modelo'), nombre = F('maquinas__nombre')).\
            values('pk', 'marca', 'modelo', 'nombre', 'cantidad', 'id')
       

        context.update({
            'maquinas' : maquinas_emse,
            'emsefor' : emsefor
        })

        return render(request, 'emsefor/view_maquinas.html', context=context)

    except Exception as e:
        messages.error(request, str(e))
        return redirect('emsefor-index')
    

@login_required
def editCantidadMaquinasEmsefor(request, idmaquina_ems):
    
    try:

        context = {
               'category' : 'Emsefor',
                'action' : 'Administración de Emsefor / Editar Cantidad de Máquinas'}
        
        emsefor_maq = EmseforMaquinas.objects.get(pk = idmaquina_ems)

        context.update({
            'emsefor_maq' : emsefor_maq,
        })


        if request.method == 'POST':

            cantidad = request.POST.get('cantidad')

            try:
                emsefor_maq.cantidad = cantidad
                emsefor_maq.save()
                messages.success(request, "La Cantidad de Máquinas se ha editado con éxito")

                return HttpResponseRedirect(reverse("emsefor-view-maquinas", args=[emsefor_maq.emsefor_id]))

            except Exception as e:
                messages.error(request, str(e))
                return render(request, 'emsefor/emsefor/edit_cantidad_maquinas.html', context=context)



        return render(request, 'emsefor/edit_cantidad_maquinas.html', context=context)
        

    
    except EmseforMaquinas.DoesNotExist as a:
         messages.error(request, str(e))
         return redirect('emsefor-index')
        
    except Exception as e:
        messages.error(request, str(e))
        return redirect('emsefor-index')
    

def deleteMaquinaEmsefor(request, id):
    try:
        obj = EmseforMaquinas.objects.get(pk=id)

        id_emsefor = obj.emsefor_id
        obj.delete()
       
        messages.success(request, "La Maquina ha sido eliminada de la Emsefor.")
        return HttpResponseRedirect(reverse("emsefor-view-maquinas", args=[id_emsefor]))
      

    except Emsefor.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))