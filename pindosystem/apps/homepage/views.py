from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from configuration.models import MapConfigGis, CapasBases, CapasBasesDefault, TileLayerWMS, CategoriasCapas
from rodales.utility import get_rodales_with_gis
from planificacion.models import PlanificacionIntervenciones
from rodales.models import Rodales
from intervenciones.models import IntervencionesTypes
from rodales_gis.models import Rodalesgis

from intervenciones.utility import get_ids_typesintervenciones_from_instances_rodales

from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, Http404, HttpResponseRedirect
from django.contrib import messages
from django.db import IntegrityError
from django.urls import reverse
from django.core.serializers import serialize
import json
from django.forms.models import model_to_dict
from homepage.serializers import rodales_with_data_serializer
from rodales.serializers import RodalesSerializer
from configuration.serializers import CapasBasesWithDefaultSerializer
from intervenciones.serializers import IntervencionesByRodalSerializer
from configuration.utility import get_idx_categorias_capas

# Create your views here.

@login_required
def IndexView(request):

    context = {
            'category' : 'Homepage',
            'action' : 'Ver GIS App'}

    
    try:

        #traigo las configuraciones del mapa
        map_config = MapConfigGis.objects.all().first()
        dict_obj = model_to_dict( map_config )

        map_config_json = json.dumps(dict_obj)
       
        context.update({'map_config' : map_config_json})

        #traigo los eventos
        planificacion = PlanificacionIntervenciones.objects.all()
        
        rod_gis_ids = get_rodales_with_gis()
        rodales = Rodales.objects.filter(pk__in = rod_gis_ids)
        #mando los rodales para construir la tabla de atributos inicial
        context.update({'rodales' : rodales})
       
  
    
        eventos_planificacion = rodales_with_data_serializer(rodales)

        ids_inter_types = get_ids_typesintervenciones_from_instances_rodales(rodales)
        categorias_intervencion = serialize('json', IntervencionesTypes.objects.filter(pk__in = ids_inter_types), fields = ['name', 'color'])

        context.update({'categorias_intervencion' : categorias_intervencion})
        context.update({'eventos_planificacion' :  json.dumps(eventos_planificacion)})

        #rodale serializer
        rodales_serializer = RodalesSerializer(rodales)
        context.update({'rodales_serializer' :  json.dumps(rodales_serializer)})

        #voy a ver que trae cuando agrego el otro detalle a basemap
        capasbase_serializer = CapasBasesWithDefaultSerializer()
        context.update({'capasbase_serializer' :  json.dumps(capasbase_serializer)})

        #traigo las capas extra y contruyo el sidebar
        capas_overlays = TileLayerWMS.objects.filter(active = True)
        context.update({'capas_overlays' :  capas_overlays})

        layers_wms_idxs = get_idx_categorias_capas(capas_overlays)

        #traigo las categorias
        categorias_capas = CategoriasCapas.objects.filter(pk__in = layers_wms_idxs)
        context.update({'categorias_capas' :  categorias_capas})

        print(categorias_capas)







    except Exception as e:
                print('error')
                print(e)
                messages.error(request, str(e))


   

    return render(request, 'homepage/index.html', context=context)