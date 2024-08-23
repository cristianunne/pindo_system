from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, FileResponse
from django.conf import settings
import os
# Create your views here.

from emsefor.models import Emsefor
from empresas.models import Empresas

from rodales.models import Rodales
from plantaciones.models import Plantaciones
from gis_pindo.models import Plantacionesgis
from sagpyas.models import SagpyasFiles


from plantaciones.serializers import PlantacionesByRodalSerializer, getSuperficiePlantacionByEmpresa, \
getSuperficiePlantacionYearsByEmpresa, getSuperficiePlantacionByEmpresaUsos, getSuperficiePlantacionOnlyValueByEmpresa


from rodales.serializers import getRodalesByUsoSerializer, getRodalesSagpyasByEmpresaSerializer, getRodalesByEmpresaSerializer, \
    getRodalesByIdSerializer, getRodalWithMaterialGeneticoById, getRodalesBySagpyasSerializer, getRodalesByIdSapSerializer

from sagpyas.serializers import getSagpyasWithDetailsSerializer, getFilesDetailsBySagpyaSerializer, getSagpyasByIdSerializer, getSagpyasByEmpresaSerializer

from planificacion.serializers import getPlanificacionByRodal, getReferenciasPlanificacionSerializer, getPlanificacionRodales, \
getPlanificacionDetailsWithYearsAndTipoSerializer

from rodales_gis.serializers import getRodalResumenGis, getRodalesGisBySagpyaWithDetailsSerializer, getRodalesGis, getRodalesGisAllSerializer
from rodales_gis.utility import get_area_rodal_state_gis_by_empresa

from sagpyas.utility import get_rodales_with_details_by_sagpya


from intervenciones.serializers import IntervencionesByRodalSerializer, getSobrevivenciaByRodalSerializer, \
      getSobrevivenciaWithGisDetailsByRodalSerializer, getPodaByRodalSerializer, getPodaWithGisDetailsByRodalSerializer, \
      getRaleoByRodalSerializer, getRaleoWithGisDetailsByRodalSerializer, getTalarazByRodalSerializer, \
      getTalarazaWithGisDetailsByRodalSerializer

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



@csrf_exempt
def getEmpresaById(request, empresa_id):

    if request.method == 'GET':
         
        empresa = list(Empresas.objects.filter(sap_id__contains =  empresa_id).values())
        
        return JsonResponse(empresa, safe=False)

    return JsonResponse(False, safe=False)


@csrf_exempt
def getResumenEmpresasById(request, empresa_id):
     
    if request.method == 'GET':
        cantidad = len(Rodales.objects.filter(empresa = empresa_id))

        super_rod_state = get_area_rodal_state_gis_by_empresa(empresa_id)



        sup_plan = getSuperficiePlantacionByEmpresaUsos(empresa_id)

        #traigo la superficie incial sumando la plantacion 

        sup_all = getSuperficiePlantacionOnlyValueByEmpresa(empresa_id)
  

        result = []
        result.append({
            'cantidad' : cantidad,
            'superficie' : super_rod_state['area_'],
            'superficie_plantacion' : sup_plan['suma_superficie'],
            'superficie_total' : sup_all
        })


        return JsonResponse(result, safe=False)
    
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
def getRodalesById(request, idrodal):
     
    if request.method == 'GET':

        rodal =  getRodalesByIdSerializer(idrodal)
        return JsonResponse(rodal, safe=False)
    
    return JsonResponse(False, safe=False)

@csrf_exempt
def getRodalesByIdSap(request, idrodal):
     
    if request.method == 'GET':

        print(idrodal)
        rodal =  getRodalesByIdSapSerializer(idrodal)
        return JsonResponse(rodal, safe=False)
    
    return JsonResponse(False, safe=False)
    

@csrf_exempt
def getRodalgisById(request, idrodal):
     
    if request.method == 'GET':

        rodal =  getRodalResumenGis(idrodal)
        return JsonResponse(rodal, safe=False)
    
    return JsonResponse(False, safe=False)


@csrf_exempt
def getRodalesgis(request):
     
    if request.method == 'GET':

        rodal =  getRodalesGisAllSerializer()
        return JsonResponse(rodal, safe=False)
    
    return JsonResponse(False, safe=False)


@csrf_exempt
def getMaterialGeneticoByRodalById(request, idrodal):

    #El camino para extraer el material es ir a travez de plantaciones, puede devolver muchos objetos
    
    if request.method == 'GET':
        materail_gen = getRodalWithMaterialGeneticoById(5)
        return JsonResponse(materail_gen, safe=False)

    return JsonResponse(False, safe=False)



@csrf_exempt
def getPlanificacionIntervencionesByRodal(request, idrodal):

    if request.method == 'GET':

        plan_ = getPlanificacionByRodal(idrodal=idrodal)
        return JsonResponse(plan_, safe=False)

    return JsonResponse(False, safe=False)


@csrf_exempt
def getPlanificacionIntervenciones(request):
     
    if request.method == 'GET':
        
        plan_ = getPlanificacionRodales()
        return JsonResponse(plan_, safe=False)
    
    return JsonResponse(False, safe=False)


