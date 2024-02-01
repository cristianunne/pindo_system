from django.shortcuts import render, redirect
from configuration.models import Usosrodales, IntervencionesTypes, InventariosTypes, MapConfigGis, CapasBases, \
    CapasBasesDefault, CategoriasCapas, ServiciosIDEConfig, TileLayerWMS
from login.models import Users
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse, Http404, HttpResponseRedirect
from django.db import IntegrityError
from django.urls import reverse

from configuration.forms import CapasBasesForm, CategoriasCapasForm, ServicioIDEForm, LayersForm
from configuration.serializers import CapasBasesByDefaultSerializer
import json

from django.core import serializers

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

    #traigo
    capabasedefault_instance = CapasBasesDefault.objects.first()

    capabasedefault = CapasBasesByDefaultSerializer(capabasedefault_instance)
    context.update({'capabasedefault_serializer' :  json.dumps(capabasedefault)})
    context.update({'capabasedefault' :  capabasedefault_instance})

    if capabasedefault_instance == None:
        messages.error(request, str('No se ha seleccionado una Capa Base por Defecto aún, por favor realice la operación.'))

 
    return render(request, 'configuration/basemaps/index.html', context)


@login_required
def addBaseMaps(request):
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Agregar nueva Capa Base'}
     
    if request.method == 'POST':
        
        proc_form = CapasBasesForm(request.POST)

        if proc_form.is_valid():
            proc_form.instance.user = proc_form.cleaned_data['user'] = Users.objects.get(pk=request.user.pk)
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
        #capabase.user = Users.objects.get(pk=request.user.pk)
        context.update({'capabase' : capabase})

        if request.method == 'POST':
            proc_form = CapasBasesForm(request.POST, instance=capabase)
          
        
            if proc_form.is_valid():
                #proceso los cambios del atributo
                proc_form.instance.user = proc_form.cleaned_data['user'] = Users.objects.get(pk=request.user.pk)
              
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

def indexCategoriasCapas(request):
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Ver las Categorías de Capas'}
     
    categorias_capas = CategoriasCapas.objects.all()
    context.update({'categorias_capas' : categorias_capas})

    return render(request, 'configuration/categorias_capas/index.html', context)

@login_required
def addCategoriasCapas(request):
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Agregar una nueva Categoría de Capa'}
    
    if request.method == 'POST':

        try:
        
            name = request.POST.get('name')
            user_entity = Users.objects.get(pk=request.user.pk)

            categoria = CategoriasCapas.objects.create(name=name, user=user_entity)
            messages.success(request, "La Categoría ha sido agregado con éxito!.")
            return redirect('index-categoriascapas')
    
        except IntegrityError as e:
            messages.error(request, str('Ya existe una Categoría con el nombre sugerido. Considere elegir un nombre alternativo!'))
            return render(request, 'configuration/categorias_capas/add.html', context)
        except Exception as e:
            messages.error(request, str(e))

    return render(request, 'configuration/categorias_capas/add.html', context)


@login_required
def editCategoriasCapas(request, idcategoria):

    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Editar una Categoría de Capa'}
    
    try:
        categoria = CategoriasCapas.objects.get(pk=idcategoria)
        context.update({'categoria' : categoria})

        if request.method == 'POST':
            name = request.POST.get('name')
            user_entity = Users.objects.get(pk=request.user.pk)

            categoria.name = name.upper()
            categoria.user = user_entity

            try:
                categoria.save()
                messages.success(request, "La categoría se ha editado con éxito")
                return redirect('index-categoriascapas')

            except IntegrityError as e:
                messages.error(request, str('Ya existe una Categoría con el nombre sugerido. Considere elegir un nombre alternativo!'))
                return HttpResponseRedirect(reverse("edit-categoriascapas", args=[idcategoria])) 
            except Exception as e:
                messages.error(request, str(e))

                return HttpResponseRedirect(reverse("edit-categoriascapas", args=[idcategoria]))          
          
        return render(request, 'configuration/categorias_capas/edit.html', context)

    except CategoriasCapas.DoesNotExist as e:
            messages.error(request, str('Error al traer la Categoría. Intente nuevamente!'))
            return HttpResponseRedirect(reverse("index-categoriascapas"))
    
    except Exception as e:
            messages.error(request, str(e))
            return HttpResponseRedirect(reverse("index-categoriascapas"))
    


@login_required
def deleteCategoriasCapas(request, id):
    try:
        obj = CategoriasCapas.objects.get(pk=id)
        obj.delete()
       
        messages.success(request, "La Categoría ha sido eliminado.")
        return redirect('index-categoriascapas')

    except CategoriasCapas.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

@login_required
def indexServiciosIDE(request):

    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Ver los Servicios IDE disponibles'}
    
    servicios = ServiciosIDEConfig.objects.all()
    context.update({'servicios' : servicios})
    return render(request, 'configuration/servicios_ide/index.html', context)


@login_required
def addServicioIDE(request):
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Agregar un nuevo Servicio IDE'}
    
    try:
        if request.method == 'POST':
            proc_form = ServicioIDEForm(request.POST)
          
            if proc_form.is_valid():
                #proceso los cambios del atributo
                proc_form.instance.user = proc_form.cleaned_data['user'] = Users.objects.get(pk=request.user.pk)
              
                proc_form.save()
                messages.success(request, "El Servicio IDE se ha creado correctamente")
                return redirect('index-servicios-ide')
    
    
    except Users.DoesNotExist as e:
            messages.error(request, str('Error al traer el Usuario. Intente nuevamente!'))
            return HttpResponseRedirect(reverse("index-servicios-ide"))
    
    except Exception as e:
            messages.error(request, str(e))
            return HttpResponseRedirect(reverse("index-servicios-ide"))

    return render(request, 'configuration/servicios_ide/add.html', context)


