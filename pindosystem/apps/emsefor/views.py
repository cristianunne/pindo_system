from django.shortcuts import render, redirect
from emsefor.models import Emsefor
from django.contrib import messages
from django.http import Http404

from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import base64
from django.core.files.base import ContentFile
from general_utility import getEmseforsApiSap

from emsefor.utility import filterEmsefor, filterEmseforWithId

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