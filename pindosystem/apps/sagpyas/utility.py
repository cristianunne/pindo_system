
from sagpyas.models import Sagpyas
from django.db.models import Sum, F, Count, Min




def get_number_sagpyas():

    return len(Sagpyas.objects.all())

def get_number_rodales_by_sagpya(idsagpya):
    
    num_sagpyas = len(Sagpyas.objects.get(pk=idsagpya).rodales.all())

    return num_sagpyas

def get_rodales_by_sagpya(idsagpya):

    rodales =  Sagpyas.objects.get(pk=idsagpya).rodales.all().values('rodales_id')

    ids_rodales = []

    for rod in rodales:
        ids_rodales.append(rod['rodales_id'])

    return ids_rodales

def get_sagpyas_by_empresa(idempresa):

    sagpyas = Sagpyas.objects.filter(rodales__empresa__pk = idempresa)

    return sagpyas


def get_rodales_with_details_by_sagpya(idsagpya):

    #le cargo el extent tmb

    rodales =  Sagpyas.objects.get(pk=idsagpya).rodales.all().values('rodales_id', 'cod_sap')
    

    return rodales

def get_number_rodales_all_sagpya():
    
    num_sagpyas = len(Sagpyas.objects.prefetch_related('sagpyas_rodales').filter() \
        .values('rodales__pk') \
        .annotate(cantidad = Count('rodales__pk')))


    return num_sagpyas



def get_superficie_all_sagpyas():

    sup = list(Sagpyas.objects.aggregate(suma_superficie = Sum('sup_aprobada')).values())[0]

    return sup

