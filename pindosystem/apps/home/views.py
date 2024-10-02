from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from rodales.models import Rodales
from rodales_gis.models import Rodalesgis
from django.core.serializers import serialize

from django.db.models import Sum, F, Count, Min
from login.decorators import admin_access_only

# Create your views here.
def index(request):
   
    print('request.user.role')
    print(request.user.get_username())
    return render(request, 'home/index.html')

@login_required
def indexAdmin(request):

    
    context = {
            'user' : request.user}
    
    rodales = Rodales.objects.filter(is_finish=False)
    
    cantidad = len(rodales)

    
    context.update({
           
            'cantidad' : cantidad
        });
    
    rodales_ = Rodales.objects.filter(is_finish=False)
    rodaldata = serialize('json', rodales_)


 
    
    context.update({
           
            'rodaldata' : rodaldata
        });
    

    
    
    
    resumen = Rodales.objects.select_related('usos_rodales', 'rodales_plantaciones', 'rodales_rodales_gis') \
        .filter(is_finish = False, usos_rodales__name = 'Forestal') \
        .aggregate(plantacion_sup = Sum('rodales_plantaciones__superficie'), 
                    rodal_sup = Sum('rodales_rodales_gis__superficie'))

    
    context.update({
           
            'resumen' : resumen
        });
    
    rodales_gis = serialize('geojson', Rodalesgis.objects.filter(rodales__is_finish = False), geometry_field='geom_4326')

    context.update({'rodales_gis' : rodales_gis})

    resumen_noforestal = Rodales.objects.select_related('usos_rodales', 'rodales_rodales_gis') \
        .exclude(usos_rodales__name = 'Forestal') \
        .aggregate(rodal_sup = Sum('rodales_rodales_gis__superficie'))

  
    context.update({
           
            'resumen_noforestal' : resumen_noforestal
        });
  


    #traigo la informacion que necesito
    
    return render(request, 'home/index_admin.html', context=context)
