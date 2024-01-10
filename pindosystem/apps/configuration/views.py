from django.shortcuts import render, redirect
from configuration.models import Usosrodales, IntervencionesTypes, InventariosTypes, MapConfigGis, CapasBases, CapasBasesDefault
from login.models import Users
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse, Http404, HttpResponseRedirect
from django.db import IntegrityError
from django.urls import reverse

from configuration.forms import CapasBasesForm

# Create your views here.
@login_required
def indexUsosRodales(request):
    
    usos_rodales = Usosrodales.objects.all()
    context = {'usos_rodales' : usos_rodales, 
               'category' : 'Usos Rodales',
                'action' : 'Administración de Categorías de Usos Rodales'}

    return render(request, 'configuration/usos_rodales/index.html', context)

@login_required
def addUsosRodales(request):
    context = {
               'category' : 'Usos Rodales',
                'action' : 'Crea un nuevo Uso'}

    if request.method == 'POST':
        try:
        
            name = request.POST.get('name')
       
            user_entity = Users.objects.get(pk=request.user.pk)

            #creo el objeto
            uso_rodal = Usosrodales.objects.create(name = name, user = user_entity)
        

            messages.success(request, "El Uso ha sido agregado con éxito!.")
            return redirect('usos-rodales-index')
    
        except IntegrityError as e:
            messages.error(request, str('Ya existe un Uso con el nombre sugerido. Considere elegir un nombre alternativo!'))
            return render(request, 'configuration/usos_rodales/add.html', context)
        except Exception as e:
           
            return render(request, 'configuration/usos_rodales/add.html', context)
  

    else:
    
        return render(request, 'configuration/usos_rodales/add.html', context)

@login_required
def editUsosRodales(request, id):
    context = {}

    try:
        uso_rodal = Usosrodales.objects.get(pk = id)
        
        context.update({'uso_rodal' : uso_rodal})

        if (request.method == 'POST'):
           
            name = request.POST.get('name')
            uso_rodal.name = name

            try:
                uso_rodal.save()
                messages.success(request, "El Uso se ha editado con éxito")
                return redirect('usos-rodales-index')
                
            
            except IntegrityError as e:
                messages.error(request, str('Ya existe un Uso con el nombre sugerido. Considere elegir un nombre alternativo!'))
                return HttpResponseRedirect(reverse("usos-rodales-edit", args=[id])) 
            except Exception as e:
                messages.error(request, str(e))

                return HttpResponseRedirect(reverse("usos-rodales-edit", args=[id]))          
          
        else:
            return render(request, 'configuration/usos_rodales/edit.html', context)
    
    except OSError as error: 
        print(error) 
    except Exception as e:
        messages.error(request, str(e))
        return redirect('usos-rodales-index')
    
@login_required
def deleteUsoRodales(request, id):

    try:
        uso_rodal = Usosrodales.objects.get(pk=id)
        uso_rodal.delete()
      
       
        messages.success(request, "El Uso ha sido eliminada.")
        return redirect('usos-rodales-index')

    except Usosrodales.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    


@login_required
def indexIntervencionesTypes(request):
    
    intervenciones_types = IntervencionesTypes.objects.all()
    context = {'intervenciones_types' : intervenciones_types, 
               'category' : 'Tipos de Intervención',
                'action' : 'Administración de Categorías de Tipos de Intervención'}

    return render(request, 'configuration/intervenciones_types/index.html', context)


@login_required
def addIntervencionesTypes(request):
    context = {
               'category' : 'Tipos de Intervención',
                'action' : 'Crea una Categoría de Intervención'}

    if request.method == 'POST':
        try:
        
            name = request.POST.get('name')
            color = request.POST.get('color')
       
            user_entity = Users.objects.get(pk=request.user.pk)

            #creo el objeto
            intervencion = IntervencionesTypes.objects.create(name = name, color = color, user = user_entity)
        

            messages.success(request, "La Categoría ha sido agregado con éxito!.")
            return redirect('intervenciones-types-index')
    
        except IntegrityError as e:
            messages.error(request, str('Ya existe una Categoría con el nombre sugerido. Considere elegir un nombre alternativo!'))
            return render(request, 'configuration/intervenciones_types/add.html', context)
        except Exception as e:
            messages.error(request, str(e))
            return render(request, 'configuration/intervenciones_types/add.html', context)
  

    else:
    
        return render(request, 'configuration/intervenciones_types/add.html', context)
    

