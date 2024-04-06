
from rodales.models import Rodales
from rodales_gis.models import Rodalesgis, RodalesParcelas
from django.core.serializers import serialize

from rodales.serializers import getRodalesByIdSerializer

from django.contrib.gis.db.models import Extent

from django.contrib.gis.db.models.functions import Area, Transform
from django.db.models import Sum, F, Count




def get_rodalesgis_by_id(idrodal):
    
    #consulta a la tabla rodales disolve!!

    rodal = serialize('geojson', Rodalesgis.objects.filter(rodales_id=idrodal), geometry_field='geom_4326')

    extent = Rodalesgis.objects.filter(rodales_id=idrodal).aggregate(Extent('geom_4326'))
    ext_list = list(extent['geom_4326__extent'])

    ext_new = [
        [ext_list[1], ext_list[0]], 
        [ext_list[3], ext_list[2]]]
    

    #traigo los datos del rodal
    rodal_info = getRodalesByIdSerializer(idrodal=idrodal)

    #traigo los datos resumen de superficie
    area = list(Rodalesgis.objects.filter(rodales_id=idrodal).annotate(area_ = Area( Transform('geom_4326', 22177))).values('area_'))[0]
    
    #LO DE ARRIBA ME DEVUELVE UNA INSTANCIA DE AREA Y PUEDO ACCEDER COMO UN OBJETO
    #calculo el area de las plantaciones
    area_plantacion = list(Rodales.objects.select_related('rodales_plantaciones') \
        .filter(pk=idrodal) \
        .values('pk') \
        .annotate(suma = Sum('rodales_plantaciones__superficie')))
    
    #cantidad de parcelas
    cantidad_parcelas = len(RodalesParcelas.objects.filter(rodales = idrodal))
    
   

    rodal_return = []
    rodal_return.append({'gis': rodal})
    rodal_return.append({'config': ext_new})
    rodal_return.append({'rodal': rodal_info})
    rodal_return.append({'extra': {
        'area' : area['area_'].sq_m,
        'sup_plantacion' : area_plantacion[0]['suma'],
        'cantidad_parcelas' : cantidad_parcelas
    }})

    return rodal_return


