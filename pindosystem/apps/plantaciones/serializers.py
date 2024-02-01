from plantaciones.models import Plantaciones
from gis_pindo.models import Plantacionesgis
from django.core.serializers import serialize



def PlantacionesByRodalSerializer(rodal):
  
    plantacion = Plantaciones.objects.filter(rodales=rodal).first()
  


    data_plantacion = {
        'plantaciones_id' : plantacion.pk,
        'fecha' : plantacion.fecha,
        'superficie' : plantacion.superficie,
        'densidad' : plantacion.densidad,
        'dist_lineas' : plantacion.dist_lineas,
        'dist_plantas' : plantacion.dist_plantas,
        'arboles_plantados' : plantacion.arboles_plantados,
        'emsefors' : plantacion.emsefors.name,
        'procedencias' : plantacion.procedencias.name
    }



    plantaciones_gis = serialize('geojson', Plantacionesgis.objects
                                     .filter(plantacion=plantacion.rodales.pk), 
                                     geometry_field='geom_4326' )

    data = {
        'plantacion' : data_plantacion,
        'plantacion_gis' : plantaciones_gis
    }

    return data
