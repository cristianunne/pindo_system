
from rodales.models import Rodales
from rodales_gis.models import Rodalesgis
from django.core.serializers import serialize

from rodales.serializers import getRodalesByIdSerializer

from django.contrib.gis.db.models import Extent




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

    
    rodal_return = []
    rodal_return.append({'gis': rodal})
    rodal_return.append({'config': ext_new})
    rodal_return.append({'rodal': rodal_info})

    print(rodal_return)


    return rodal_return


