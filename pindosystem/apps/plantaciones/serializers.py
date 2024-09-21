from pindosystem.apps.api.utility import getPkFromData
from plantaciones.models import Plantaciones
from gis_pindo.models import Plantacionesgis
from rodales.models import Rodales
from django.core.serializers import serialize

from django.db.models import Sum, F, Count

from sagpyas.models import Sagpyas





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




def getSuperficiePlantacionByEmpresa(id_empresa):
    
    #filtro los rodales por empresas
    rodales = Rodales.objects.filter(empresa = id_empresa)

    #traigo solo los ids
    rodales_ids = getPkFromData(rodales)


    plantaciones = Plantaciones.objects.select_related('rodales', 'rodales__usos_rodales') \
    .filter(rodales__in = rodales_ids) \
    .annotate(uso = F('rodales__usos_rodales__name')) \
    .values('uso') \
    .annotate(suma_superficie = Sum('superficie'))


    #puedo traer la superficie de aquellos que no tengan plantaciones xq no son de uso forestal o yerba mate
    otros_usos = Rodales.objects.filter(rodales_id__in = rodales_ids).exclude(usos_rodales__name__in = ['Forestal', 'Yerba mate']) \
    .values('usos_rodales__name').annotate(rodales_rodales_gis__superficie = Sum('rodales_rodales_gis__superficie'))

   

    plan_list = list(plantaciones)
    
    for us in otros_usos:
        plan_list.append({'uso' : us['usos_rodales__name'], 'suma_superficie' : us['rodales_rodales_gis__superficie']})


    return plan_list


def getSuperficiePlantacionOnlyValueByEmpresa(id_empresa):
    
    #filtro los rodales por empresas
    rodales = Rodales.objects.filter(empresa = id_empresa)

    #traigo solo los ids
    rodales_ids = getPkFromData(rodales)


    plantaciones = Plantaciones.objects.select_related('rodales', 'rodales__usos_rodales') \
    .filter(rodales__in = rodales_ids) \
    .annotate(uso = F('rodales__usos_rodales__name')) \
    .values('uso') \
    .annotate(suma_superficie = Sum('superficie'))


    #puedo traer la superficie de aquellos que no tengan plantaciones xq no son de uso forestal o yerba mate
    otros_usos = Rodales.objects.filter(rodales_id__in = rodales_ids).exclude(usos_rodales__name__in = ['Forestal', 'Yerba mate']) \
    .values('usos_rodales__name', 'rodales_rodales_gis__superficie')

   

    plan_list = list(plantaciones)
    
    for us in otros_usos:
        plan_list.append({'uso' : us['usos_rodales__name'], 'suma_superficie' : us['rodales_rodales_gis__superficie']})


    result = 0
   

    for sup in plan_list:

        sup_ = sup['suma_superficie'] if sup['suma_superficie'] != None else 0
        
        result = result + sup_
       
    
    return result

def getSuperficiePlantacionForestalByEmpresa(id_empresa):
    
    #filtro los rodales por empresas
    rodales = Rodales.objects.filter(empresa = id_empresa)

    #traigo solo los ids
    rodales_ids = getPkFromData(rodales)


    plantaciones = Plantaciones.objects.select_related('rodales', 'rodales__usos_rodales') \
    .filter(rodales__in = rodales_ids, rodales__usos_rodales__name__icontains = 'Forestal', rodales__is_finish = False) \
    .aggregate(suma_superficie = Sum('superficie'))
   

    return plantaciones


def getSuperficiePlantacionByEmpresaUsos(id_empresa):
    
    #filtro los rodales por empresas
    rodales = Rodales.objects.filter(empresa = id_empresa)

    #traigo solo los ids
    rodales_ids = getPkFromData(rodales)


    plantaciones = Plantaciones.objects.select_related('rodales', 'rodales__usos_rodales') \
    .filter(rodales__in = rodales_ids, rodales__is_finish = False) \
    .aggregate(suma_superficie = Sum('superficie'))

    #tego que agregar lo de BO y agregar al total
   

    return plantaciones

def getSuperficiePlantacionYearsByEmpresa(id_empresa):

     #filtro los rodales por empresas
    rodales = Rodales.objects.select_related('usos_rodales').filter(empresa = id_empresa)

    #traigo solo los ids
    rodales_ids = getPkFromData(rodales)

    plantacion = Plantaciones.objects.select_related('rodales') \
     .filter(rodales__in = rodales_ids) \
      .annotate(year = F('fecha__year')) \
     .values('year') \
     .annotate(suma_superficie = Sum('superficie')) \
    .order_by('year')


    return list(plantacion)







    

        

def getSuperficiePlantacionByRodal(idrodal):

    plantacion = Plantaciones.objects.select_related('rodales') \
     .filter(rodales = idrodal) \
     .values('pk') \
     .annotate(suma = Sum('superficie'))
    
    return list(plantacion)

    
   

def getPlantacionesByEmsefor(idemsefor):

    plantaciones = Plantaciones.objects.filter(emsefors__pk = idemsefor)

    return plantaciones

