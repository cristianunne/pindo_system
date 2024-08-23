
from intervenciones.models import Intervenciones, PodaIntervencion, RaleoIntervencion, TalarazaIntervencion, SobrevivenciaIntervencion
from gis_pindo.models import PodaIntervenciongis, SobrevivenciaIntervenciongis, RaleoIntervenciongis, TalarazaIntervenciongis

from intervenciones.utility import getSobrevivenciaByRodal, getSobrevivenciaGis, getPodaByRodal, getPodaGis, getRaleoByRodal, getRaleoGis, \
getTalarazaByRodal, getTalarazaGis

from django.core.serializers import serialize

from rodales_gis.utility import get_rodal_gis_state, get_extent_rodalstate_gis, get_rodales_gis, get_extent_rodalgis, get_rodal_gis


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
    


def getSobrevivenciaByRodalSerializer(idrodal):
    
    sobrevivencia = getSobrevivenciaByRodal(idrodal)

    return list(sobrevivencia)


def getSobrevivenciaWithGisDetailsByRodalSerializer(idrodal):
    
    try:

    
        #traigo los ids de las intervenciones del rodal
        ids_intervencion = Intervenciones.objects.filter(rodales__pk = idrodal)

        ids_inter = []

        for ids in ids_intervencion:
            ids_inter.append(ids.pk)

        sobrevivencia_gis = getSobrevivenciaGis(ids_inter)

        extent = get_extent_rodalgis(idrodal)

        #traigo los rodales

        #aca devuelvo toda la informacion necesaria
        result = []

        result.append({'sobrevivencia_gis': sobrevivencia_gis, 
                       'config': extent,
                       'rodal' : get_rodales_gis(idrodal)
                       })
        
        
        return result



    except Intervenciones.DoesNotExist:
        return False
    except Exception:
        return False
    

def getPodaByRodalSerializer(idrodal):
    
    poda = getPodaByRodal(idrodal)


    return list(poda)


def getPodaWithGisDetailsByRodalSerializer(idrodal):
    
    try:  

        #traigo los ids de las intervenciones del rodal
        ids_intervencion = Intervenciones.objects.filter(rodales__pk = idrodal)


        ids_inter = []

        for ids in ids_intervencion:
            ids_inter.append(ids.pk)

        

        poda_gis = getPodaGis(ids_inter)

        extent = get_extent_rodalgis(idrodal)

        #traigo los rodales

        #aca devuelvo toda la informacion necesaria
        result = []

        result.append({'poda_gis': poda_gis, 
                       'config': extent,
                       'rodal' : get_rodal_gis(idrodal)
                       })
        
        
        return result

    except Intervenciones.DoesNotExist:
        return False
    except Exception:
        return False
    

def getRaleoByRodalSerializer(idrodal):
    
    raleo = getRaleoByRodal(idrodal)

    return list(raleo)


def getRaleoWithGisDetailsByRodalSerializer(idrodal):
    
    try:  

        #traigo los ids de las intervenciones del rodal
        ids_intervencion = Intervenciones.objects.filter(rodales__pk = idrodal)

        ids_inter = []

        for ids in ids_intervencion:
            ids_inter.append(ids.pk)

        raleo_gis = getRaleoGis(ids_inter)

        extent = get_extent_rodalgis(idrodal)




        #traigo los rodales

        #aca devuelvo toda la informacion necesaria
        result = []

        result.append({'raleo_gis': raleo_gis, 
                       'config': extent,
                       'rodal' : get_rodales_gis(idrodal)
                       })
        
        
        return result

    except Intervenciones.DoesNotExist:
        return False
    except Exception:
        return False
    



def getTalarazByRodalSerializer(idrodal):
    
    tala = getTalarazaByRodal(idrodal)


    return list(tala)


def getTalarazaWithGisDetailsByRodalSerializer(idrodal):
    
    try:  

        #traigo los ids de las intervenciones del rodal
        ids_intervencion = Intervenciones.objects.filter(rodales__pk = idrodal)

        ids_inter = []

        for ids in ids_intervencion:
            ids_inter.append(ids.pk)

      
        talaraza_gis = getTalarazaGis(ids_inter)

        extent = get_extent_rodalgis(idrodal)

        #traigo los rodales

        #aca devuelvo toda la informacion necesaria
        result = []

        result.append({'talaraza_gis': talaraza_gis, 
                       'config': extent,
                       'rodal' : get_rodales_gis(idrodal)
                       })
        
        
        return result

    except Intervenciones.DoesNotExist:
        return False
    except Exception:
        return False