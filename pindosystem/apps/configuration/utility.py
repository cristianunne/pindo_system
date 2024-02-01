

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