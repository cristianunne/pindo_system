from django.shortcuts import render, redirect
from plantaciones.models import Plantaciones
from rodales.models import Rodales
from procedencias.models import Procedencias
from emsefor.models import Emsefor
from login.models import Users
from rodales_gis.models import Rodalesgis
from gis_pindo.models import Plantacionesgis

from django.contrib import messages
from django.http import JsonResponse, Http404, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt
import json
from decimal import Decimal

from login.decorators import admin_access_only


# Create your views here.
@login_required
def indexPlantacionesByRodal(request, id):
    context = {'category' : 'Plantaciones',
                    'action' : 'Administración de las Plantaciones'}
    
    idrodal = id
    context.update({'idrodal' : idrodal})
    try:
        plantaciones = Plantaciones.objects.filter(rodales_id = idrodal).order_by('plantaciones_id')
       
        context.update({'plantaciones' : plantaciones})

        #traigo el rodal y lo pongo en el context
        rodal = Rodales.objects.get(pk=idrodal)
        context.update({'rodal' : rodal})

        return render(request, 'plantaciones/index.html', context)

    except Plantaciones.DoesNotExist:
        #messages.error(request, str('No existe el registro solicitado. Intente nuevamente!'))
        #return HttpResponseRedirect(reverse("rodales-config", args=[id]))
        return render(request, 'plantaciones/index.html', context)
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("rodales-config", args=[idrodal]))
    