@csrf_exempt
def getPlanificacionDetailsByYearsAndTipo(request):
    #traigo la superficie de planificacion organizada por a;o y tipo de intervencion
    if request.method == 'GET':
        result = getPlanificacionDetailsWithYearsAndTipoSerializer('Forestal')
        return JsonResponse(result, safe=False)

    return JsonResponse(False, safe=False)

@csrf_exempt
def getReferenciasPlanificacion(request):

    if request.method == 'GET':

        plan_ = getReferenciasPlanificacionSerializer()
        return JsonResponse(plan_, safe=False)

    return JsonResponse(False, safe=False)

@csrf_exempt
def getSagpyasWithDetails(request):
     
    if request.method == 'GET':

        data_sagpya = getSagpyasWithDetailsSerializer()


        return JsonResponse(data_sagpya, safe=False)

    return JsonResponse(False, safe=False)

@csrf_exempt
def getSagpyasById(request, idsagpya):
     
    if request.method == 'GET':

        data_sagpya = getSagpyasByIdSerializer(idsagpya)


        return JsonResponse(data_sagpya, safe=False)

    return JsonResponse(False, safe=False)

@csrf_exempt
def getRodalesGisBySagpyas(request, idsagpya):
    
   
    if request.method == 'GET':
        rodales_gis = getRodalesGisBySagpyaWithDetailsSerializer(idsagpya)

  
        return JsonResponse(rodales_gis, safe=False)
    
    return JsonResponse(False, safe=False)


@csrf_exempt
def getFilesDetailsBySagpya(request, idsagpya):
    
    if request.method == 'GET':
        sagpyas_files = getFilesDetailsBySagpyaSerializer(idsagpya)
        
        return JsonResponse(sagpyas_files, safe=False)
    
    return JsonResponse(False, safe=False)

@csrf_exempt
def downloadFileSagpya(request, idfile):
    
    try:
       
        sagpyas_file = SagpyasFiles.objects.get(pk = idfile)
        #print(sagpyas_file.file)

        file = os.path.join(settings.MEDIA_ROOT, str(sagpyas_file.file))
        fileOpen = open(file, 'rb')

        return FileResponse(fileOpen)
     
     
    except Exception as e:
        return JsonResponse(False, safe=False)
    

@csrf_exempt
def getRodalesBySagpya(request, idsagpya):

    try:
        if request.method == 'GET':
            
            rodales = getRodalesBySagpyasSerializer(idsagpya)
 
            return JsonResponse(rodales, safe=False)
    except Exception as e:
        return JsonResponse(False, safe=False)
    

#metodos asociados a las intervenciones
    
@csrf_exempt
def getSobrevivenciaIntervencionByRodal(request, idrodal):
    
    try:
        if request.method == 'GET':

            sobre = getSobrevivenciaByRodalSerializer(idrodal=idrodal)
            return JsonResponse(sobre, safe=False)

    except Exception as e:
        return JsonResponse(False, safe=False)


@csrf_exempt
def getSobrevivenciaIntervencionGisByRodal(request, idrodal):

    try:
        if request.method == 'GET':
            sobre_gis = getSobrevivenciaWithGisDetailsByRodalSerializer(idrodal)
            return JsonResponse(sobre_gis, safe=False)

    except Exception as e:
        return JsonResponse(False, safe=False)
    

@csrf_exempt
def getPodaIntervencionByRodal(request, idrodal):

    
    try:
        if request.method == 'GET':

            sobre = getPodaByRodalSerializer(idrodal=idrodal)
            return JsonResponse(sobre, safe=False)

    except Exception as e:
        return JsonResponse(False, safe=False)
    

@csrf_exempt
def getPodaIntervencionGisByRodal(request, idrodal):

    try:
        if request.method == 'GET':
            poda_gis = getPodaWithGisDetailsByRodalSerializer(idrodal)
            print(poda_gis)
            return JsonResponse(poda_gis, safe=False)

    except Exception as e:
        return JsonResponse(False, safe=False)
    


@csrf_exempt
def getRaleoIntervencionByRodal(request, idrodal):
    
    try:
        if request.method == 'GET':

            sobre = getRaleoByRodalSerializer(idrodal=idrodal)
            return JsonResponse(sobre, safe=False)

    except Exception as e:
        return JsonResponse(False, safe=False)
    

@csrf_exempt
def getRaleoIntervencionGisByRodal(request, idrodal):

    try:
        if request.method == 'GET':
            raleo_gis = getRaleoWithGisDetailsByRodalSerializer(idrodal)
            return JsonResponse(raleo_gis, safe=False)

    except Exception as e:
        return JsonResponse(False, safe=False)
    


@csrf_exempt
def getTalarazaIntervencionByRodal(request, idrodal):
    
    try:
        if request.method == 'GET':

            sobre = getTalarazByRodalSerializer(idrodal=idrodal)
            return JsonResponse(sobre, safe=False)

    except Exception as e:
        return JsonResponse(False, safe=False)
    

@csrf_exempt
def getTalarazaIntervencionGisByRodal(request, idrodal):

    try:
        if request.method == 'GET':
            talaraza_gis = getTalarazaWithGisDetailsByRodalSerializer(idrodal)
            return JsonResponse(talaraza_gis, safe=False)

    except Exception as e:
        return JsonResponse(False, safe=False)