from django.core.serializers import serialize

from planificacion.models import PlanificacionIntervenciones

from django.db.models import Sum, F, Count, Min, Max

from rodales.serializers import getRodalesByIdSerializer

from configuration.models import IntervencionesTypes

from rodales.models import Rodales

from configuration.models import IntervencionesTypes


def getPlanificacionByRodal(idrodal):
    


    ids_rodales = [idrodal]

    #tengo que filtrar los rodales fORESTAL

    rodal = list(Rodales.objects.select_related('usos_rodales_category') \
                 .filter(rodales_id__in = ids_rodales, usos_rodales__name__contains = 'Forestal').values(
                     'rodales_id', 'campo', 'cod_sap', 'is_sap', 'name', 'empresa__sap_id', 'empresa__name'
                 ))
    
    #tengo que fitrar los rodales que son forestal

    plani = list(PlanificacionIntervenciones.objects.select_related('intervencion_planificacion').filter() \
                 .annotate(year = F('date_start__year')) \
                           .values('pk', 'title', 'year', 'status', 'intervenciones_types__name', 
                                   'intervenciones_types__color', 'rodales__pk', 'intervencion_planificacion__intervenciones_id'))

    min_year = list(PlanificacionIntervenciones.objects.filter().aggregate(min_year = Min('date_start__year')).values())[0]
    max_year = list(PlanificacionIntervenciones.objects.filter().aggregate(max_year = Max('date_end__year')).values())[0]
    


    data_export = []

    data_export.append(
        {
            'rodal' : rodal,
            'data': {'years' : {'min_year' : min_year, 'max_year' : max_year}, 'planificacion' : plani}
        }
    )

    #data_export = [{'years' : years}, {'planificacion' : plani}]

    return data_export


def getPlanificacionRodales():
    
    #filtrar los rodales sin planificacion

    plan_inter = PlanificacionIntervenciones.objects.exclude(rodales__pk = None)

    ids_rodales = []

    for plan in plan_inter:
        ids_rodales.append(plan.rodales.pk)

    #tengo que filtrar los rodales Forestal

    rodal = list(Rodales.objects.select_related('usos_rodales_category') \
                 .filter(rodales_id__in = ids_rodales, usos_rodales__name__contains = 'Forestal').order_by('empresa__name')\
                    .values('rodales_id', 'campo', 'cod_sap', 'is_sap', 'name', 'empresa__sap_id', 'empresa__name'))
    
    #tengo que fitrar los rodales que son forestal

    plani = list(PlanificacionIntervenciones.objects.select_related('intervencion_planificacion').filter() \
                 .annotate(year = F('date_start__year')) \
                           .values('pk', 'title', 'year', 'status', 'intervenciones_types__name', 
                                   'intervenciones_types__color', 'rodales__pk', 'intervencion_planificacion__intervenciones_id'))

    min_year = list(PlanificacionIntervenciones.objects.filter().aggregate(min_year = Min('date_start__year')).values())[0]
    max_year = list(PlanificacionIntervenciones.objects.filter().aggregate(max_year = Max('date_end__year')).values())[0]


    #traigo las categorias

    plani_categorias = list(PlanificacionIntervenciones.objects.select_related('intervencion_planificacion')\
                            .exclude(intervenciones_types__name__exact = None) \
                 .annotate(year = F('date_start__year')) \
                           .values('pk', 'intervenciones_types__name').distinct('intervenciones_types__name'))
    


    data_export = []

    data_export.append(
        {
            'rodal' : rodal,
            'data': {'years' : {'min_year' : min_year, 'max_year' : max_year}, 'planificacion' : plani, 'plan_cat' : plani_categorias}
        }
    )

    #data_export = [{'years' : years}, {'planificacion' : plani}]

    return data_export


def getPlanificacionDetailsWithYearsAndTipoSerializer(type_uso):
    
    #tengo que hacer un resumen de la superficie de rodale state
    #TENGO QUE VERIFICAR QUE NO ESTE REALIZADO

    plan_inter = list(PlanificacionIntervenciones.objects.select_related('intervencion_planificacion', 
                                                                    'rodales_planificacion_inter', 'usos_rodales_category', 
                                                                ) \
    .filter(rodales__usos_rodales__name = type_uso, status = False) \
    .values('intervenciones_types__name') \
    .annotate(year = F('date_start__year'), suma = Sum('rodales__rodales_rodalesstate_gis__superficie')) \
    .exclude(suma__isnull=True) \
    .values('intervenciones_types__pk', 'intervenciones_types__name', 'year' ,'suma'))


    #traigo los years
    min_year = list(PlanificacionIntervenciones.objects.filter().aggregate(min_year = Min('date_start__year')).values())[0]
    max_year = list(PlanificacionIntervenciones.objects.filter().aggregate(max_year = Max('date_end__year')).values())[0]

    #hago un disticnt de los tipos de intervenciones

    type_intervenciones = list(IntervencionesTypes.objects.values())

    data_export = []

    data_export.append(
        {
            'intevenciones' : type_intervenciones,
            'years' : {'min_year' : min_year, 'max_year' : max_year},
            'data': {'planificacion' : plan_inter}
        }
    )



    return data_export

def getReferenciasPlanificacionSerializer():
    
    referencias = IntervencionesTypes.objects.values('name', 'color');

    return list(referencias)