@login_required
def addPlantacionByRodal(request, idrodal):
    context = {'category' : 'Plantaciones',
                    'action' : 'Crea una nueva Plantación'}
    context.update({'idrodal' : idrodal})

    try:
        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})

        procedencias = Procedencias.objects.values_list("procedencias_id", "name")
        context.update({'procedencias' : procedencias})

        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})


        if request.method == 'POST':
            rodal = request.POST.get('select-rodal')
           
            fecha = request.POST.get('fecha')
            densidad = Decimal(request.POST.get('densidad'))
            superficie = Decimal(request.POST.get('superficie'))
            dist_lineas = Decimal(request.POST.get('dist_lineas'))
            dist_plantas = Decimal(request.POST.get('dist_plantas'))
            arboles_plantados = request.POST.get('arboles_plantados')

          
            procedencia = request.POST.get('select-procedencia')
            emsefor = request.POST.get('select-emsefor')

            #traigo las entidades
            rodal_ent = Rodales.objects.get(pk = rodal)
           
            procedencia_ent = Procedencias.objects.get(pk = procedencia)
            emsefor_ent = Emsefor.objects.get(pk = emsefor)

            user_entity = Users.objects.get(pk=request.user.pk)

            plantacion_ent = Plantaciones.objects.create(rodales=rodal_ent, fecha=fecha, superficie=superficie, 
                                                    densidad=densidad, dist_lineas=dist_lineas, dist_plantas=dist_plantas, 
                                                    arboles_plantados = arboles_plantados, procedencias = procedencia_ent, 
                                                    emsefors = emsefor_ent, users=user_entity)
        

            messages.success(request, "La Plantación se ha creado con éxito!.")
            return HttpResponseRedirect(reverse("plantaciones-index", args=[idrodal]))


        else:
            return render(request, 'plantaciones/add.html', context)

    
    
    except Rodales.DoesNotExist:

        messages.error(request, str('No se puede traer la lista de Rodales. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("plantaciones-index", args=[idrodal]))
    
    except Procedencias.DoesNotExist:

        messages.error(request, str('No se puede traer la lista de Procedencias. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("plantaciones-index", args=[idrodal]))

    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("plantaciones-index", args=[idrodal]))
    

@login_required
def editPlantacion(request, id_plantacion):
    context = {'category' : 'Plantaciones',
                    'action' : 'Editar una Plantación'}
   

    try:
        context.update({'id_plantacion' : id_plantacion})

        plantacion = Plantaciones.objects.get(pk=id_plantacion)
        idrodal = plantacion.rodales.pk

        context.update({'plantacion' : plantacion})

        context.update({'idrodal' : idrodal})
        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})

        procedencias = Procedencias.objects.values_list("procedencias_id", "name")
        context.update({'procedencias' : procedencias})

        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})


        if request.method == 'POST':
            rodal = request.POST.get('select-rodal')
           
            fecha = request.POST.get('fecha')
            densidad = request.POST.get('densidad')
            superficie = request.POST.get('superficie')
            dist_lineas = request.POST.get('dist_lineas')
            dist_plantas = request.POST.get('dist_plantas')
            arboles_plantados = request.POST.get('arboles_plantados')

          
            procedencia = request.POST.get('select-procedencia')
            emsefor = request.POST.get('select-emsefor')

            #traigo las entidades
            rodal_ent = Rodales.objects.get(pk = rodal)
           
            procedencia_ent = Procedencias.objects.get(pk = procedencia)
            emsefor_ent = Emsefor.objects.get(pk = emsefor)

            user_entity = Users.objects.get(pk=request.user.pk)

            plantacion.fecha = fecha
            plantacion.densidad = densidad
            plantacion.superficie = superficie
            plantacion.dist_lineas = dist_lineas
            plantacion.dist_plantas = dist_plantas
            plantacion.arboles_plantados = arboles_plantados
   
            plantacion.procedencias = procedencia_ent
            plantacion.emsefors = emsefor_ent

            try:
                plantacion.save()
                messages.success(request, "La Plantación se ha editado con éxito")
                return HttpResponseRedirect(reverse("plantaciones-index", args=[idrodal]))   
                
            except Exception as e:
                messages.error(request, str(e))

                    #paso un mensaje de error user-add
                    #return redirect('user-add', context)
                #return render(request, 'users/edit.html', context)
                return HttpResponseRedirect(reverse("plantaciones-edit", args=[id_plantacion]))         


        else:
            return render(request, 'plantaciones/edit.html', context)

    
    
    except Rodales.DoesNotExist:

        messages.error(request, str('No se puede traer la lista de Rodales. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("plantaciones-index", args=[idrodal]))
    
    except Procedencias.DoesNotExist:

        messages.error(request, str('No se puede traer la lista de Procedencias. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("plantaciones-index", args=[idrodal]))
    
    except Plantaciones.DoesNotExist:

        messages.error(request, str('No se puede traer la Plantación. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("plantaciones-index", args=[idrodal]))

    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("plantaciones-index", args=[idrodal]))


@login_required
def viewPlantacion(request, id_plantacion):
    context = {'category' : 'Plantaciones',
                    'action' : 'Ver Plantación'}
    
    try:
        #get Plantation
        plantacion = Plantaciones.objects.get(pk=id_plantacion)
        context.update({'plantacion' : plantacion})

 
        """plantaciones_gis = serialize('geojson', Plantacionesgis.objects.filter(plantacion=plantacion), geometry_field='geom_4326')
        data = json.loads(plantaciones_gis)
        data['features'][0]['properties'].update({"color": "red"})
        print(data)"""
        """p = Plantacionesgis.objects.filter(plantacion=plantacion).get()
        pla = p.get_data_plantacion()
        print(pla)"""
        
        #p =  plantaciones_gis = serialize('geojson', [Plantacionesgis.objects.filter(plantacion=plantacion).get(), plantacion], geometry_field='geom_4326')
        #print(p)

        #p =  plantaciones_gis = serialize('geojson', [Plantacionesgis.objects.filter(plantacion=plantacion).values()], geometry_field='geom_4326')
        #print(p)
     
        #gis_ = Plantacionesgis.objects.only('plantacion__users_id').select_related('plantacion').filter(plantacion=plantacion)
        #print(gis_.query)
    
        #traigo el rodal gis
        plantaciones_gis = serialize('geojson', Plantacionesgis.objects
                                     .filter(plantacion=plantacion), 
                                     geometry_field='geom_4326' )
        plantacion_count = len(Plantacionesgis.objects.filter(plantacion=plantacion)) 

      
        #paso el msj 
        if plantacion_count == 0:
            messages.error(request, str('No se ha asignado el Polígono a la Plantación. Utilice un Software SIG para cargar la información.'))

        rodales_gis = serialize('geojson', Rodalesgis.objects.filter(rodales=plantacion.rodales), geometry_field='geom_4326')



        context.update({'rodales_gis' : rodales_gis})
        context.update({'plantaciones_gis' : plantaciones_gis})
    

        return render(request, 'plantaciones/view.html', context)

    
    except Rodales.DoesNotExist:
        messages.error(request, str('No se puede traer los datos del Rodal'))
        return HttpResponseRedirect(request.META['HTTP_REFERER'])
    
    except Plantaciones.DoesNotExist:
        messages.error(request, str('No se puede traer los datos de la Plantación'))
        return HttpResponseRedirect(request.META['HTTP_REFERER'])
    
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(request.META['HTTP_REFERER'])
        #return HttpResponseRedirect(reverse("plantaciones-index", args=[id_plantacion]))
    


@login_required
@csrf_exempt
@admin_access_only
def deletePlantacion(request, id_plantacion):

    try:
        obj = Plantaciones.objects.get(pk=id_plantacion)
        idrodal = obj.rodales.pk

        #traigo el id del rodal

        obj.delete()

        messages.success(request, "La Plantación se ha eliminada con éxito")
        return HttpResponseRedirect(reverse("plantaciones-index", args=[idrodal]))       
       
       
    except Plantaciones.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    
    
