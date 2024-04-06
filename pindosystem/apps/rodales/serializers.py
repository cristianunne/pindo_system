
from rodales.models import Rodales
from rodales_gis.models import Rodalesgis
from django.core.serializers import serialize

from sagpyas.models import Sagpyas

from django.db.models import Sum, F, Count


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

    rodales = Rodales.objects.select_related('empresa', 'usos_rodales_category', 'empresas_rodales').values('pk', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'is_finish', 
                                                               'created', 'modified', 'usos_rodales__name', 'empresa__name', 'empresa__sap_id')
    

    return list(rodales)


def getRodalesByIdSerializer(idrodal):

    rodales = Rodales.objects.select_related('empresa', 'usos_rodales_category', 'empresas_rodales') \
    .filter(pk = idrodal) \
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

    #filtro los rodales por empresas
    rodales = Rodales.objects.select_related('usos_rodales', 'rodales_plantaciones', 'rodales_rodales_gis') \
    .filter(empresa = id_empresa, usos_rodales__name__contains = 'Forestal') \
    .values('pk', 'cod_sap', 'campo', 'is_certificado', 'sap_id', 
        'usos_rodales__name') \
    .annotate(suma_superficie = Sum('rodales_plantaciones__superficie'), rodal_superficie = Sum('rodales_rodales_gis__superficie'))
  

    return list(rodales)


def getRodalesByEmpresaSerializer(id_empresa):

    #filtro los rodales por empresas
    rodales = Rodales.objects.select_related('usos_rodales', 'rodales_plantaciones', 'rodales_rodales_gis') \
    .filter(empresa = id_empresa, usos_rodales__name__contains = 'Forestal') \
    .values('pk', 'cod_sap', 'campo', 'is_certificado', 'sap_id', 
        'usos_rodales__name') \
    .annotate(suma_superficie = Sum('rodales_plantaciones__superficie'), rodal_superficie = Sum('rodales_rodales_gis__superficie'))
  

    return list(rodales)