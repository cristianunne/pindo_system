
from intervenciones.models import Intervenciones, SobrevivenciaIntervencion, PodaIntervencion, RaleoIntervencion, TalarazaIntervencion

from gis_pindo.models import SobrevivenciaIntervenciongis, PodaIntervenciongis, RaleoIntervenciongis, TalarazaIntervenciongis
from django.core.serializers import serialize
from django.contrib.gis.db.models import Extent
from django.db.models import Sum, F, Count





def get_ids_typesintervenciones_from_instances_rodales(rodales_instances):
    
    ids_inter_types = []
    for rod in rodales_instances:
            
            for inter in rod.rodales_planificacion_inter.all():

                if inter.intervenciones_types.pk not in ids_inter_types:

                    ids_inter_types.append(inter.intervenciones_types.pk)


    return ids_inter_types


def getSobrevivenciaByRodal(idrodal):
    
    try:

        #traigo los names de Intervencion
        names = []

        for n in Intervenciones._meta.get_fields(include_parents=False):
            names.append(str(n.name))


        for n in SobrevivenciaIntervencion._meta.get_fields(include_parents=False):
            names.append(str('sobrevivencia_intervencion__' + n.name))



        intervenciones = Intervenciones.objects.select_related('sobrevivencia_intervencion') \
            .filter(rodales = idrodal, type = 'Sobrevivencia').values(*names)


        return intervenciones

    except Intervenciones.DoesNotExist:
        return False
    except Exception:
        return False
    


def getSobrevivenciaGis(idintervencion):

    inter = serialize('geojson', SobrevivenciaIntervenciongis.objects.filter(intervencion_gis__pk__in = idintervencion), geometry_field='geom_4326')


    return inter

def get_extent_sobrevivencia_gis(idintervencion):
    
    try:
        extent = SobrevivenciaIntervenciongis.objects.filter(intervencion_gis__pk__in=idintervencion).aggregate(Extent('geom_4326'))
        ext_list = list(extent['geom_4326__extent'])

        ext_new = [
            [ext_list[1], ext_list[0]], 
            [ext_list[3], ext_list[2]]]
        
        return ext_new
    
    except TypeError as err:
        return False
    

def getPodaByRodal(idrodal):
    
    try:

        #traigo los names de Intervencion
        names = []

        for n in Intervenciones._meta.get_fields(include_parents=False):
            names.append(str(n.name))

        for n in PodaIntervencion._meta.get_fields(include_parents=False):
            names.append(str('poda_intervencion__' + n.name))

        names.append('emsefors__name')


        intervenciones = Intervenciones.objects.select_related('poda_intervencion') \
            .filter(rodales = idrodal, type = 'Poda').values(*names)


        return intervenciones

    except Intervenciones.DoesNotExist:
        return False
    except Exception:
        return False


def getPodaGis(idintervencion):

    

    inter = serialize('geojson', PodaIntervenciongis.objects.filter(intervencion_gis__pk__in = idintervencion), geometry_field='geom_4326')

    

    return inter



def getRaleoByRodal(idrodal):
    
    try:

        #traigo los names de Intervencion
        names = []

        for n in Intervenciones._meta.get_fields(include_parents=False):
            names.append(str(n.name))

        for n in RaleoIntervencion._meta.get_fields(include_parents=False):
            names.append(str('raleo_intervencion__' + n.name))

        names.append('emsefors__name')

        intervenciones = Intervenciones.objects.select_related('raleo_intervencion') \
            .filter(rodales = idrodal, type = 'Raleo').values(*names)


        return intervenciones

    except Intervenciones.DoesNotExist:
        return False
    except Exception:
        return False
    

def getRaleoGis(idintervencion):

    inter = serialize('geojson', RaleoIntervenciongis.objects.filter(intervencion_gis__pk__in = idintervencion), geometry_field='geom_4326')

    return inter

def getTalarazaByRodal(idrodal):
    
    try:

        #traigo los names de Intervencion
        names = []

        for n in Intervenciones._meta.get_fields(include_parents=False):
            names.append(str(n.name))

        for n in TalarazaIntervencion._meta.get_fields(include_parents=False):
            names.append(str('talaraza_intervencion__' + n.name))

        names.append('emsefors__name')

        intervenciones = Intervenciones.objects.select_related('talaraza_intervencion') \
            .filter(rodales = idrodal, type = 'Talaraza').values(*names)
        
        print(intervenciones)


        return intervenciones

    except Intervenciones.DoesNotExist:
        return False
    except Exception:
        return False
    

def getTalarazaGis(idintervencion):

    inte_leng = len(TalarazaIntervenciongis.objects.filter(intervencion_gis__pk__in = idintervencion))
    
    inter = False
    if inte_leng > 0:

        inter = serialize('geojson', TalarazaIntervenciongis.objects.filter(intervencion_gis__pk__in = idintervencion), geometry_field='geom_4326')
        print(inter)
    
    return inter


def get_sobrevivencias_by_emsefor(idemsefor):

    sobrevivencias = Intervenciones.objects.filter(type = 'Sobrevivencia', emsefors = idemsefor)

    return sobrevivencias

def get_podas_by_emsefor(idemsefor):

    podas = Intervenciones.objects.filter(type = 'Poda', emsefors = idemsefor)

    return podas

def get_raleos_by_emsefor(idemsefor):

    raleos = Intervenciones.objects.filter(type = 'Raleo', emsefors = idemsefor)

    return raleos

def get_talarasa_by_emsefor(idemsefor):

    tala = Intervenciones.objects.filter(type = 'Talaraza', emsefors = idemsefor)

    return tala


def get_rodales_by_type_intervencion_by_emsefor(idemsefor, type):
    
    rodales = Intervenciones.objects.select_related('rodales_intervenciones').filter(emsefors = idemsefor, type = type) \
    .values('name', 'rodales__pk', 'rodales__is_sap', 'rodales__cod_sap', 'rodales__campo', 'rodales__usos_rodales__name', 
            'rodales__empresa__name', 'rodales__empresa_id', 'superficie', 'fecha__year', 'intervenciones_types__color') \
    .order_by('fecha__year')

    return rodales


