from django.shortcuts import render, redirect
from sagpyas.models import Sagpyas, SagpyasFiles
from django.contrib import messages
from django.http import FileResponse, Http404
from login.models import Users
from rodales.models import Rodales
import os, re


from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import base64
from django.conf import settings

from sagpyas.forms import CreateSagpyasForm, EditSagpyasForm


# Create your views here.


def index(request):

    sagpyas = Sagpyas.objects.all()

    context = {'sagpyas' : sagpyas, 
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas'}

    return render(request, 'sagpyas/index.html', context)


def addSagpyas(request):

    if (request.method == 'POST'):
        form_sagpyas = CreateSagpyasForm(request.POST)

        if form_sagpyas.is_valid():
            form_sagpyas.save()
            messages.success(request, "El Sagpya se ha agregado con éxito")

            return redirect('sagpyas-index')
        else:
            print(form_sagpyas.errors)
            messages.error(request, "El Sagpya no se ha agregado. Intente nuevamente.")
    
    return render(request, 'sagpyas/add.html')

def editSagpyas(request, id):
    context = {}

    try:
        sagpya = Sagpyas.objects.get(pk = id)
        #print(sagpya)
        context.update({'sagpyas' : sagpya})
        if (request.method == 'POST'):
            proc_form = EditSagpyasForm(request.POST, instance=sagpya)

            if proc_form.is_valid():
                proc_form.save()
                messages.success(request, "El Sagpya se ha editado con éxito")

                return redirect('sagpyas-index')
        else:
            return render(request, 'sagpyas/edit.html', context)
    
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')
    

def viewSagpyas(request, id):
    try:
        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Archivos'}
        
        sagpyas = Sagpyas.objects.get(pk = id)
        files_sagpyas = sagpyas.sagpyas_files.all()

        BASE_DIR = os.path.dirname(os.path.abspath(__file__))

        #print(settings.MEDIA_URL)
        #print(BASE_DIR)
     
        context.update({'rodales' : sagpyas.rodales.all()})
        context.update({'sagpyas_data' : sagpyas})
        context.update({'sagpyas_files' : files_sagpyas})
        

        return render(request, 'sagpyas/view.html', context=context)
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')

def deleteSagpyas(request, id):
    
   
    try:
        sagpya = Sagpyas.objects.get(pk=id)
        sagpya.delete()
       
        messages.success(request, "El Sagpya ha sido eliminado.")
        return redirect('sagpyas-index')

    except Sagpyas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))



def manageFilesSagpyas(request):
    pass


def uploadFilesViewSagpyas(request, id):
    try:
        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Subida de Archivos'}
        
        sagpyas = Sagpyas.objects.get(pk = id)
     

        context.update({'sagpyas_data' : sagpyas})
        
        return render(request, 'sagpyas/upload_view.html', context=context)
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')

@login_required
@csrf_exempt
def uploadFilesSagpyas(request):
     if request.method == 'POST':
        file_data = request.FILES['file']
        sagpyas_id = request.POST.get('sagpyas_id')
        name_ = request.POST.get('name_id')
        description = request.POST.get('description')

        #print(file_data)

        fileName, fileExtension = os.path.splitext(str(file_data))
        #print(fileExtension)

        extension = fileExtension.replace('.', '')


        
        try:
            
            sagpya_entity = Sagpyas.objects.get(pk=sagpyas_id)
            user_entity = Users.objects.get(pk=request.user.pk)

            #cargo la url de media
            print("extension " + extension)
           

            if file_data != None:

                sagpya_file_entity = SagpyasFiles.objects.create(file=file_data, user = user_entity, sagpyas = sagpya_entity, 
                                                                 name = name_, description = description, size=(round((file_data.size / 1024), 2)), type=extension)
                #print(sagpya_entity)
                """sagpya_file_entity = SagpyasFiles()
                sagpya_file_entity.file = file_data
                sagpya_file_entity.user = user_entity
                sagpya_file_entity.sagpyas = sagpya_entity"""



                #sagpya_file_entity.save()
                return JsonResponse({'respuesta' : True})

       
        except Exception as e:
            return JsonResponse({'respuesta' : e})
        

@login_required
@csrf_exempt
def downloadFile(request, id):

    try:
       
        sagpyas_file = SagpyasFiles.objects.get(pk = id)
        #print(sagpyas_file.file)

        file = os.path.join(settings.MEDIA_ROOT, str(sagpyas_file.file))
        fileOpen = open(file, 'rb')

        return FileResponse(fileOpen)
     
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')
    
@login_required
def viewDetailsFile(request, id):

    try:
        
        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Ver Detalles del Archivo'}
        
        sagpyas_file = SagpyasFiles.objects.get(pk = id)
        context.update({'sagpyas_file' : sagpyas_file})
        return render(request, 'sagpyas/files_details.html', context=context)
     
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')  
    

@login_required
def deleteSagpyasFiles(request, id):
    try:

        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Archivos'}

        obj = SagpyasFiles.objects.get(pk=id)
        id_sagpya = obj.sagpyas_id


        obj.delete()
       
        messages.success(request, "El Archivo ha sido eliminado.")
        return redirect('sagpyas-view', id=id_sagpya)

    except SagpyasFiles.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

def assignRodalToSagpya(request, idsagpya):

    try:
        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Rodales'}
        
        sagpyas = Sagpyas.objects.get(pk = idsagpya)

        #res_ = sagpyas.rodales.remove(7)
      

        lista_rodales_ids = []

        for rod_sag in sagpyas.rodales.all():

            lista_rodales_ids.append(rod_sag.pk)


        #traigo los rodales que estan relacionados con este sagpya
        rodales = Rodales.objects.exclude(rodales_id__in = lista_rodales_ids).values_list("rodales_id", "cod_sap")
       
        context.update({'rodales' : rodales})
   

        if (request.method == 'POST'):

            rodal = request.POST.get('select-rodal')
            rod_obj = Rodales.objects.get(pk=rodal)

            exist_rod = False

            for rod_sag in sagpyas.rodales.all():
                if rod_sag.pk == rod_obj.pk:
                    exist_rod = True
        
            
            if exist_rod == False:
                sagpyas.rodales.add(rod_obj)
                messages.success(request, "El Rodal se ha asignado correctamente!.")
                return redirect('sagpyas-view', id=idsagpya)
              
            else:
                messages.error(request, 'El Rodal ya esta asignado en el actual Sagpya')
                
           

        context.update({'sagpyas_data' : sagpyas})


        return render(request, 'sagpyas/assign_rodal_sagpya.html', context=context)
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')
    


def deleteRodalesSagpyas(request, idsagpya, idrodal):
    
   
    try:
        sagpyas = Sagpyas.objects.get(pk = idsagpya)
        sagpyas.rodales.remove(idrodal)
       
        messages.success(request, "El Rodal ha sido eliminado del Sagpya.")
        return redirect('sagpyas-view', id=idsagpya)

    except Sagpyas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))

