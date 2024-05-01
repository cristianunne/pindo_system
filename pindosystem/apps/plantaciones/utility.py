
from plantaciones.models import Plantaciones



def get_rodales_by_plantaciones_by_emsefor(idemsefor):
    
    rodales = Plantaciones.objects.select_related('rodales_plantaciones').filter(emsefors = idemsefor) \
    .values('rodales__pk', 'rodales__is_sap', 'rodales__cod_sap', 'rodales__campo', 'rodales__usos_rodales__name', 
            'rodales__empresa__pk', 'rodales__empresa__name', 'superficie', 'fecha__year') \
    .order_by('fecha__year')

    return rodales


