from django.shortcuts import render, redirect
from intervenciones.models import Intervenciones, PodaIntervencion, SobrevivenciaIntervencion, RaleoIntervencion, TalarazaIntervencion
from rodales.models import Rodales
from emsefor.models import Emsefor
from login.models import Users
from gis_pindo.models import PodaIntervenciongis, SobrevivenciaIntervenciongis, RaleoIntervenciongis, TalarazaIntervenciongis
from rodales_gis.models import Rodalesgis
from configuration.serializers import CapasBasesSerializer
from configuration.models import IntervencionesTypes
from planificacion.models import PlanificacionIntervenciones

from django.contrib import messages
from django.http import JsonResponse, Http404, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt


from django.db import transaction

from intervenciones.models import INTERVENCIONES_DICT
import json

# Create your views here.
@login_required
def indexIntervencion(request, idrodal):
    intervenciones = Intervenciones.objects.select_related('rodales').filter(rodales__pk = idrodal)

    context = {'intervenciones' : intervenciones, 
               'category' : 'Intervenciones',
                'action' : 'Administración de Intervenciones'}
    
    context.update({'idrodal' : idrodal})

    try:
        rodal = Rodales.objects.get(pk=idrodal)
        context.update({'rodal' : rodal})


        return render(request, 'intervenciones/index.html', context)


    except Rodales.DoesNotExist:
        #messages.error(request, str('No existe el registro solicitado. Intente nuevamente!'))
        #return HttpResponseRedirect(reverse("rodales-config", args=[id]))
        return HttpResponseRedirect(reverse("rodales-config", args=[idrodal]))
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("rodales-config", args=[idrodal]))

   


