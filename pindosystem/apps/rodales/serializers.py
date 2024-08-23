
from rodales.models import Rodales
from rodales_gis.models import Rodalesgis
from plantaciones.models import Plantaciones
from rodales.utility import get_fecha_plantacion_all


from django.core.serializers import serialize

from sagpyas.models import Sagpyas, SagpyasRodales

from django.db.models import Sum, F, Count, Min
import datetime


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
                'gis' : serialize('geojson', Rodalesgis.objects.filter(rodales=rod), geometry_field='geom_4326'),
                'uso' : rod.usos_rodales.name
            })


    return data


def getRodalesSerializer():

    rodales = Rodales.objects.select_related('empresa', 'usos_rodales_category', 'empresas_rodales') \
        .values('pk', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'is_finish', 
                                                               'created', 'modified', 
                                                               'usos_rodales__name', 'empresa__name', 'empresa__sap_id')
    
    #la edad la calcularia usando la fecha de plantacion
    #la superficie usando el GIS del rodal

    plantaciones = get_fecha_plantacion_all()
    
  
    rodal_list = list(rodales)

    today = datetime.date.today()



    for rod in rodal_list:
        for pla in plantaciones:
          
            if rod['pk'] == pla['rodales_id']:
                rod['edad_rodal'] =  today.year - pla['year']


    print(rodal_list)
    return rodal_list


def getRodalesByIdSerializer(idrodal):

    rodales = Rodales.objects.select_related('empresa', 'usos_rodales_category', 'empresas_rodales') \
    .filter(pk = idrodal) \
    .values('pk', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'is_finish', 
                                                               'created', 'modified', 'usos_rodales__name', 'empresa__name', 
                                                               'empresa__sap_id')
    
    sagpya = SagpyasRodales.objects.filter(rodales_id = idrodal)
    
    rodal_list = list(rodales)

    if len(sagpya) > 0:

        rodal_list[0]['sagpya_id'] = sagpya[0].sagpyas_id
        rodal_list[0]['sagpya_name'] = sagpya[0].sagpyas.expediente

        """rodal_list.append({'sagpya_id' : sagpya[0].sagpyas_id})
        rodal_list.append({'sagpya_name' : sagpya[0].sagpyas.expediente})"""
    
    else:
        rodal_list[0]['sagpya_id'] = None
        rodal_list[0]['sagpya_name'] = None
    

    return rodal_list

def getRodalesByIdSapSerializer(cod_sap):

    rodales = Rodales.objects.select_related('empresa', 'usos_rodales_category', 'empresas_rodales') \
    .filter(sap_id__icontains = cod_sap) \
    .values('pk', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'is_finish', 
                                                               'created', 'modified', 'usos_rodales__name', 'empresa__name', 'empresa__sap_id')
    

    return list(rodales)


def getRodalesByUsoSerializer(uso):

    rodales = Rodales.objects.select_related('empresa', 'usos_rodales_category', 'empresas_rodales') \
    .filter(usos_rodales__name__contains = uso) \
    .values('pk', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'is_finish', 
                                                               'created', 'modified', 'usos_rodales__name', 'empresa__name', 'empresa__sap_id')
    

    return list(rodales)



def getRodalesSagpyasByEmpresaSerializer(idempresa):
        
        try:

            rodales = Sagpyas.objects.prefetch_related('rodales') \
                .filter(rodales__empresa__pk = idempresa, rodales__usos_rodales__name__contains = 'Forestal') \
                .annotate(cod_sap = F('rodales__cod_sap'), sap_id = F('rodales__sap_id'), 
                        campo = F('rodales__campo'), is_certificado = F('rodales__is_certificado'), 
                        usos_rodales__name = F('rodales__usos_rodales__name')) \
                .values('rodales__pk', 'expediente', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'usos_rodales__name') \
                .annotate(suma_superficie = Sum('rodales__rodales_plantaciones__superficie'), 
                        rodal_superficie = Sum('rodales__rodales_rodales_gis__superficie'))
            
        
            return list(rodales)
        
        except Exception as e:
             return False
        
    

def getRodalesSagpyasByEmpresaSerializer(id_empresa):

    #revisar que este filtrando porsagpya

    ids_sagpyas = Sagpyas.objects.filter(rodales__empresa = id_empresa)

    if len(ids_sagpyas) > 0:

        #filtro los rodales por empresas
        rodales = Rodales.objects.select_related('usos_rodales', 'rodales_plantaciones', 'rodales_rodales_gis') \
        .filter(empresa = id_empresa, usos_rodales__name__contains = 'Forestal', sagpyas__in = ids_sagpyas) \
        .values('pk', 'cod_sap', 'campo', 'is_certificado', 'sap_id', 
            'usos_rodales__name', 'sagpyas__pk', 'sagpyas__expediente', 'empresa__name') \
        .annotate(suma_superficie = Sum('rodales_plantaciones__superficie'), rodal_superficie = Sum('rodales_rodales_gis__superficie'))
    

        return list(rodales)
    
    else:
        return []


def getRodalesByEmpresaSerializer(id_empresa):

    #filtro los rodales por empresas
    rodales = Rodales.objects.select_related('usos_rodales', 'rodales_plantaciones', 'rodales_rodales_gis') \
    .filter(empresa = id_empresa, usos_rodales__name__contains = 'Forestal') \
    .values('pk', 'cod_sap', 'campo', 'is_certificado', 'sap_id', 'is_finish',
        'usos_rodales__name', 'empresa__name', 'sagpyas__expediente') \
    .annotate(suma_superficie = Sum('rodales_plantaciones__superficie'), \
              rodal_superficie = Sum('rodales_rodales_gis__superficie'), \
                year_inicio = Min('rodales_plantaciones__fecha__year'))
  

    return list(rodales)


def getRodalWithMaterialGeneticoById(idrodal):
    
    procedencia = Plantaciones.objects.select_related('rodales_plantaciones', 'plantacion_procedencias') \
    .filter(rodales__pk = idrodal).values('procedencias__name', 'procedencias__especie')

    return list(procedencia)


def getRodalesBySagpyasSerializer(idsagpya):

    rodales = Rodales.objects.prefetch_related('sagpyas').filter(sagpyas__sagpyas_id = idsagpya, usos_rodales__name = 'Forestal') \
     .values('pk', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'is_finish', 
                                                               'created', 'modified', 
                                                               'usos_rodales__name', 'empresa__name', 'empresa__sap_id')

    return list(rodales)