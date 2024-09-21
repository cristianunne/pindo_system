from rodales.models import Rodales
from rodales_gis.models import Rodalesgis, RodalesParcelas, RodalesState

from django.contrib.gis.db.models import Extent

from django.contrib.gis.db.models.functions import Area, Transform
from django.db.models import Sum, F, Count
from django.core.serializers import serialize


from sagpyas.utility import get_rodales_by_sagpya


def get_rodales_gis_all():

    rodal = serialize('geojson', Rodalesgis.objects.filter(rodales__is_finish = False), geometry_field='geom_4326')



    return rodal


def get_rodales_gis(ids_array):

    rodal = serialize('geojson', Rodalesgis.objects.filter(rodales__is_finish = False, rodales__pk__in = ids_array), geometry_field='geom_4326')

    return rodal

def get_rodal_gis(idrodal):

    rodal = serialize('geojson', Rodalesgis.objects.filter(rodales_id=idrodal), geometry_field='geom_4326')

    return rodal



def get_rodal_gis_state(idrodal):

    rodal = serialize('geojson', RodalesState.objects.filter(rodales_id=idrodal), geometry_field='geom_4326')

    return rodal


def get_extent_rodalgis(idrodal):
    
    try:
        extent = Rodalesgis.objects.filter(rodales=idrodal).aggregate(Extent('geom_4326'))
        ext_list = list(extent['geom_4326__extent'])

        ext_new = [
            [ext_list[1], ext_list[0]], 
            [ext_list[3], ext_list[2]]]
        
        return ext_new
    
    except TypeError as err:
        return False


def get_extent_all_rodalgis():
    
    try:
        extent = Rodalesgis.objects.filter().aggregate(Extent('geom_4326'))
        ext_list = list(extent['geom_4326__extent'])

        ext_new = [
            [ext_list[1], ext_list[0]], 
            [ext_list[3], ext_list[2]]]
        
        return ext_new
    
    except TypeError as err:
        return False
    

def get_extent_rodalstate_gis(idrodal):
    
    try:
        extent = RodalesState.objects.filter(rodales=idrodal).aggregate(Extent('geom_4326'))
        ext_list = list(extent['geom_4326__extent'])

        ext_new = [
            [ext_list[1], ext_list[0]], 
            [ext_list[3], ext_list[2]]]
        
        return ext_new
    
    except TypeError as err:
        return False
   

def get_extent_rodalesgis_by_sagpyas(idsagpya):

    rodales = get_rodales_by_sagpya(idsagpya)


    extent = Rodalesgis.objects.filter(rodales_id__in = rodales).aggregate(Extent('geom_4326'))
    ext_list = list(extent['geom_4326__extent'])

    ext_new = [
        [ext_list[1], ext_list[0]], 
        [ext_list[3], ext_list[2]]]

    
    return ext_new

def get_area_rodal_gis(idrodal):
     #traigo los datos resumen de superficie
    area = list(Rodalesgis.objects.filter(rodales_id=idrodal).annotate(area_ = Area( Transform('geom_4326', 22177))).values('area_'))[0]
    
    return area

def get_area_rodal_state_gis(idrodal):
     #traigo los datos resumen de superficie
    
    try:

        area = list(RodalesState.objects.filter(rodales_id=idrodal).annotate(area_ = Area( Transform('geom_4326', 22177))).values('area_'))[0]
        return area
    except Exception as e:
        return False
   
    
def get_area_rodal_gis_by_empresa(idempresa):
     #traigo los datos resumen de superficie de todos los rodales de esta empresa
    try:
        area = list(Rodalesgis.objects.filter(rodales__empresa_id=idempresa)\
                    .annotate(area_ = Area( Transform('geom_4326', 22177))).values('area_'))
        
        
        sum_area = 0
        for a_ in area:
            sum_area = sum_area + a_['area_'].sq_m

        

        return sum_area
    
    except Exception as e:
        return False

def get_area_rodal_state_gis_by_empresa(idempresa):
     #traigo los datos resumen de superficie
    
    try:

        area = RodalesState.objects.filter(rodales__empresa_id=idempresa, rodales__is_finish = False).aggregate(area_ = Sum('superficie'))
        
        return area
    except Exception as e:
        return False


def get_cantidad_parcelas_by_rodal(idrodal):

    return len(RodalesParcelas.objects.filter(rodales = idrodal))