@login_required
def addIntervencionPoda(request, idrodal):
    context = {'category' : 'Intervenciones',
                'action' : 'Administración de Intervenciones / Agregar Poda'}
    context.update({'idrodal' : idrodal})
    try:
        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})

        type_intervencion = INTERVENCIONES_DICT['Poda']

        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})

        inter_types = IntervencionesTypes.objects.values_list("intervencionestypes_id", "name")
        context.update({'inter_types' : inter_types})

        #cargo las planificaciones segun los planificados en el rodal
        planific_inter = PlanificacionIntervenciones.objects.filter(rodales = idrodal)
        print(planific_inter)
        
      

        if request.method == 'POST':
            fecha = request.POST.get('fecha')
            superficie = request.POST.get('superficie')
            arb_podados = request.POST.get('arb_podados')
            arb_no_podados = request.POST.get('arb_no_podados')
            alt_deseada = request.POST.get('alt_deseada')
            alt_poda = request.POST.get('alt_poda')
            dap = request.POST.get('dap')
            altura = request.POST.get('altura')
            dmsm = request.POST.get('dmsm')
            area_basal = request.POST.get('area_basal')
            porc_removido = request.POST.get('porc_removido')

            emsefor = request.POST.get('select-emsefor')
            name = request.POST.get('name')

            #traigo las entidades
            rodal_ent = Rodales.objects.get(pk = idrodal)
            emsefor_ent = Emsefor.objects.get(pk = emsefor)
            user_entity = Users.objects.get(pk=request.user.pk)

            #traigo la entidad poda
            poda_ent = IntervencionesTypes.objects.get(name = 'Poda')

            try:
                with transaction.atomic():
                    intervencion = Intervenciones.objects.create(rodales=rodal_ent, fecha=fecha, type=type_intervencion, superficie=superficie,
                                                                 users=user_entity, emsefors=emsefor_ent, name=name, intervenciones_types=poda_ent)
                    
                    poda_intervencion = PodaIntervencion.objects.create(intervenciones=intervencion, arb_podados=arb_podados, arb_no_podados=arb_no_podados, 
                                                                        alt_deseada=alt_deseada, alt_poda=alt_poda, dap=dap, altura=altura, dmsm=dmsm, 
                                                                        area_basal=area_basal, porc_removido=porc_removido)
                    
                    messages.success(request, "La Poda se ha creado con éxito!.")
                    return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))


            except Exception as e:
                messages.error(request, str(e))
                return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
     

       
        return render(request, 'intervenciones/poda/add.html', context)
    
    except Rodales.DoesNotExist:
        #messages.error(request, str('No existe el registro solicitado. Intente nuevamente!'))
        #return HttpResponseRedirect(reverse("rodales-config", args=[id]))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    except Emsefor.DoesNotExist:
        #messages.error(request, str('No existe el registro solicitado. Intente nuevamente!'))
        #return HttpResponseRedirect(reverse("rodales-config", args=[id]))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
   
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    
@login_required
def editIntervencionPoda(request, idpoda):

    context = {'category' : 'Intervenciones',
                'action' : 'Administración de Intervenciones / Agregar Poda'}
    context.update({'idpoda' : idpoda})

    try:
        poda = Intervenciones.objects.get(pk=idpoda)
        idrodal = poda.rodales.rodales_id

        context.update({'poda' : poda})
        context.update({'idrodal' : idrodal})

        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})

        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})

        inter_types = IntervencionesTypes.objects.values_list("intervencionestypes_id", "name")
        context.update({'inter_types' : inter_types})

        if request.method == 'POST':
            fecha = request.POST.get('fecha')
            superficie = request.POST.get('superficie')
            arb_podados = request.POST.get('arb_podados')
            arb_no_podados = request.POST.get('arb_no_podados')
            alt_deseada = request.POST.get('alt_deseada')
            alt_poda = request.POST.get('alt_poda')
            dap = request.POST.get('dap')
            altura = request.POST.get('altura')
            dmsm = request.POST.get('dmsm')
            area_basal = request.POST.get('area_basal')
            porc_removido = request.POST.get('porc_removido')

            emsefor = request.POST.get('select-emsefor')
            name = request.POST.get('name')
            type_intervencion = request.POST.get('select-type-inter')

            #traigo las entidades
            emsefor_ent = Emsefor.objects.get(pk = emsefor)
            user_entity = Users.objects.get(pk=request.user.pk)
            type_inter_entity = IntervencionesTypes.objects.get(pk=type_intervencion)
           


            try:
                with transaction.atomic():

                    poda.fecha = fecha
                    poda.superficie = superficie
                    poda.emsefors = emsefor_ent
                    poda.users = user_entity
                    poda.poda_intervencion.arb_podados = arb_podados
                    poda.poda_intervencion.arb_no_podados = arb_no_podados
                    poda.poda_intervencion.alt_deseada = alt_deseada
                    poda.poda_intervencion.alt_poda = alt_poda
                    poda.poda_intervencion.dap = dap
                    poda.poda_intervencion.altura = altura
                    poda.poda_intervencion.dmsm = dmsm
                    poda.poda_intervencion.area_basal = area_basal
                    poda.poda_intervencion.porc_removido = porc_removido
                    poda.name = name
                    poda.intervenciones_types = type_inter_entity
                   
                    poda.save()
                    poda.poda_intervencion.save()
                    messages.success(request, "La Poda se ha editado con éxito")
                    return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))   
                
            except Exception as e:
                messages.error(request, str(e))

                    #paso un mensaje de error user-add
                    #return redirect('user-add', context)
                #return render(request, 'users/edit.html', context)
                return HttpResponseRedirect(reverse("intervenciones-poda-edit", args=[idpoda]))    
          



        return render(request, 'intervenciones/poda/edit.html', context)

    except Intervenciones.DoesNotExist:
        messages.error(request, str('Error al traer la Intervención. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    except Rodales.DoesNotExist:
        messages.error(request, str('Error al traer el Rodal. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    
@login_required
def viewIntervencionPoda(request, idpoda):
    context = {'category' : 'Intervenciones',
                    'action' : 'Ver Poda'}

    try:
        poda = Intervenciones.objects.get(pk=idpoda)
        idrodal = poda.rodales.pk

        #poda2 = Intervenciones.objects.get(pk=idpoda)

        #print(poda2.poda_intervencion_gis.all())
        

        context.update({'poda' : poda})

        #traigo el rodal gis
        poda_gis = serialize('geojson', PodaIntervenciongis.objects.filter(intervencion_gis=poda), geometry_field='geom_4326')
        poda_count = len(PodaIntervenciongis.objects.filter(intervencion_gis=poda)) 
       

          #paso el msj 
        if poda_count == 0:
            messages.error(request, str('No se ha asignado el Polígono a la Intervención. Utilice un Software SIG para cargar la información.'))

        else:
            context.update({'poda_gis' : poda_gis})
        
        rodales_gis = serialize('geojson', Rodalesgis.objects.filter(rodales=poda.rodales), geometry_field='geom_4326')

        context.update({'rodales_gis' : rodales_gis})

         #traigo las capas bases
        capasbases = CapasBasesSerializer()
        context.update({'capasbases' :  json.dumps(capasbases)})
        
       

        return render(request, 'intervenciones/poda/view.html', context)

    
    except Intervenciones.DoesNotExist:
        messages.error(request, str('Error al traer los datos de la Intervención'))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    
    except Exception as e:
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    

@login_required
@csrf_exempt
def deleteIntervencionPoda(request, idpoda):
    try:
        obj = Intervenciones.objects.get(pk=idpoda)
        idrodal = obj.rodales.pk

        #traigo el id del rodal

        obj.delete()

        messages.success(request, "La Poda se ha eliminada con éxito")
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))       
       
       
    except Intervenciones.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

@login_required
def addIntervencionSobrevivencia(request, idrodal):
    
    context = {'category' : 'Intervenciones',
                'action' : 'Administración de Intervenciones / Nueva Sobrevivencia'}
    context.update({'idrodal' : idrodal})

    try:
        
        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})
        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})

        #cargo las planificaciones segun los planificados en el rodal
        planific_inter = PlanificacionIntervenciones.objects.filter(rodales = idrodal).values_list('planificacionintervencion_id', 'title')
        context.update({'planificacion_inter' : planific_inter})

        if request.method == 'POST':
            type_intervencion = INTERVENCIONES_DICT['Sobrevivencia']
            fecha = request.POST.get('fecha')
            superficie = request.POST.get('superficie')
            parcela_size = request.POST.get('parcela_size')
            parcela_relevadas = request.POST.get('parcela_relevadas')
            plantas_vivas = request.POST.get('plantas_vivas')
            plantas_muertas = request.POST.get('plantas_muertas')
            damage_herbicida = request.POST.get('damage_herbicida')
            damage_mecanico = request.POST.get('damage_mecanico')
            sobrevivencia = request.POST.get('sobrevivencia')
            responsable = request.POST.get('responsable')
            name = request.POST.get('name')

            emsefor = request.POST.get('select-emsefor')
            planif = request.POST.get('select-planificacion')
            #traigo las entidades
            rodal_ent = Rodales.objects.get(pk = idrodal)
            user_entity = Users.objects.get(pk=request.user.pk)
            emsefor_ent = Emsefor.objects.get(pk = emsefor)
            planif_ent = PlanificacionIntervenciones.objects.get(pk=planif)

            try:
                with transaction.atomic():
                    intervencion = Intervenciones.objects.create(rodales=rodal_ent, fecha=fecha, type=type_intervencion, superficie=superficie,
                                                                 users=user_entity, emsefors=emsefor_ent,name=name, planificacion_inter=planif_ent)
                    
                    sobrevivencia_res = SobrevivenciaIntervencion.objects.create(intervenciones=intervencion, parcela_size = parcela_size, parcela_relevadas = parcela_relevadas,
                                                                                 plantas_vivas = plantas_vivas, plantas_muertas = plantas_muertas, 
                                                                                 damage_herbicida = damage_herbicida, damage_mecanico = damage_mecanico, 
                                                                                 sobrevivencia = sobrevivencia, responsable=responsable)
                    
                    messages.success(request, "La Sobrevivencia se ha creado con éxito!.")
                    return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))

            except Exception as e:
                messages.error(request, str(e))
                return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
           

        return render(request, 'intervenciones/sobrevivencia/add.html', context)


    except Rodales.DoesNotExist:
        messages.error(request, str('No se puede obtener los datos del Rodal. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    
    except Emsefor.DoesNotExist:
        messages.error(request, str('No se puede obtener los datos de la Emsefor. Intente nuevamente!'))
       
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
   
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))


