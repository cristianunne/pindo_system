
from emsefor.models import Emsefor

def filterEmsefor(lista_emsefors):
    
    emsefor_sap = {}
    #traigo las emsefors
    empresas = Emsefor.objects.all()

    for ems in lista_emsefors:

        exists = False

        for ems_local in empresas:
            
            if ems['lifnr'] == ems_local.sap_id:
                exists = True

        if (exists == False):

            emsefor_sap[ems['lifnr']] = ems['name']

    return emsefor_sap


def filterEmseforWithId(lista_emsefors, emsefor_id):
    
    emsefor_sap = {}
    #traigo las emsefors
    empresas = Emsefor.objects.all()

    for ems in lista_emsefors:

        exists = False

        for ems_local in empresas:
            
            if ems['lifnr'] == ems_local.sap_id and ems['lifnr'] != emsefor_id:
                exists = True

        if (exists == False):

            emsefor_sap[ems['lifnr']] = ems['name']

    return emsefor_sap