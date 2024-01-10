from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse, Http404, HttpResponseRedirect
from django.urls import reverse

from planificacion.models import PlanificacionIntervenciones
from rodales.models import Rodales
from configuration.models import IntervencionesTypes
from login.models import Users

from django.core.serializers import serialize
import json 

# Create your views here.
@login_required
def indexPlanificacionIntervencion(request, idrodal):
    planificacion = PlanificacionIntervenciones.objects.filter(rodales_id = idrodal)

    rodal = Rodales.objects.get(pk=idrodal)
   
    context = {'planificacion' : planificacion, 
               'category' : 'Planificación',
                'action' : 'Administración de Planificación de Intervenciones'}
    
    context.update({'idrodal' : idrodal})

    #traigo las intervenciones
    eventos_planificacion = serialize('json', planificacion, fields = ['title', 'date_start', 'date_end','status'])
    context.update({'eventos_planificacion' : eventos_planificacion})

    context.update({'name_rodal': rodal.cod_sap})

    

    #traigo las categorias presentes
    ids_inter_types = []

    for p in planificacion.all():
        ids_inter_types.append(p.intervenciones_types.pk)

   

    categorias_intervencion = serialize('json', IntervencionesTypes.objects.filter(pk__in = ids_inter_types), fields = ['name', 'color'])

    context.update({'categorias_intervencion' : categorias_intervencion})
    print(categorias_intervencion)
   
    



    return render(request, 'planificacion/intervenciones/index.html', context)

@login_required
def addPlanificacionIntervencion(request, idrodal):
    context = {'category' : 'Planificación',
                'action' : 'Administración de Planificación / Nuevo Evento'}
    context.update({'idrodal' : idrodal})

    try:
        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})

        #inter_types = IntervencionesTypes.objects.values_list("intervencionestypes_id", "name")
        inter = PlanificacionIntervenciones.objects.filter(rodales_id = idrodal).values('intervenciones_types_id')
        inter_types = IntervencionesTypes.objects.exclude(intervencionestypes_id__in = inter).values_list("intervencionestypes_id", "name")
       
        context.update({'inter_types' : inter_types})


        if request.method == 'POST':
            title = request.POST.get('title')
            date_start = request.POST.get('date_start')
            date_end = request.POST.get('date_end')
            status = True if request.POST.get('status') == 'SI' else False 
            intervenciones_types_ = request.POST.get('select-type-inter')



            #traigo las entidades
            rodal_ent = Rodales.objects.get(pk = idrodal)
            user_entity = Users.objects.get(pk=request.user.pk)
            inter_type_ent = IntervencionesTypes.objects.get(pk = intervenciones_types_)

           

            try:
                planificacion = PlanificacionIntervenciones.objects.create(title=title, date_start=date_start, date_end=date_end, 
                                                                           status=status, user=user_entity,rodales=rodal_ent, 
                                                                           intervenciones_types=inter_type_ent)
                
                messages.success(request, "El Evento se ha creado con éxito!.")
                return HttpResponseRedirect(reverse("planificacion-inter-index", args=[idrodal]))

            except Exception as e:
                messages.error(request, str(e))
                return HttpResponseRedirect(reverse("planificacion-inter-index", args=[idrodal]))



        return render(request, 'planificacion/intervenciones/add.html', context)



    except Rodales.DoesNotExist:
        messages.error(request, str('No se puede obtener los datos del Rodal. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    
   
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))