@login_required
def editIntervencionSobrevivencia(request, idsobrevivencia):
    
    context = {'category' : 'Intervenciones',
                    'action' : 'Editar Sobrevivencia'}
    try:

        sobre= Intervenciones.objects.get(pk=idsobrevivencia)
        idrodal = sobre.rodales.pk

        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})
        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})
        context.update({'sobrevivencia' : sobre})

        inter_types = IntervencionesTypes.objects.values_list("intervencionestypes_id", "name")
        context.update({'inter_types' : inter_types})



        if request.method == 'POST':
           
            fecha = request.POST.get('fecha')
            superficie = request.POST.get('superficie')
            parcela_size = request.POST.get('parcela_size')
            parcela_relevadas = request.POST.get('parcela_relevadas')
            plantas_vivas = request.POST.get('plantas_vivas')
            plantas_muertas = request.POST.get('plantas_muertas')
            damage_herbicida = request.POST.get('damage_herbicida')
            damage_mecanico = request.POST.get('damage_mecanico')
            sobrevivencia = request.POST.get('sobrevivencia')
            responsable = request.POST.get('responsable')
            name = request.POST.get('name')

            emsefor = request.POST.get('select-emsefor')

            #traigo las entidades
            emsefor_ent = Emsefor.objects.get(pk = emsefor)
            user_entity = Users.objects.get(pk=request.user.pk)

            sobre.fecha = fecha
            sobre.superficie = superficie
            sobre.emsefors = emsefor_ent
            sobre.users = user_entity
            sobre.name = name

            sobre.sobrevivencia_intervencion.parcela_size = parcela_size
            sobre.sobrevivencia_intervencion.parcela_relevadas = parcela_relevadas
            sobre.sobrevivencia_intervencion.plantas_vivas = plantas_vivas
            sobre.sobrevivencia_intervencion.plantas_muertas = plantas_muertas
            sobre.sobrevivencia_intervencion.damage_herbicida = damage_herbicida
            sobre.sobrevivencia_intervencion.damage_mecanico = damage_mecanico
            sobre.sobrevivencia_intervencion.responsable = responsable
            sobre.sobrevivencia_intervencion.sobrevivencia = sobrevivencia

            try:
                with transaction.atomic():

                    sobre.save()
                    sobre.sobrevivencia_intervencion.save()

                    messages.success(request, "La Sobrevivencia se ha editado con éxito!.")
                    return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))

            
            except Exception as e:
                messages.error(request, str(e))
                return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))


        

        return render(request, 'intervenciones/sobrevivencia/edit.html', context)

    except Intervenciones.DoesNotExist:
        messages.error(request, str('Error al traer los datos de la Intervención'))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    
    except Exception as e:
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))

