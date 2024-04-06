from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
# Create your views here.

from emsefor.models import Emsefor
from empresas.models import Empresas

from rodales.models import Rodales
from plantaciones.models import Plantaciones
from gis_pindo.models import Plantacionesgis
from plantaciones.serializers import PlantacionesByRodalSerializer, getSuperficiePlantacionByEmpresa, \
getSuperficiePlantacionYearsByEmpresa, getSagpyasByEmpresaSerializer


from rodales.serializers import getRodalesByUsoSerializer, getRodalesSagpyasByEmpresaSerializer, getRodalesByEmpresaSerializer

from rodales_gis.serializers import get_rodalesgis_by_id


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



'''METODOS QUE LLEVAN DATOS A LA APP PINDO FRONTEND'''

@csrf_exempt
def getEmsefors(request):

    if request.method == 'GET':

        emsefors = list(Emsefor.objects.values())[0]

        print(emsefors)

        return JsonResponse(emsefors, safe=False)
    
    return JsonResponse(False, safe=False)


@csrf_exempt
def getEmpresas(request):

    if request.method == 'GET':

        empresas = list(Empresas.objects.order_by('sap_id').values())

        print(empresas)

        return JsonResponse(empresas, safe=False)
    
    return JsonResponse(False, safe=False)



csrf_exempt
def getEmpresaById(request, empresa_id):

    if request.method == 'GET':
         
        empresa = list(Empresas.objects.filter(sap_id__contains =  empresa_id).values())
        return JsonResponse(empresa, safe=False)

    return JsonResponse(False, safe=False)

        


@csrf_exempt
def getSuperficieUsoRodalesByEmpresa(request, empresa_id):
    
    if request.method == 'GET':

        
        print(empresa_id)

        #tengo que traer las plantaciones de todos los rodales de esta empresa categorizado por uso

        result = getSuperficiePlantacionByEmpresa(empresa_id)

        return JsonResponse(result, safe=False)
    
    return JsonResponse(False, safe=False)


@csrf_exempt
def getSuperficieYearsByEmpresa(request, empresa_id):
    
    if request.method == 'GET':

        
        print(empresa_id)

        #tengo que traer las plantaciones de todos los rodales de esta empresa categorizado por uso

        result = getSuperficiePlantacionYearsByEmpresa(empresa_id)

        return JsonResponse(result, safe=False)

    return JsonResponse(False, safe=False)


@csrf_exempt
def getRodalesByEmpresa(request, empresa_id):
     
    if request.method == 'GET':
        result = getRodalesByEmpresaSerializer(empresa_id)
        return JsonResponse(result, safe=False)
    
    return JsonResponse(False, safe=False)


@csrf_exempt
def getSagpyasByEmpresas(request, empresa_id):
     
    if request.method == 'GET':

        result = getSagpyasByEmpresaSerializer(empresa_id)

        if result != False:
         
            return JsonResponse(result, safe=False)
        else:
            return JsonResponse(False, safe=False)
        
@csrf_exempt
def getRodalesSagpyasByEmpresas(request, empresa_id):
     
    if request.method == 'GET':

        result = getRodalesSagpyasByEmpresaSerializer(empresa_id)

        if result != False:
         
            return JsonResponse(result, safe=False)
        else:
            return JsonResponse(False, safe=False)
        



@csrf_exempt
def getRodalesByUso(request, uso):
    
    if request.method == 'GET':
        rodales = getRodalesByUsoSerializer(uso)
     
        return JsonResponse(rodales, safe=False)
    
    return JsonResponse(False, safe=False)


@csrf_exempt
def getRodalgisById(request, idrodal):
     
    if request.method == 'GET':

        rodal =  get_rodalesgis_by_id(5)
        return JsonResponse(rodal, safe=False)
