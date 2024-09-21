from django.shortcuts import render, redirect
from sagpyas.models import Sagpyas, SagpyasFiles, SagpyasExpedientes, SagpyasRodales, SagpyasExpedientesMovimientos, \
    SagpyasExpedientesFiles, SagpyasMovimientos, SagpyasMovimientosFiles
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
from django.urls import reverse
from django.http import JsonResponse, Http404, HttpResponseRedirect



# Create your views here.


def index(request):

    sagpyas = Sagpyas.objects.all()

    context = {'sagpyas' : sagpyas, 
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas'}
    
    for sap in sagpyas:
        if sap.expedientes is not None:
            print(sap.expedientes.name)
    

    return render(request, 'sagpyas/index.html', context)


def addSagpyas(request):

    if (request.method == 'POST'):

        #traigo todos los datos

        #cod_sap = request.POST.get('cod_sap')
        operaciones = request.POST.get('operaciones')
        fecha = request.POST.get('fecha')
        sup_aprobada = request.POST.get('sup_aprobada')
        fecha = request.POST.get('fecha')
        expediente = request.POST.get('expediente')
        netad = request.POST.get('netad')
        resolucion = request.POST.get('resolucion')

        #comprueb que el expediente no venga vacio, igual puedo almacenar

        if str(netad) == "" or str(netad) is None:
            #almaceno sin expediente
            
            Sagpyas.objects.create(operaciones=operaciones, fecha=fecha, sup_aprobada=sup_aprobada, expediente=expediente, 
                                   resolucion=resolucion)
            messages.success(request, "El Sagpya se ha agregado con éxito")

            return redirect('sagpyas-index')

        
        else:
            #creo el expediente primero
            Sagpyas.objects.create(operaciones=operaciones, fecha=fecha, sup_aprobada=sup_aprobada, expediente=expediente,
                                   expedientes= SagpyasExpedientes.objects.get_or_create(name=netad)[0], resolucion=resolucion)
           
            messages.success(request, "El Sagpya se ha agregado con éxito")

            return redirect('sagpyas-index')

       


        """if form_sagpyas.is_valid():
            form_sagpyas.save()
            messages.success(request, "El Sagpya se ha agregado con éxito")

            return redirect('sagpyas-index')
        else:
            print(form_sagpyas.errors)
            messages.error(request, "El Sagpya no se ha agregado. Intente nuevamente.")"""
    
    return render(request, 'sagpyas/add.html')

def editSagpyas(request, id):
    context = {}

    try:
        sagpya = Sagpyas.objects.get(pk=id)

        context.update({'sagpyas' : sagpya})


        operaciones = request.POST.get('operaciones')
        fecha = request.POST.get('fecha')
        sup_aprobada = request.POST.get('sup_aprobada')
        expediente_name = request.POST.get('expediente') #netad

        netad = request.POST.get('netad') #netad

        resolucion = request.POST.get('resolucion')


        #comprueb que el expediente no venga vacio, igual puedo almacenar

       
     

        if (request.method == 'POST'):

            sagpya.operaciones = operaciones
            sagpya.fecha = fecha
            sagpya.sup_aprobada = sup_aprobada
            sagpya.expediente = expediente_name
            sagpya.resolucion = resolucion
           


            if str(netad) == "" or str(netad) is None:
                #si lo pngo a null elimino el expediente

                #consulto si existe el objeto
              

                if sagpya.expedientes is not None:
                   
                    exp = SagpyasExpedientes.objects.get(pk=sagpya.expedientes.pk)

                    exp.delete()
                    sagpya.expedientes = None
                    sagpya.save()
                    messages.success(request, "El Sagpya se ha editado con éxito")

                return redirect('sagpyas-index')

            
            else:

                #consulto si ya hay y modifico, sino lo creo
                expediente = None

                if sagpya.expedientes is None:
                    expediente = SagpyasExpedientes.objects.get_or_create(name=netad)[0]
                    sagpya.expedientes = expediente
                else:
                    sagpya.expedientes.name = netad
                    sagpya.expedientes.save()

                
               
                sagpya.save()
                #creo el expediente primero
            
            
                messages.success(request, "El Sagpya se ha editado con éxito")

                return redirect('sagpyas-index')
    
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')
    
    return render(request, 'sagpyas/edit.html', context=context)
    

def viewSagpyas(request, id):
    try:
        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Archivos'}
        
        sagpyas = Sagpyas.objects.get(pk = id)
        files_sagpyas = sagpyas.sagpyas_files.all()
        
        rod_sagp = SagpyasRodales.objects.filter(sagpyas=sagpyas)

        

        BASE_DIR = os.path.dirname(os.path.abspath(__file__))

     
       
        context.update({'sagpyas_data' : sagpyas})
        context.update({'sagpyas_files' : files_sagpyas})
        context.update({'rodales' : rod_sagp})

        

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
        #tengo que cambiar la tabla de consultla que ahora es la tabla intermedia

        rodales_Sagpya = SagpyasRodales.objects.filter(sagpyas = idsagpya)

        

        for rod_sag in rodales_Sagpya:

            lista_rodales_ids.append(rod_sag.rodales_id)


        #traigo los rodales que estan relacionados con este sagpya
        rodales = Rodales.objects.exclude(rodales_id__in = lista_rodales_ids).values_list("rodales_id", "cod_sap")
       
        context.update({'rodales' : rodales})
   

        if (request.method == 'POST'):

            rodal = request.POST.get('select-rodal')
            sup_aprobada = request.POST.get('sup_aprobada')
            rod_obj = Rodales.objects.get(pk=rodal)
            turno = request.POST.get('turno')
            tarea = request.POST.get('tarea')


            SagpyasRodales.objects.create(rodales = rod_obj, sagpyas=sagpyas, superficie_aprobada=sup_aprobada, turno=turno, 
                                          tarea=tarea)

            messages.success(request, "El Rodal se ha asignado correctamente!.")
            return redirect('sagpyas-view', id=idsagpya)


        context.update({'sagpyas_data' : sagpyas})


        return render(request, 'sagpyas/assign_rodal_sagpya.html', context=context)
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')
    

def editRodalSagpya(request, idsagpyarodal):
    
    try:
        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Rodales Asignados'}
        

        #traigo el objeto
        rodal_sagpya = SagpyasRodales.objects.get(pk=idsagpyarodal)

        context.update({'rodal_sagpya' : rodal_sagpya})


        if (request.method == 'POST'):

            
            sup_aprobada = request.POST.get('sup_aprobada')
            turno = request.POST.get('turno')
            tarea = request.POST.get('tarea')

            rodal_sagpya.superficie_aprobada = sup_aprobada
            rodal_sagpya.turno = turno
            rodal_sagpya.tarea = tarea

            rodal_sagpya.save()
            #creo el expediente primero
            

            messages.success(request, "La Información se ha editado con éxito")

            
            return redirect('sagpyas-view', id=rodal_sagpya.sagpyas_id)



    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')
    
    return render(request, 'sagpyas/edit_rodal_sagpya.html', context=context)



def deleteRodalesSagpyas(request, idsagpya, idrodalsagpya):
    
   
    try:
        #sagpyas = Sagpyas.objects.get(pk = idsagpya)

        rod = SagpyasRodales.objects.get(pk = idrodalsagpya)

        rod.delete()
       
        messages.success(request, "El Rodal ha sido eliminado del Sagpya.")
        return redirect('sagpyas-view', id=idsagpya)

    except Sagpyas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    
def viewExpediente(request, idexpediente):
    
    

    try:
        #me trae la lista de movimientos para el expediente
        expediente = SagpyasExpedientes.objects.get(pk=idexpediente)

        #traigo los mov

        movimientos = SagpyasExpedientesMovimientos.objects.filter(expediente = expediente)
      

        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Expedientes'}

        context.update({'expediente' : expediente})
        context.update({'movimientos' : movimientos})

        return render(request, 'sagpyas/expedientes/view.html', context)
       

    except Sagpyas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))