@login_required
def viewIntervencionSobrevivencia(request, idsobrevivencia):
    context = {'category' : 'Intervenciones',
                    'action' : 'Ver Sobrevivencia'}

    try:
        sobrevivencia = Intervenciones.objects.get(pk=idsobrevivencia)
        idrodal = sobrevivencia.rodales.pk

       
        context.update({'sobrevivencia' : sobrevivencia})

        #traigo el rodal gis
        sobrevivencia_gis = serialize('geojson', SobrevivenciaIntervenciongis.objects.filter(intervencion_gis=sobrevivencia).all(), geometry_field='geom_4326')
        sobrevivencia_count = len(SobrevivenciaIntervenciongis.objects.filter(intervencion_gis=sobrevivencia)) 

        print(sobrevivencia_gis)

          #paso el msj 
        if sobrevivencia_count == 0:
            messages.error(request, str('No se ha asignado el Polígono a la Intervención. Utilice un Software SIG para cargar la información.'))
           

        else:
            context.update({'sobrevivencia_gis' : sobrevivencia_gis})
        
        rodales_gis = serialize('geojson', Rodalesgis.objects.filter(rodales=sobrevivencia.rodales), geometry_field='geom_4326')

        context.update({'rodales_gis' : rodales_gis})
       

        return render(request, 'intervenciones/sobrevivencia/view.html', context)

    
    except Intervenciones.DoesNotExist:
        messages.error(request, str('Error al traer los datos de la Intervención'))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    
    except Exception as e:
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    

@login_required
def deleteIntervencionSobrevivencia(request, idsobrevivencia):
    try:
        obj = Intervenciones.objects.get(pk=idsobrevivencia)
        idrodal = obj.rodales.pk

        #traigo el id del rodal

        obj.delete()

        messages.success(request, "La Sobrevivencia se ha eliminadO con éxito")
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))       
       
       
    except Intervenciones.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

