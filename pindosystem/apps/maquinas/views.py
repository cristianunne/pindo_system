from django.shortcuts import render, redirect
from maquinas.models import Maquinas
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from login.models import Users
from django.contrib import messages

from maquinas.forms import EditMaquinasForm

import os
from django.conf import settings

from login.decorators import admin_access_only

# Create your views here.
@login_required
def index(request):

    maquinas = Maquinas.objects.all()

    context = {'maquinas' : maquinas, 
               'category' : 'Maquinas',
                'action' : 'Administración de Maquinas'}

    return render(request, 'maquinas/index.html', context)


@login_required
@csrf_exempt
def addMaquina(request):

    context = {
               'category' : 'Maquinas',
                'action' : 'Crea una nueva Maquina'}

    if request.method == 'POST':
        try:
            file_data = request.FILES['file']
            name = request.POST.get('name')
            marca = request.POST.get('marca')
            modelo = request.POST.get('modelo')

            user_entity = Users.objects.get(pk=request.user.pk)

            #creo el objeto
            maquina = Maquinas.objects.create(nombre = name, marca = marca, modelo = modelo, image=file_data, user = user_entity)
        

            messages.success(request, "La Maquina ha sido agregada.")
            #return redirect('maquinas-index')
            return JsonResponse({'respuesta' : True})
    
        except Exception as e:
            return JsonResponse({'respuesta' : e})

    else:
    
        return render(request, 'maquinas/add.html', context)

@login_required
def editMaquina(request, id):
    context = {}

    try:
        maquina = Maquinas.objects.get(pk = id)
        url_image = os.path.join(settings.MEDIA_ROOT, str(maquina.image))
        #url_image =  maquina.image.url
        #print(sagpya)
        context.update({'maquina' : maquina})
        if (request.method == 'POST'):
           
            proc_form = EditMaquinasForm(request.POST, request.FILES, instance=maquina)

            if proc_form.is_valid():

                #elimino el archivo anterior
                os.remove(url_image)


                proc_form.save()
                messages.success(request, "La Máquina se ha editada con éxito")

                return redirect('maquinas-index')
          
        else:
            return render(request, 'maquinas/edit.html', context)
    
    except OSError as error: 
        print(error) 
    except Exception as e:
        messages.error(request, str(e))
        return redirect('maquinas-index')

@login_required
@admin_access_only
def deleteMaquina(request, id):

    try:
        maquina = Maquinas.objects.get(pk=id)

        #capturo la imagen para borrar tmb
        url_image = os.path.join(settings.MEDIA_ROOT, str(maquina.image))

        maquina.delete()
        os.remove(url_image)
       
        messages.success(request, "La Máquina ha sido eliminada.")
        return redirect('maquinas-index')

    except Maquinas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))