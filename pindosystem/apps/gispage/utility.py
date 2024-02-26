
from configuration.models import CapasBases

def get_baselayers():

    try: 
        capasbases = CapasBases.objects.all()
        #traigo el default




    except Exception as e:
        return False


    