def addMovimientoExpediente(request, idexpediente):
    
    context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Expedientes'}
        
    context.update({'expediente' : idexpediente})


    try:
        
       
        #traigo todos los datos
        if (request.method == 'POST'):
        
            name = request.POST.get('name')
            descripcion = request.POST.get('descripcion')
            user_entity = Users.objects.get(pk=request.user.pk)
            expediente = SagpyasExpedientes.objects.get(pk=idexpediente)

            SagpyasExpedientesMovimientos.objects.create(name=name, description=descripcion, user_created=user_entity, 
                                                         expediente=expediente)

            messages.success(request, "El Movimiento se ha agregado con éxito")

            return HttpResponseRedirect(reverse("expedientes-view", args=[idexpediente]))

       
   
    except Exception as e:
        raise Http404(str(e))

    
    return render(request, 'sagpyas/expedientes/add.html', context=context)

def editMovimientoExpediente(request, idmovimiento):
    
    context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Expedientes'}

    try:

        movimiento = SagpyasExpedientesMovimientos.objects.get(pk=idmovimiento)

        context.update({'expediente' : movimiento.expediente.pk})
        context.update({'movimiento' : movimiento})
        
       
        #traigo todos los datos
        if (request.method == 'POST'):
        
            name = request.POST.get('name')
            descripcion = request.POST.get('descripcion')
            user_entity = Users.objects.get(pk=request.user.pk)

            movimiento.name = name
            movimiento.description = descripcion
            movimiento.user_created = user_entity
            

            movimiento.save()

            messages.success(request, "El Movimiento se ha editado con éxito")

            return HttpResponseRedirect(reverse("expedientes-view", args=[movimiento.expediente.pk]))

       
   
    except Exception as e:
        raise Http404(str(e))

    
    return render(request, 'sagpyas/expedientes/edit.html', context=context)

