from django.urls import path
from . import views


urlpatterns = [
    path('api/get-plantaciones-by-rodal', views.getPlantacionesByRodal, name='api-getPlantacionesByRodal'),
    path('api/get-intervenciones-by-rodal', views.getIntervencionesByRodal, name='api-getIntervencionesByRodal'),
    path('api/get-layer-wms', views.getLayerWMS, name='get-layer-wms'),

]