@login_required
def editIntervencionesTypes(request, id):
    context = {}

    try:
        intervencion = IntervencionesTypes.objects.get(pk = id)
        
        context.update({'intervencion' : intervencion})

        if (request.method == 'POST'):
           
            name = request.POST.get('name')
            intervencion.name = name

            try:
                intervencion.save()
                messages.success(request, "La categoría se ha editado con éxito")
                return redirect('intervenciones-types-index')
                
            
            except IntegrityError as e:
                messages.error(request, str('Ya existe una Categoría con el nombre sugerido. Considere elegir un nombre alternativo!'))
                return HttpResponseRedirect(reverse("intervenciones-types-edit", args=[id])) 
            except Exception as e:
                messages.error(request, str(e))

                return HttpResponseRedirect(reverse("intervenciones-types-edit", args=[id]))          
          
        else:
            return render(request, 'configuration/intervenciones_types/edit.html', context)
    
    except OSError as error: 
        print(error) 
    except Exception as e:
        messages.error(request, str(e))
        return redirect('intervenciones-types-index')
    


@login_required
def deleteIntervencionesTypes(request, id):

    try:
        intervencion = IntervencionesTypes.objects.get(pk=id)
        intervencion.delete()
       
        messages.success(request, "La categoría ha sido eliminada.")
        return redirect('intervenciones-types-index')

    except Usosrodales.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    


@login_required
def indexInventariosTypes(request):
    
    inventarios_types = InventariosTypes.objects.all()
    context = {'inventarios_types' : inventarios_types, 
               'category' : 'Tipos de Inventarios',
                'action' : 'Administración de Categorías de Tipos de Inventarios'}

    return render(request, 'configuration/inventarios_types/index.html', context)


@login_required
def addInventarioTypes(request):
    context = {
               'category' : 'Tipos de Inventarios',
                'action' : 'Crea una Categoría de Inventario'}

    if request.method == 'POST':
        try:
        
            name = request.POST.get('name')
       
            user_entity = Users.objects.get(pk=request.user.pk)

            #creo el objeto
            inventario = InventariosTypes.objects.create(name = name, user = user_entity)
        

            messages.success(request, "La Categoría ha sido agregado con éxito!.")
            return redirect('inventarios-types-index')
    
        except IntegrityError as e:
            messages.error(request, str('Ya existe una Categoría con el nombre sugerido. Considere elegir un nombre alternativo!'))
            return render(request, 'configuration/inventarios_types/add.html', context)
        except Exception as e:
            messages.error(request, str(e))
            return render(request, 'configuration/inventarios_types/add.html', context)
  

    else:
    
        return render(request, 'configuration/inventarios_types/add.html', context)
    


@login_required
def editInventarioTypes(request, id):
    context = {}

    try:
        inventario = InventariosTypes.objects.get(pk = id)
        
        context.update({'inventario' : inventario})

        if (request.method == 'POST'):
           
            name = request.POST.get('name')
            inventario.name = name

            try:
                inventario.save()
                messages.success(request, "La categoría se ha editado con éxito")
                return redirect('inventarios-types-index')
                
            
            except IntegrityError as e:
                messages.error(request, str('Ya existe una Categoría con el nombre sugerido. Considere elegir un nombre alternativo!'))
                return HttpResponseRedirect(reverse("inventarios-types-edit", args=[id])) 
            except Exception as e:
                messages.error(request, str(e))

                return HttpResponseRedirect(reverse("inventarios-types-edit", args=[id]))          
          
        else:
            return render(request, 'configuration/inventarios_types/edit.html', context)
    
    except OSError as error: 
        print(error) 
    except Exception as e:
        messages.error(request, str(e))
        return redirect('inventarios-types-index')
    
@login_required
def deleteInventarioTypes(request, id):

    try:
        inventario = InventariosTypes.objects.get(pk=id)
        inventario.delete()
       
        messages.success(request, "La categoría ha sido eliminada.")
        return redirect('inventarios-types-index')

    except Usosrodales.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

@login_required
def indexMapConfiguration(request):
    
    return render(request, 'configuration/map_configuration/index.html')


@login_required
def viewMapConfig(request):

    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Ver las Configuraciones del Mapa'}
 
    configuration_obj = MapConfigGis.objects.all().first()

    context.update({'configuration' : configuration_obj})

    
    return render(request, 'configuration/map_configuration/map_config.html', context)