def viewMovimientoDetails(request, idmovimiento, idexpediente):

    context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Expedientes'}
    
    try:
        movimiento = SagpyasExpedientesMovimientos.objects.get(pk=idmovimiento)
        context.update({'movimiento' : movimiento})

        expediente = SagpyasExpedientes.objects.get(pk=idexpediente)
        context.update({'expediente' : expediente})

        files_mov = movimiento.sagpyasexpmov_files.all()
        context.update({'files_mov' : files_mov})

    except Exception as e:
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("expedientes-view", args=[idexpediente]))

        

    return render(request, 'sagpyas/expedientes/view_details.html', context=context)


def uploadFilesViewMovimientos(request, idmovimiento):
    try:
        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Moovimientos / Subida de Archivos'}
        
        movimiento = SagpyasExpedientesMovimientos.objects.get(pk = idmovimiento)
     

        context.update({'movimiento' : movimiento})
        
        return render(request, 'sagpyas/expedientes/upload_view.html', context=context)
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')

@login_required
@csrf_exempt
def uploadFilesMovimientos(request):
     if request.method == 'POST':
        file_data = request.FILES['file']

        sagpyaexp_mov = request.POST.get('mov_id')
        name_ = request.POST.get('name_id')
        description = request.POST.get('description')

        #print(file_data)

        fileName, fileExtension = os.path.splitext(str(file_data))
        #print(fileExtension)

        extension = fileExtension.replace('.', '')


        
        try:
            
            mov_entity =  SagpyasExpedientesMovimientos.objects.get(pk=sagpyaexp_mov)
            user_entity = Users.objects.get(pk=request.user.pk)

            #cargo la url de media
            print("extension " + extension)
           

            if file_data != None:

                sagpya_file_entity = SagpyasExpedientesFiles.objects.create(file=file_data, user = user_entity, 
                                                                            sagpyaexp = mov_entity, 
                                                                 name = name_, description = description, 
                                                                 size=(round((file_data.size / 1024), 2)), type=extension)
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
def downloadFileMovimiento(request, idmovimiento):

    try:
       
        sagpyas_file = SagpyasExpedientesFiles.objects.get(pk = idmovimiento)
        #print(sagpyas_file.file)

        file = os.path.join(settings.MEDIA_ROOT, str(sagpyas_file.file))
        fileOpen = open(file, 'rb')

        return FileResponse(fileOpen)
     
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')
    


@login_required
@csrf_exempt
def viewDetailsFileMovimientos(request, idmovimiento):

    try:
        
        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Expedientes / Ver Detalles del Archivo'}
        
        sagpyas_file = SagpyasExpedientesFiles.objects.get(pk = idmovimiento)
        context.update({'sagpyas_file' : sagpyas_file})
        return render(request, 'sagpyas/expedientes/files_details.html', context=context)
     
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')
    

@login_required
@csrf_exempt
def deleteFileMovimiento(request, id):
    
   
    try:

        mov = SagpyasExpedientesMovimientos.objects.get(pk = id)
        #antes de eliminarlo, tomamos el exp

        idexpediente = mov.expediente.pk

        mov.delete()
       
        messages.success(request, "El Movimiento ha sido eliminado con éxito.")

        return redirect('expedientes-view', idexpediente=idexpediente)

    except Sagpyas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

def addMovimientoSagpya(request, idsagpya):

    context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Expedientes'}
        
    context.update({'idsagpya' : idsagpya})
    
    try:
        sagpya = Sagpyas.objects.get(pk=idsagpya)

        if (request.method == 'POST'):
        
            name = request.POST.get('name')
            descripcion = request.POST.get('descripcion')
            user_entity = Users.objects.get(pk=request.user.pk)
            
            SagpyasMovimientos.objects.create(name=name, description=descripcion, sagpya=sagpya, user_created=user_entity)

            messages.success(request, "El Movimiento se ha agregado con éxito")

            return redirect('movimientos-view', idsagpya=idsagpya)

    
    
    except Sagpyas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    
    return render(request, 'sagpyas/movimientos/add.html', context=context)
    

def movimientosView(request, idsagpya):
    try:
        #me trae la lista de movimientos para el expediente
        movimientos = SagpyasMovimientos.objects.filter(sagpya_id=idsagpya)

        


        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Expedientes'}

        context.update({'movimientos' : movimientos})
        context.update({'idsagpya' : idsagpya})
        

        return render(request, 'sagpyas/movimientos/view.html', context)
       

    except Sagpyas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

