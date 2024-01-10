
from datetime import datetime

def rodales_with_data_serializer(rodales):
    
    data = []

    for rod in rodales:

        #print(len(rod.rodales_planificacion_inter.all()))
     
        data.append({
            'rodales_id' : rod.pk,
            'cod_sap' : rod.cod_sap,
            'campo' : rod.campo,
            'is_certificado' : rod.is_certificado,
            'is_finish' : rod.is_finish,
            'eventos_planificacion' : get_eventos_planificacion(rod.rodales_planificacion_inter.all())
        })

    
    return data


def get_eventos_planificacion(rodales_planificacion):

    data = []

    for events in rodales_planificacion:
         data.append({
            'pk' : events.pk,
            'title' : events.title,
            'date_start' : str(events.date_start),
            'date_end' : str(events.date_end),
            'status' : events.status
        })
    return data