@login_required
def addIntervencionRaleo(request, idrodal):
    context = {'category' : 'Intervenciones',
                'action' : 'Administración de Intervenciones / Nuevo Raleo'}
    context.update({'idrodal' : idrodal})

    try:
        
        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})
        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})

        if request.method == 'POST':

            #traigo todos los elementos
            name = request.POST.get('name')
            type_intervencion = INTERVENCIONES_DICT['Raleo']
            fecha = request.POST.get('fecha')
            superficie = request.POST.get('superficie')

            criterio = request.POST.get('criterio')
            arboles_extraidos = request.POST.get('arboles_extraidos')
            arboles_podados = request.POST.get('arboles_podados')

            dap = request.POST.get('dap')
            altura = request.POST.get('altura')
            dmsm = request.POST.get('dmsm')
            intensidad = request.POST.get('intensidad')
            porc_removido = request.POST.get('porc_removido')
            levante = request.POST.get('levante')
            emsefor = request.POST.get('select-emsefor')

            #traigo las entidades
            rodal_ent = Rodales.objects.get(pk = idrodal)
            user_entity = Users.objects.get(pk=request.user.pk)
            emsefor_ent = Emsefor.objects.get(pk = emsefor)


            try:
                with transaction.atomic():
                    intervencion = Intervenciones.objects.create(rodales=rodal_ent, fecha=fecha, type=type_intervencion, superficie=superficie,
                                                                 users=user_entity, emsefors=emsefor_ent,name=name)
                    
                    raleo = RaleoIntervencion.objects.create(intervenciones=intervencion, criterio = criterio, arboles_extraidos = arboles_extraidos,
                                                                                 arboles_podados = arboles_podados, dap = dap, 
                                                                                 altura = altura, dmsm = dmsm, 
                                                                                 porc_removido=porc_removido, intensidad = intensidad, 
                                                                                 levante=levante)
                    
                    messages.success(request, "El Raleo se ha creado con éxito!.")
                    return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))

            except Exception as e:
                messages.error(request, str(e))
                return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))



        return render(request, 'intervenciones/raleo/add.html', context)


    except Rodales.DoesNotExist:
        messages.error(request, str('No se puede obtener los datos del Rodal. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    
    except Emsefor.DoesNotExist:
        messages.error(request, str('No se puede obtener los datos de la Emsefor. Intente nuevamente!'))
       
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
   
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    


@login_required
def editIntervencionRaleo(request, idraleo):
    
    context = {'category' : 'Intervenciones',
                    'action' : 'Editar Sobrevivencia'}
    try:

        raleo = Intervenciones.objects.get(pk=idraleo)
        idrodal = raleo.rodales.pk

        context.update({'idrodal' : idrodal})

        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})

        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})
        context.update({'raleo' : raleo})

        if request.method == 'POST':


            #traigo todos los elementos
            name = request.POST.get('name')
            fecha = request.POST.get('fecha')
            superficie = request.POST.get('superficie')

            criterio = request.POST.get('criterio')
            arboles_extraidos = request.POST.get('arboles_extraidos')
            arboles_podados = request.POST.get('arboles_podados')

            dap = request.POST.get('dap')
            altura = request.POST.get('altura')
            dmsm = request.POST.get('dmsm')
            intensidad = request.POST.get('intensidad')
            porc_removido = request.POST.get('porc_removido')
            levante = request.POST.get('levante')
            emsefor = request.POST.get('select-emsefor')

            #traigo las entidades
        
            user_entity = Users.objects.get(pk=request.user.pk)
            emsefor_ent = Emsefor.objects.get(pk = emsefor)


            raleo.fecha = fecha
            raleo.superficie = superficie
            raleo.emsefors = emsefor_ent
            raleo.users = user_entity
            raleo.name = name

            raleo.raleo_intervencion.criterio = criterio
            raleo.raleo_intervencion.arboles_extraidos = arboles_extraidos
            raleo.raleo_intervencion.arboles_podados = arboles_podados
            raleo.raleo_intervencion.dap = dap
            raleo.raleo_intervencion.altura = altura
            raleo.raleo_intervencion.dmsm = dmsm
            raleo.raleo_intervencion.porc_removido = porc_removido
            raleo.raleo_intervencion.intensidad = intensidad
            raleo.raleo_intervencion.levante = levante

            try:
                with transaction.atomic():

                    raleo.save()
                    raleo.raleo_intervencion.save()

                    messages.success(request, "El Raleo se ha editado con éxito!.")
                    return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))

                
            except Exception as e:
                messages.error(request, str(e))
                return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))


        return render(request, 'intervenciones/raleo/edit.html', context)

    except Intervenciones.DoesNotExist:
        messages.error(request, str('Error al traer los datos de la Intervención'))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    
    except Exception as e:
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    