@login_required
def editServiciosIDE(request, idservicio):
    
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Editar Servicios IDE'}

    try:

        servicio = ServiciosIDEConfig.objects.get(pk=idservicio)
        context.update({'servicio' : servicio})
       

        if request.method == 'POST':
            proc_form = ServicioIDEForm(request.POST, instance=servicio)
          
            if proc_form.is_valid():
                #proceso los cambios del atributo
                proc_form.instance.user = proc_form.cleaned_data['user'] = Users.objects.get(pk=request.user.pk)
              
                proc_form.save()
                messages.success(request, "El Servicio IDE se ha editado correctamente")
                return redirect('index-servicios-ide')
            
        return render(request, 'configuration/servicios_ide/edit.html', context)
    
    except ServiciosIDEConfig.DoesNotExist as e:
            messages.error(request, str('Error al traer el Servicio. Intente nuevamente!'))
            return HttpResponseRedirect(reverse("index-servicios-ide"))
    
    except Users.DoesNotExist as e:
            messages.error(request, str('Error al traer el Usuario. Intente nuevamente!'))
            return HttpResponseRedirect(reverse("index-servicios-ide"))
    
    except Exception as e:
            messages.error(request, str(e))
            return HttpResponseRedirect(reverse("index-servicios-ide"))
    

@login_required
def deleteServicioIDE(request, id):
    try:
        obj = ServiciosIDEConfig.objects.get(pk=id)
        obj.delete()
       
        messages.success(request, "El Servicio ha sido eliminado.")
        return redirect('index-servicios-ide')

    except ServiciosIDEConfig.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

@login_required
def indexLayers(request):

    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Ver las Capas disponibles'}
    
    layers = TileLayerWMS.objects.all()
    context.update({'layers' : layers})
  
    return render(request, 'configuration/layers/index.html', context)
 
   
@login_required
def addLayers(request):
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Agregar una Capa'}
    
    try:

        servicios = ServiciosIDEConfig.objects.values_list('pk', 'name')
        categorias_capas =  CategoriasCapas.objects.values_list('pk', 'name')

        context.update({'servicios' : servicios})
        context.update({'categorias_capas' : categorias_capas})

        if request.method == 'POST':
            proc_form = LayersForm(request.POST)
          
            if proc_form.is_valid():
                #proceso los cambios del atributo
                proc_form.instance.user = proc_form.cleaned_data['user'] = Users.objects.get(pk=request.user.pk)
              
                proc_form.save()
                messages.success(request, "La Capa se ha creado correctamente")
                return redirect('index-layers')
    
    
    except Users.DoesNotExist as e:
            messages.error(request, str('Error al traer el Usuario. Intente nuevamente!'))
            return HttpResponseRedirect(reverse("index-layers"))
    
    except Exception as e:
            messages.error(request, str(e))
            return HttpResponseRedirect(reverse("index-layers"))

    return render(request, 'configuration/layers/add.html', context)


@login_required
def editLayers(request, idlayer):
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Editar una Capa'}

        
    try:

        servicios = ServiciosIDEConfig.objects.values_list('pk', 'name')
        categorias_capas =  CategoriasCapas.objects.values_list('pk', 'name')

        layer = TileLayerWMS.objects.get(pk=idlayer)

        context.update({'layer' : layer})
        context.update({'servicios' : servicios})
        context.update({'categorias_capas' : categorias_capas})

        if request.method == 'POST':
            proc_form = LayersForm(request.POST, instance=layer)
          
            if proc_form.is_valid():
                #proceso los cambios del atributo
                proc_form.instance.user = proc_form.cleaned_data['user'] = Users.objects.get(pk=request.user.pk)
              
                proc_form.save()
                messages.success(request, "La Capa se ha editado correctamente")
                return redirect('index-layers')
    
    
    except Users.DoesNotExist as e:
            messages.error(request, str('Error al traer el Usuario. Intente nuevamente!'))
            return HttpResponseRedirect(reverse("index-layers"))
    
    except Exception as e:
            messages.error(request, str(e))
            return HttpResponseRedirect(reverse("index-layers"))

    return render(request, 'configuration/layers/edit.html', context)



@login_required
def deleteLayers(request, id):
    try:
        obj = TileLayerWMS.objects.get(pk=id)
        obj.delete()
       
        messages.success(request, "La Capa ha sido eliminada.")
        return redirect('index-layers')

    except ServiciosIDEConfig.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    
@login_required
def viewLayers(request, idlayer):
    
    context = {
               'category' : 'Configuración del Mapa',
                'action' : 'Ver Capas WMS cargadas en el Sistema'}
    
    try:
        layer = TileLayerWMS.objects.get(pk=idlayer)
        context.update({'layer' : layer})

        #lo exporto como json
        layer_object = TileLayerWMS.objects.filter(pk=idlayer)
        qs_json = serializers.serialize('json', layer_object)
        context.update({'layer_serializer' : qs_json})

      
    except TileLayerWMS.DoesNotExist as e:
            messages.error(request, str('Error al traer la Capa. Intente nuevamente!'))
            return HttpResponseRedirect(reverse("index-layers"))
    
    except Exception as e:
            messages.error(request, str(e))
            return HttpResponseRedirect(reverse("index-layers"))
    
    return render(request, 'configuration/layers/view.html', context)