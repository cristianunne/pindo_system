
from intervenciones.models import Intervenciones, PodaIntervencion, RaleoIntervencion, TalarazaIntervencion, SobrevivenciaIntervencion
from gis_pindo.models import PodaIntervenciongis, SobrevivenciaIntervenciongis, RaleoIntervenciongis, TalarazaIntervenciongis

from django.core.serializers import serialize


def IntervencionesByRodalSerializer(idrodal):

    try:

        intervenciones = Intervenciones.objects.filter(rodales = idrodal)

        #las intervenciones pueden ser mas de una
        data_final = []
     

        for inter in intervenciones:

            #print(inter.intervenciones_types.name)
            intervencion_type = {}
           
            intervencion_list = list(Intervenciones.objects.filter(pk = inter.pk)
                                     .values('intervenciones_id', 'fecha', 'type', 
                                             'superficie', 'created', 'name', 'intervenciones_types__name', 
                                             'intervenciones_types__color', 'emsefors__name'))
            #print(intervencion_list)
            #reviso el tipo de intervencion para traer el metodo que corresponde
          

            if (__get_poda_intervencion(inter)):
                intervencion_type[inter.intervenciones_types.name] =  __get_poda_intervencion(inter)[0]
                #me traigo el gis

                poda_gis = serialize('geojson', PodaIntervenciongis.objects
                                     .filter(intervencion_gis=inter), 
                                     geometry_field='geom_4326' )
                
                intervencion_type[inter.intervenciones_types.name]['gis'] =  poda_gis

            
            elif (__get_sobrevivencia_intervencion(inter)):
                intervencion_type[inter.intervenciones_types.name] =  __get_sobrevivencia_intervencion(inter)[0]

                sobrevivencia_gis = serialize('geojson', SobrevivenciaIntervenciongis.objects
                                     .filter(intervencion_gis=inter), 
                                     geometry_field='geom_4326' )
           
                intervencion_type[inter.intervenciones_types.name]['gis'] =  sobrevivencia_gis

            elif (__get_raleo_intervencion(inter)):
                intervencion_type[inter.intervenciones_types.name] =  __get_raleo_intervencion(inter)[0]

                raleo_gis = serialize('geojson', RaleoIntervenciongis.objects
                                     .filter(intervencion_gis=inter), 
                                     geometry_field='geom_4326' )
                
                intervencion_type[inter.intervenciones_types.name]['gis'] =  raleo_gis
                
            
            else:
                intervencion_type[inter.intervenciones_types.name] =  __get_talaraza_intervencion(inter)[0]

                talaraza_gis = serialize('geojson', TalarazaIntervenciongis.objects
                                     .filter(intervencion_gis=inter), 
                                     geometry_field='geom_4326' )

                intervencion_type[inter.intervenciones_types.name]['gis'] =  talaraza_gis
           
           
            data = {
                'intervencion_meta' : intervencion_list[0],
                'intervenciones' : intervencion_type
            }

            data_final.append(data)
        
        print(data_final)
        return data_final 


       
    except Intervenciones.DoesNotExist:
        return False

       

def __get_poda_intervencion(intervencion):
     
    try: 
        poda = list(PodaIntervencion.objects.filter(intervenciones = intervencion).values())

        #devuelvo un object para el json

        return poda
    
    except PodaIntervencion.DoesNotExist:
        return False
    
    except Exception:
        return False
    
def __get_sobrevivencia_intervencion(intervencion):
    
    try:
        sobrevivencia = list(SobrevivenciaIntervencion.objects.filter(intervenciones = intervencion).values())
        return sobrevivencia

    except SobrevivenciaIntervencion.DoesNotExist:
        return False
    except Exception:
        return False
    
def __get_raleo_intervencion(intervencion):
    try:
        raleo = list(RaleoIntervencion.objects.filter(intervenciones = intervencion).values())

        return raleo

    except RaleoIntervencion.DoesNotExist:
        return False
    except Exception:
        return False
    
def __get_talaraza_intervencion(intervencion):
    try:
        talaraza = TalarazaIntervencion.objects.filter(intervencion).get()

        return talaraza

    except TalarazaIntervencion.DoesNotExist:
        return False
    
    except Exception:
        return False