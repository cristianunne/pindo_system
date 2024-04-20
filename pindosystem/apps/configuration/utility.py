

from configuration.models import MaterialesSAP

def convert_text_to_initial_mayusc(word):

    i = 0
    new_string = ''
    for ch in word:
        if i == 0:
            new_string += ch.upper()
            i += 1
        else:
            new_string += ch.lower()
    
    return new_string


def get_idx_categorias_capas(capas):
    
    lista = dict()
    for item in capas:
        lista[item.categoria.pk] = item.categoria.pk

    return list(lista)


def filter_materiales(materiales_api):
    
    materiales = {}
    #traigo los datos que tengo en mi base
    materiales_pindo = MaterialesSAP.objects.all()

    for met_api in materiales_api:

        exists = False

        for mat_pindo in materiales_pindo:
            
            if met_api['matnr'] == mat_pindo.matnr:
                exists = True

        if (exists == False):

            materiales[met_api['matnr']] = met_api['maktx']

    return materiales

def get_maktx_from_datasap(data_sap, matnr):

    for d in data_sap:
        if d['matnr'] == matnr:
            return d['maktx']
    
    return None