def viewMovimientosSagpyasDetails(request, idmovimiento):

    context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Expedientes'}
    
    try:
        movimiento = SagpyasMovimientos.objects.get(pk=idmovimiento)
        context.update({'movimiento' : movimiento})

        """expediente = SagpyasExpedientes.objects.get(pk=idexpediente)
        context.update({'expediente' : expediente})"""

        files_mov = movimiento.sagpyasmov_files.all()
        context.update({'files_mov' : files_mov})

    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')

        

    return render(request, 'sagpyas/movimientos/view_details.html', context=context)

def editMovimientoSagpya(request, idmovimiento):
    
    context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Sagpyas / Gestión de Expedientes'}

    try:
        
        movimiento = SagpyasMovimientos.objects.get(pk=idmovimiento)

        context.update({'movimiento' : movimiento})

        if (request.method == 'POST'):
            
            name = request.POST.get('name')
            descripcion = request.POST.get('descripcion')
            user_entity = Users.objects.get(pk=request.user.pk)

            movimiento.name = name
            movimiento.description = descripcion
            movimiento.user_created = user_entity 
            movimiento.save()

            messages.success(request, "El Movimiento se ha editado con éxito")

            return HttpResponseRedirect(reverse("movimientos-view", args=[movimiento.sagpya.pk]))

    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')
    
    return render(request, 'sagpyas/movimientos/edit.html', context=context)

def deleteMovimientos(request, idmovimiento):
    
    try:

        mov = SagpyasMovimientos.objects.get(pk = idmovimiento)
        #antes de eliminarlo, tomamos el exp


        mov.delete()
       
        messages.success(request, "El Movimiento ha sido eliminado con éxito.")

        return redirect('movimientos-mov-view', idmovimiento=idmovimiento)

    except Sagpyas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    


def uploadFilesViewMovimientosSagpyas(request, idmovimiento):
    try:
        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Moovimientos / Subida de Archivos'}
        
        movimiento = SagpyasMovimientos.objects.get(pk = idmovimiento)
     

        context.update({'movimiento' : movimiento})
        
        return render(request, 'sagpyas/movimientos/upload_view.html', context=context)
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')

        

@login_required
@csrf_exempt
def uploadFilesMovimientosSagpyas(request):
     if request.method == 'POST':
        file_data = request.FILES['file']

        sagpyaexp_mov = request.POST.get('mov_id')
        name_ = request.POST.get('name_id')
        description = request.POST.get('description')

        #print(file_data)

        fileName, fileExtension = os.path.splitext(str(file_data))
        #print(fileExtension)

        extension = fileExtension.replace('.', '')


        
        try:
            
            mov_entity =  SagpyasMovimientos.objects.get(pk=sagpyaexp_mov)
            user_entity = Users.objects.get(pk=request.user.pk)

            #cargo la url de media

           

            if file_data != None:

                sagpya_file_entity = SagpyasMovimientosFiles.objects.create(file=file_data, user = user_entity, 
                                                                            sagpyamov = mov_entity, 
                                                                 name = name_, description = description, 
                                                                 size=(round((file_data.size / 1024), 2)), type=extension)
                

                #sagpya_file_entity.save()
                return JsonResponse({'respuesta' : True})

       
        except Exception as e:
            return JsonResponse({'respuesta' : e})


@login_required
@csrf_exempt
def viewDetailsFileMovimientosSagpya(request, idmovimiento):

    try:
        
        context = {
               'category' : 'Sagpyas',
                'action' : 'Administración de Expedientes / Ver Detalles del Archivo'}
        
        sagpyas_file = SagpyasMovimientosFiles.objects.get(pk = idmovimiento)
        context.update({'sagpyas_file' : sagpyas_file})
        return render(request, 'sagpyas/movimientos/files_details.html', context=context)
     
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')


@login_required
@csrf_exempt
def downloadFileMovimientoSagpya(request, idmovimiento):

    try:
       
        sagpyas_file = SagpyasMovimientosFiles.objects.get(pk = idmovimiento)
        #print(sagpyas_file.file)

        file = os.path.join(settings.MEDIA_ROOT, str(sagpyas_file.file))
        fileOpen = open(file, 'rb')

        return FileResponse(fileOpen)
     
     
    except Exception as e:
        messages.error(request, str(e))
        return redirect('sagpyas-index')


@login_required
@csrf_exempt
def deleteFileMovimientoSagpya(request, id):
    
   
    try:

        mov = SagpyasMovimientosFiles.objects.get(pk = id)
        #antes de eliminarlo, tomamos el exp

        idmovimiento = mov.sagpyamov.pk

        mov.delete()
       
        messages.success(request, "El Archivo se ha sido eliminado con éxito.")

        return redirect('movimientos-mov-view', idmovimiento=idmovimiento)

    except Sagpyas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    




