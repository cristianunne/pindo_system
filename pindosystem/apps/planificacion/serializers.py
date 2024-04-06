from django.core.serializers import serialize

from planificacion.models import PlanificacionIntervenciones

from django.db.models import Sum, F, Count

from rodales.serializers import getRodalesByIdSerializer

from configuration.models import IntervencionesTypes


def getPlanificacionByRodal(idrodal):
    

    rodal = getRodalesByIdSerializer(idrodal=idrodal)

    plani = list(PlanificacionIntervenciones.objects.filter(rodales = idrodal) \
                 .annotate(year = F('date_start__year')) \
                           .values('title', 'year', 'status', 'intervenciones_types__name', 'intervenciones_types__color'))

    years = list(PlanificacionIntervenciones.objects.filter(rodales = idrodal).annotate(year = F('date_start__year')).values('year') \
                 .order_by('year'))
    

  

    data_export = []

    data_export.append(
        {
            'rodal' : rodal,
            'data': {'years' : years, 'planificacion' : plani}
        }
    )
    data_export.append(
        {
            'rodal' : rodal,
            'data': {'years' : years, 'planificacion' : plani}
        }
    )

    #data_export = [{'years' : years}, {'planificacion' : plani}]

    return data_export


def getReferenciasPlanificacionSerializer():
    
    referencias = IntervencionesTypes.objects.values('name', 'color');

    return list(referencias)