def viewIntervencionRaleo(request, idraleo):
    
    context = {'category' : 'Intervenciones',
                    'action' : 'Ver Raleo'}

    try:
        raleo = Intervenciones.objects.get(pk=idraleo)
        idrodal = raleo.rodales.pk


        context.update({'raleo' : raleo})

        #traigo el rodal gis
        raleo_gis = serialize('geojson', RaleoIntervenciongis.objects.filter(intervencion_gis=raleo), geometry_field='geom_4326')
        raleo_count = len(RaleoIntervenciongis.objects.filter(intervencion_gis=raleo)) 
        

          #paso el msj 
        if raleo_count == 0:
            messages.error(request, str('No se ha asignado el Polígono a la Intervención. Utilice un Software SIG para cargar la información.'))
           

        else:
            context.update({'raleo_gis' : raleo_gis})
        
        rodales_gis = serialize('geojson', Rodalesgis.objects.filter(rodales=raleo.rodales), geometry_field='geom_4326')

        context.update({'rodales_gis' : rodales_gis})
        print(raleo_gis)
       

        return render(request, 'intervenciones/raleo/view.html', context)
    
    except Intervenciones.DoesNotExist:
        messages.error(request, str('Error al traer los datos de la Intervención'))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    
    except Exception as e:
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    


@login_required
def deleteIntervencionRaleo(request, idraleo):
    try:
        obj = Intervenciones.objects.get(pk=idraleo)
        idrodal = obj.rodales.pk

        #traigo el id del rodal

        obj.delete()

        messages.success(request, "El Raleo se ha eliminado con éxito")
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))       
       
       
    except Intervenciones.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

