from django.urls import path
from . import views


urlpatterns = [
    path('api/get-plantaciones-by-rodal', views.getPlantacionesByRodal, name='api-getPlantacionesByRodal'),
    path('api/get-intervenciones-by-rodal', views.getIntervencionesByRodal, name='api-getIntervencionesByRodal'),
    path('api/get-layer-wms', views.getLayerWMS, name='get-layer-wms'),

    #emsefors
    path('api/emsefors/getEmsefors', views.getEmsefors, name='getEmsefors'),
    path('api/empresas/getEmpresas', views.getEmpresas, name='getEmpresas'),
    path('api/empresas/getEmpresaById/<str:empresa_id>/', views.getEmpresaById, name='getEmpresaById'),

    path('api/empresas/getResumenPlantacionesByUso/<int:empresa_id>/', 
         views.getSuperficieUsoRodalesByEmpresa, name='getResumenPlantacionesByUso'),

    path('api/empresas/getResumenPlantacionesByYears/<int:empresa_id>/', 
         views.getSuperficieYearsByEmpresa, name='getResumenPlantacionesByYears'),

    path('api/empresas/getRodalesByEmpresa/<int:empresa_id>/', 
         views.getRodalesByEmpresa, name='getRodalesByEmpresa'),

    path('api/empresas/getSagpyasByEmpresas/<int:empresa_id>/', 
         views.getSagpyasByEmpresas, name='getSagpyasByEmpresas'),
        
    path('api/empresas/getRodalesSagpyasByEmpresas/<int:empresa_id>/', 
         views.getRodalesSagpyasByEmpresas, name='getRodalesSagpyasByEmpresas'),

     #rodales
     path('api/rodales/getRodalesByUso/<str:uso>/', views.getRodalesByUso, name='getRodalesByUso'),
     path('api/rodales/getRodalesById/<int:idrodal>/', views.getRodalesById, name='getRodalesById'),
     path('api/rodales/getMaterialGeneticoByRodalById/<int:idrodal>/', views.getMaterialGeneticoByRodalById, name='getMaterialGeneticoByRodalById'),



     #GIS REQUEST
     path('api/gis/getRodalesGisById/<int:idrodal>/', views.getRodalgisById, name='getRodalgisById'),

     #planificacion
     path('api/planificacion/getPlanificacionIntervencionesByRodal/<int:idrodal>/', views.getPlanificacionIntervencionesByRodal, name='getPlanificacionIntervencionesByRodal'),
      path('api/planificacion/getReferenciasPlanificacion/', views.getReferenciasPlanificacion, name='getReferenciasPlanificacion'),

]
