
from sagpyas.models import Sagpyas, SagpyasFiles
from django.core.serializers import serialize

from sagpyas.utility import get_number_rodales_all_sagpya, get_superficie_all_sagpyas, get_number_sagpyas


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

    print(array_data)

    return array_data


def getSagpyasSerializer():

    sagpyas = Sagpyas.objects.values()

    return list(sagpyas)



def getFilesDetailsBySagpyaSerializer(idsagpya):
    
    sagpya_files = SagpyasFiles.objects.filter(sagpyas = idsagpya).values()

    return list(sagpya_files)