@login_required
def addIntervencionTalaraza(request, idrodal):
    context = {'category' : 'Intervenciones',
                'action' : 'Administración de Intervenciones / Nueva Talaraza'}
    context.update({'idrodal' : idrodal})

    try:
        
        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})
        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})

        if request.method == 'POST':

            #traigo todos los elementos
            name = request.POST.get('name')
            type_intervencion = INTERVENCIONES_DICT['Talaraza']
            fecha = request.POST.get('fecha')
            superficie = request.POST.get('superficie')

            criterio = request.POST.get('criterio')
            arboles_extraidos = request.POST.get('arboles_extraidos')
            arboles_podados = request.POST.get('arboles_podados')

            dap = request.POST.get('dap')
            altura = request.POST.get('altura')
            dmsm = request.POST.get('dmsm')
            intensidad = request.POST.get('intensidad')
            porc_removido = request.POST.get('porc_removido')
            levante = request.POST.get('levante')
            emsefor = request.POST.get('select-emsefor')

            #traigo las entidades
            rodal_ent = Rodales.objects.get(pk = idrodal)
            user_entity = Users.objects.get(pk=request.user.pk)
            emsefor_ent = Emsefor.objects.get(pk = emsefor)


            try:
                with transaction.atomic():
                    intervencion = Intervenciones.objects.create(rodales=rodal_ent, fecha=fecha, type=type_intervencion, superficie=superficie,
                                                                 users=user_entity, emsefors=emsefor_ent,name=name)
                    
                    talaraza = TalarazaIntervencion.objects.create(intervenciones=intervencion, criterio = criterio, arboles_extraidos = arboles_extraidos,
                                                                                 arboles_podados = arboles_podados, dap = dap, 
                                                                                 altura = altura, dmsm = dmsm, 
                                                                                 porc_removido=porc_removido, intensidad = intensidad, 
                                                                                 levante=levante)
                    
                    messages.success(request, "La Talaraza se ha creado con éxito!.")
                    return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))

            except Exception as e:
                messages.error(request, str(e))
                return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))



        return render(request, 'intervenciones/talaraza/add.html', context)


    except Rodales.DoesNotExist:
        messages.error(request, str('No se puede obtener los datos del Rodal. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    
    except Emsefor.DoesNotExist:
        messages.error(request, str('No se puede obtener los datos de la Emsefor. Intente nuevamente!'))
       
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
   
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    

@login_required
def editIntervencionTalaraza(request, idtalaraza):
    context = {'category' : 'Intervenciones',
                    'action' : 'Editar Talaraza'}
    try:

        talaraza = Intervenciones.objects.get(pk=idtalaraza)
        idrodal = talaraza.rodales.pk

        context.update({'idrodal' : idrodal})

        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})

        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})
        context.update({'talaraza' : talaraza})

        if request.method == 'POST':


            #traigo todos los elementos
            name = request.POST.get('name')
            fecha = request.POST.get('fecha')
            superficie = request.POST.get('superficie')

            criterio = request.POST.get('criterio')
            arboles_extraidos = request.POST.get('arboles_extraidos')
            arboles_podados = request.POST.get('arboles_podados')

            dap = request.POST.get('dap')
            altura = request.POST.get('altura')
            dmsm = request.POST.get('dmsm')
            intensidad = request.POST.get('intensidad')
            porc_removido = request.POST.get('porc_removido')
            levante = request.POST.get('levante')
            emsefor = request.POST.get('select-emsefor')

            #traigo las entidades
        
            user_entity = Users.objects.get(pk=request.user.pk)
            emsefor_ent = Emsefor.objects.get(pk = emsefor)


            talaraza.fecha = fecha
            talaraza.superficie = superficie
            talaraza.emsefors = emsefor_ent
            talaraza.users = user_entity
            talaraza.name = name

            talaraza.talaraza_intervencion.criterio = criterio
            talaraza.talaraza_intervencion.arboles_extraidos = arboles_extraidos
            talaraza.talaraza_intervencion.arboles_podados = arboles_podados
            talaraza.talaraza_intervencion.dap = dap
            talaraza.talaraza_intervencion.altura = altura
            talaraza.talaraza_intervencion.dmsm = dmsm
            talaraza.talaraza_intervencion.porc_removido = porc_removido
            talaraza.talaraza_intervencion.intensidad = intensidad
            talaraza.talaraza_intervencion.levante = levante

            try:
                with transaction.atomic():

                    talaraza.save()
                    talaraza.talaraza_intervencion.save()

                    messages.success(request, "La Talaraza se ha editado con éxito!.")
                    return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))

                
            except Exception as e:
                messages.error(request, str(e))
                return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))


        return render(request, 'intervenciones/talaraza/edit.html', context)

    except Intervenciones.DoesNotExist:
        messages.error(request, str('Error al traer los datos de la Intervención'))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    
    except Exception as e:
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))

@login_required 
def viewIntervencionTalaraza(request, idtalaraza):
    
    context = {'category' : 'Intervenciones',
                    'action' : 'Ver Talaraza'}

    try:
        talaraza = Intervenciones.objects.get(pk=idtalaraza)
        idrodal = talaraza.rodales.pk


        context.update({'talaraza' : talaraza})

        #traigo el rodal gis
        talaraza_gis = serialize('geojson', TalarazaIntervenciongis.objects.filter(intervencion_gis=talaraza), geometry_field='geom_4326')
        talaraza_count = len(TalarazaIntervenciongis.objects.filter(intervencion_gis=talaraza)) 
        

          #paso el msj 
        if talaraza_count == 0:
            messages.error(request, str('No se ha asignado el Polígono a la Intervención. Utilice un Software SIG para cargar la información.'))
           

        else:
            context.update({'talaraza_gis' : talaraza_gis})
        
        rodales_gis = serialize('geojson', Rodalesgis.objects.filter(rodales=talaraza.rodales), geometry_field='geom_4326')

        context.update({'rodales_gis' : rodales_gis})
       
       

        return render(request, 'intervenciones/talaraza/view.html', context)
    
    except Intervenciones.DoesNotExist:
        messages.error(request, str('Error al traer los datos de la Intervención'))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    
    except Exception as e:
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    
@login_required
def deleteIntervencionTalaraza(request, idtalaraza):
    try:
        obj = Intervenciones.objects.get(pk=idtalaraza)
        idrodal = obj.rodales.pk

        #traigo el id del rodal

        obj.delete()

        messages.success(request, "El Raleo se ha eliminado con éxito")
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))       
       
       
    except Intervenciones.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    


