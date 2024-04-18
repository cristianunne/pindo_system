
from rodales.models import Rodales
from rodales_gis.models import Rodalesgis, RodalesParcelas, RodalesState
from sagpyas.models import Sagpyas


from django.core.serializers import serialize

from rodales.serializers import getRodalesByIdSerializer
from rodales.utility import get_edad_rodal, get_fecha_plantacion

from django.contrib.gis.db.models import Extent

from django.contrib.gis.db.models.functions import Area, Transform
from django.db.models import Sum, F, Count

from rodales_gis.utility import get_rodal_gis, get_extent_rodalgis, get_area_rodal_gis, get_cantidad_parcelas_by_rodal, get_rodal_gis_state, \
    get_area_rodal_state_gis, get_rodales_gis, get_extent_rodalesgis_by_sagpyas

from plantaciones.serializers import getSuperficiePlantacionByRodal

from sagpyas.utility import get_number_rodales_by_sagpya, get_rodales_with_details_by_sagpya






def getRodalResumenGis(idrodal):
    
    #consulta a la tabla rodales disolve!!

    rodal = get_rodal_gis(idrodal)

    extent = get_extent_rodalgis(idrodal=idrodal)
    

    #traigo la informacion del rodal en su estado actual
    rodal_state = get_rodal_gis_state(idrodal)
    

    #traigo los datos del rodal
    rodal_info = getRodalesByIdSerializer(idrodal=idrodal)

    #traigo los datos resumen de superficie
    area = get_area_rodal_gis(idrodal)

    area_state = get_area_rodal_state_gis(idrodal)
    
    #LO DE ARRIBA ME DEVUELVE UNA INSTANCIA DE AREA Y PUEDO ACCEDER COMO UN OBJETO
    #calculo el area de las plantaciones
    area_plantacion = getSuperficiePlantacionByRodal(idrodal)
    
    #cantidad de parcelas
    cantidad_parcelas = get_cantidad_parcelas_by_rodal(idrodal)

    edad_rodal = get_edad_rodal(idrodal)

    fecha_plantacion = get_fecha_plantacion(idrodal)
    
    rodal_return = []
    rodal_return.append({'gis_rodal_inicial': rodal})
    rodal_return.append({'config': extent})
    rodal_return.append({'rodal': rodal_info})
    rodal_return.append({'extra': {
        'area' : area['area_'].sq_m,
        'sup_plantacion' : area_plantacion[0]['suma'],
        'cantidad_parcelas' : cantidad_parcelas,
        'area_current' : area_state['area_'].sq_m,
        'edad_rodal' : edad_rodal,
        'fecha_plantacion' : fecha_plantacion
    }})

    rodal_return.append({'gis_rodal_current': rodal_state})

    return rodal_return


def getRodalesGisByIdSagpyaSerializer(idsagpya):
    
    #traigos los ids del rodal sagpya
    ids_rodales = Sagpyas.objects.filter(pk = idsagpya).prefetch_related('sagpyas_rodales').distinct('rodales__pk').values('rodales__pk')

    ids_array = []

    for ids in ids_rodales:
        ids_array.append(ids['rodales__pk'])


    #traigo los rodales gis
    rodales_gis = get_rodales_gis(ids_array)


    return rodales_gis


def getRodalesGisBySagpyaWithDetailsSerializer(idsagpya):
    
    rodales = get_rodales_with_details_by_sagpya(idsagpya)

    #recorro la lista y agrego el extent
    lista_rodales = []

    for rod in rodales:
        rod['extent'] = get_extent_rodalgis(rod['rodales_id'])
        lista_rodales.append(rod)



    array_data = []

    array_data.append({
        'rodales' : lista_rodales,
        'rodales_gis' : getRodalesGisByIdSagpyaSerializer(idsagpya),
        'rodales_cantidad' : get_number_rodales_by_sagpya(idsagpya),
        'config' : {
            'extent' : get_extent_rodalesgis_by_sagpyas(idsagpya)
        }
    })

    return array_data