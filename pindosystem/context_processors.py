import datetime

from configuration.models import IntervencionesTypes, InventariosTypes
from rodales.models import Rodales

def global_data(request):

    #cantidad de categorias 
    intervenciones_count = len(IntervencionesTypes.objects.all())

    #cantidad de rodales
    rodales_count = len(Rodales.objects.all())

     #cantidad de rodales
    inventarios_count = len(InventariosTypes.objects.all())


  

    return {
        "rodales_count": rodales_count,
        "intervenciones_count": intervenciones_count,
        "inventarios_count": inventarios_count
    }
    