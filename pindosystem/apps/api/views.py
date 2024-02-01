from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
# Create your views here.

from rodales.models import Rodales
from plantaciones.models import Plantaciones
from gis_pindo.models import Plantacionesgis
from plantaciones.serializers import PlantacionesByRodalSerializer
from intervenciones.serializers import IntervencionesByRodalSerializer

from django.contrib.auth.decorators import login_required
from django.core.serializers import serialize

from configuration.models import TileLayerWMS

import json


@login_required
@csrf_exempt
def getPlantacionesByRodal(request):

    if request.method == 'POST':

        idrodal = json.load(request)['rodal_id']
        #idrodal = request.POST.get('rodal_id')
       
       
        #plantacion = Plantaciones.objects.filter(rodales = 1).first()

        #rodal = Rodales.objects.get(pk=idrodal)

        plantacion = PlantacionesByRodalSerializer(idrodal)

        """plantaciones_gis = serialize('geojson', Plantacionesgis.objects
                                        .filter(plantacion=plantacion), 
                                        geometry_field='geom_4326' )"""
        
        #plantacion_count = len(Plantacionesgis.objects.filter(plantacion=plantacion)) 

        print(plantacion);


        return JsonResponse(plantacion)
    return JsonResponse(False)



@login_required
@csrf_exempt
def getIntervencionesByRodal(request):
    
    if request.method == 'POST':

        idrodal = json.load(request)['rodal_id']

        intervenciones = IntervencionesByRodalSerializer(idrodal)

        return JsonResponse(intervenciones, safe=False)
    
    return JsonResponse(False, safe=False)


@login_required
@csrf_exempt
def getLayerWMS(request):
    
    if request.method == 'POST':
         
        layer_id = json.load(request)['layer_id']
        capa = list(TileLayerWMS.objects.filter(pk = layer_id).values())[0]

        return JsonResponse(capa, safe=False)

    return JsonResponse(False, safe=False)