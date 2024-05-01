from django.shortcuts import render, redirect
from procedencias.models import Procedencias
from procedencias.forms import CreateProcedenciaForm, EditProcedenciaForm

from django.contrib import messages
from django.http import Http404

from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import base64

from rodales.utility import get_rodales_by_procedencia


# Create your views here.

def index(request):

    procedencias = Procedencias.objects.all()

    context = {'procedencias' : procedencias, 
               'category' : 'Procedencias',
                'action' : 'Administración de Procedencias'}

    return render(request, 'procedencias/index.html', context)
    


def addProcedencia(request):
    if (request.method == 'POST'):
        form_procedencia = CreateProcedenciaForm(request.POST)

        if form_procedencia.is_valid():
            form_procedencia.save()
            messages.success(request, "La Procedencia se ha agregado con éxito")

            return redirect('procedencias-index')
    
    return render(request, 'procedencias/add.html')


def editProcedencia(request, id):
    
    context = {}

    try:
        procedencias = Procedencias.objects.get(pk = id)
        context.update({'procedencias_data' : procedencias})
        if (request.method == 'POST'):
            proc_form = EditProcedenciaForm(request.POST, instance=procedencias)

            if proc_form.is_valid():
                proc_form.save()
                messages.success(request, "La Procedencia se ha editado con éxito")

                return redirect('procedencias-index')
            else:
                messages.error(request, "Error")

                return render(request, 'procedencias/edit.html', context)

        else:
            return render(request, 'procedencias/edit.html', context)
    
    except Exception as e:
        messages.error(request, str(e))
        return redirect('procedencias-index')
    

def deleteProcedencias(request, id):
    try:
        obj = Procedencias.objects.get(pk=id)
        obj.delete()
       
        messages.success(request, "La Procedencia ha sido eliminado.")
        return redirect('procedencias-index')

    except Procedencias.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))

def modifiedLogoProcedencias(request, id):
      try:
        context = {
               'category' : 'Procedencias',
                'action' : 'Administración de Procedencias / Cambio de Logo'}

        procedencias = Procedencias.objects.get(pk = id)
        
        context.update({'procedencias_data' : procedencias})
        """if request.method == 'POST':
            file = request.POST.get('dropzone-default')
            print(file)"""
       

        return render(request, 'procedencias/modified_logo.html', context=context)
      
      except Exception as e:
        messages.error(request, str(e))
        return redirect('procedencias-index')
      

@login_required
@csrf_exempt
def uploadImage(request):

    if request.method == 'POST':
        image_data = request.FILES['file']
        procedencias_id = request.POST.get('procedencias_id')

        try:
            procedencias = Procedencias.objects.get(pk=procedencias_id)

            if image_data != None:
                #format, imgstr = image_data.split(';base64,')
                image_string = base64.standard_b64encode(image_data.read())

                procedencias.image = image_string.decode()
                procedencias.save()
                return JsonResponse({'respuesta' : True})


        except Procedencias.DoesNotExist:
              return JsonResponse({'respuesta' : False})
        except Exception as e:
            return JsonResponse({'respuesta' : False})
        

@login_required
def viewProcedencia(request, idprocedencia):
    context = {}

    try:
        procedencias = Procedencias.objects.get(pk = idprocedencia)
        context.update({'procedencias_data' : procedencias})

        #traigo la cantidad de rodales
        rodales = get_rodales_by_procedencia(idprocedencia)
        context.update({'total_rodales' : len(rodales)})

        context.update({'rodales' : rodales})

        




        return render(request, 'procedencias/view.html', context)
    
    except Exception as e:
        messages.error(request, str(e))
        return redirect('procedencias-index')