@login_required
def editMapConfig(request):
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Ver las Configuraciones del Mapa'}
    
    configuration = MapConfigGis.objects.all().first()
    context.update({'configuration' : configuration})
    
    if request.method == 'POST':

        crs = request.POST.get('crs') if (request.POST.get('crs') != '') else None
        center_x = request.POST.get('center_x')
        center_y = request.POST.get('center_y')
        zoom = request.POST.get('zoom')
        min_zoom = request.POST.get('min_zoom') if (request.POST.get('min_zoom') != '') else None
        max_zoom = request.POST.get('max_zoom') if (request.POST.get('max_zoom') != '') else None
        renderer = request.POST.get('renderer')


        try:

            if configuration == None:
                if crs != None:
                    object_create = MapConfigGis.objects.create(crs=crs, center_x=center_x, center_y=center_y, zoom=zoom, min_zoom=min_zoom, 
                                                            max_zoom=max_zoom, renderer=renderer)
                else:
                    object_create = MapConfigGis.objects.create(center_x=center_x, center_y=center_y, zoom=zoom, min_zoom=min_zoom, 
                                                            max_zoom=max_zoom, renderer=renderer)
            else:
                configuration.crs = crs
                configuration.center_x = center_x
                configuration.center_y = center_y
                configuration.zoom = zoom
                configuration.min_zoom = min_zoom
                configuration.max_zoom = max_zoom
                configuration.renderer = renderer

                configuration.save()

            messages.success(request, "La Configuración se ha editado con éxito")
            return redirect('map-config-index')
        
        except Exception as e:
                messages.error(request, str(e))

                return HttpResponseRedirect(reverse("map-edit-config"))    

    
    return render(request, 'configuration/map_configuration/edit.html', context)


@login_required
def indexBaseMaps(request):
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Ver las Configuraciones de las Capas Bases'}
    
    capasbases = CapasBases.objects.all()
    context.update({'capasbases' : capasbases})
    return render(request, 'configuration/basemaps/index.html', context)


@login_required
def addBaseMaps(request):
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Agregar nueva Capa Base'}
     
    if request.method == 'POST':
        
        proc_form = CapasBasesForm(request.POST)

        if proc_form.is_valid():
            proc_form.save()
            messages.success(request, "La Capa Base ha sido agregada correctamente")
            return redirect('index-basemaps')

    return render(request, 'configuration/basemaps/add.html', context)


@login_required
def editBaseMaps(request, idcapabase):

    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Editar Capa Base'}
    
    try:
     
        capabase = CapasBases.objects.get(pk=idcapabase)
        context.update({'capabase' : capabase})

        if request.method == 'POST':
            proc_form = CapasBasesForm(request.POST, instance=capabase)

            if proc_form.is_valid():
                proc_form.save()
                messages.success(request, "La Capa Base ha sido editada correctamente")
                return redirect('index-basemaps')
            


    except CapasBases.DoesNotExist:
        messages.error(request, str('Error al traer la Capa Base. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("index-basemaps"))
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("index-basemaps"))

    return render(request, 'configuration/basemaps/edit.html', context)


@login_required
def deleteBaseMap(request, id):
    try:
        obj = CapasBases.objects.get(pk=id)
        obj.delete()
       
        messages.success(request, "La Capa Base ha sido eliminado.")
        return redirect('index-basemaps')

    except CapasBases.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    
@login_required
def editBaseMapDefault(request):
    
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Editar Capa Base por defecto'}
    #traigo las capas bases
    capasbases = CapasBases.objects.values_list('pk', 'name').order_by('name');
    context.update({'capasbases' : capasbases});

    #traigo el default actual
    capadefault = CapasBasesDefault.objects.first();
    context.update({'capadefault' : capadefault});

    #si el get first es null, creo unobjeto ylo guardo

    if request.method == 'POST':

        capabase_id = request.POST.get('select-capabase')

        try:
            capabase_select = CapasBases.objects.get(pk=capabase_id);
        
            if capadefault == None:
                capadefault_new = CapasBasesDefault.objects.create(capabase=capabase_select)
                messages.success(request, "La Capa Base ha sido asignada como Default correctamente")
                return redirect('index-basemaps')
        
            else:
                #tengo el objeto, por tanto edito
                capadefault.capabase = capabase_select
                capadefault.save()
                messages.success(request, "La Capa Base Dedault ha sido editada correctamente")
                return redirect('index-basemaps')


        except CapasBases.DoesNotExist as e:
            messages.error(request, str('Error al traer la Capa Base. Intente nuevamente!'))
            return HttpResponseRedirect(reverse("index-basemaps"))
        
        except CapasBasesDefault.DoesNotExist as e:
            messages.error(request, str('Error al traer la Capa Base Default. Intente nuevamente!'))
            return HttpResponseRedirect(reverse("index-basemaps"))
        
        except Exception as e:
            messages.error(request, str(e))
            return HttpResponseRedirect(reverse("index-basemaps"))


       




    



    return render(request, 'configuration/basemapsdefault/edit.html', context)


    


  

 
   
