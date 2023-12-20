from django.shortcuts import render, redirect
from empresas.models import Empresas
from django.contrib import messages
from django.http import Http404

from django.views.decorators.csrf import csrf_exempt
import base64
from django.core.files.base import ContentFile
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
# Create your views here.


def index(request):

    empresas = Empresas.objects.all()
    print(empresas)

    context = {'empresas' : empresas, 
               'category' : 'Empresas',
                'action' : 'Administración de Empresas'}

    return render(request, 'empresas/index.html', context)


def add(request):

    if request.method == 'POST':
        
        name = request.POST.get('name')
        address = request.POST.get('address')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        cuit = request.POST.get('cuit')

        try:
            #creo el objeto
            empresa = Empresas()
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
            return render(request, 'empresas/add.html')
    
    return render(request, 'empresas/add.html')


def editEmpresa(request, id):
    context = {}
    try:
        empresa = Empresas.objects.get(empresas_id = id)
        context.update({'empresa_data' : empresa})

        if request.method == 'POST':
            name = request.POST.get('name')
            address = request.POST.get('address')
            phone = request.POST.get('phone')
            email = request.POST.get('email')
            cuit = request.POST.get('cuit')

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
                return render(request, 'empresas/edit.html')

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
    return render(request, 'empresas/view.html', context=context)



