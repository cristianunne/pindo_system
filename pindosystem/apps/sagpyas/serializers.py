
from sagpyas.models import Sagpyas, SagpyasFiles
from django.core.serializers import serialize

from sagpyas.utility import get_number_rodales_all_sagpya, get_superficie_all_sagpyas, get_number_sagpyas

from django.db.models import Sum, F, Count


def getSagpyasWithDetailsSerializer():

    rodal_count = get_number_rodales_all_sagpya()

    superficie_aprobada_total = get_superficie_all_sagpyas()

    cantidad_sagpyas = get_number_sagpyas()

    array_data = []
    array_data.append({
        'cantidad_sagpyas' : cantidad_sagpyas,
        'cantidad_rodales' : rodal_count,
        'superficie_aprobada' : superficie_aprobada_total,
        'sagpyas' : getSagpyasSerializer()
    })

    
    return array_data


def getSagpyasByIdSerializer(idsagpya):

    sagpyas = Sagpyas.objects.filter(pk = idsagpya).values('pk', 'operaciones', 'fecha', 'expediente', 'sup_aprobada', 'expedientes__pk', 'expedientes__name')

    return list(sagpyas)

def getSagpyasSerializer():

    sagpyas = Sagpyas.objects.values('pk', 'operaciones', 'fecha', 'expediente', 'sup_aprobada', 'expedientes__pk', 'expedientes__name')

    return list(sagpyas)



def getFilesDetailsBySagpyaSerializer(idsagpya):
    
    sagpya_files = SagpyasFiles.objects.filter(sagpyas = idsagpya).values()

    return list(sagpya_files)


def getSagpyasByEmpresaSerializer(idempresa):
 
    try:

        sagpyas = Sagpyas.objects\
        .filter(rodales__empresa__pk = idempresa, rodales__usos_rodales__name__contains = 'Forestal') \
        .values('sagpyas_id', 'sup_aprobada', 'resolucion', 'operaciones', 'fecha', 'expedientes__name', 'expediente') \
        .annotate(cantidad_rodales = Count('rodales'))
        
        return list(sagpyas)
    
    except Exception as e:
        return False