
from rodales.models import Rodales
from rodales_gis.models import Rodalesgis
from django.core.serializers import serialize


def RodalesSerializer(rodales):
    
    data = []

   
    #sobrevivencia_count = len(SobrevivenciaIntervenciongis.objects.filter(intervencion_gis=sobrevivencia)) 

    for rod in rodales:
        if(len(Rodalesgis.objects.filter(rodales=rod)) > 0):
            data.append({
                'rodales_id' : rod.pk,
                'cod_sap' : rod.cod_sap,
                'campo' : rod.campo,
                'is_certificado' : rod.is_certificado,
                'is_finish' : rod.is_finish,
                'has_gis' : True if len(Rodalesgis.objects.filter(rodales=rod)) > 0 else False,
                'gis' : serialize('geojson', Rodalesgis.objects.filter(rodales=rod), geometry_field='geom_4326')
            })


    return data
