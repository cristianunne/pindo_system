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

    path('api/empresas/getResumenEmpresasById/<str:empresa_id>/', views.getResumenEmpresasById, name='getResumenEmpresasById'),

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
     path('api/rodales/getRodalesByIdSap/<str:idrodal>/', views.getRodalesByIdSap, name='getRodalesByIdSap'),

     path('api/rodales/getMaterialGeneticoByRodalById/<int:idrodal>/', views.getMaterialGeneticoByRodalById, name='getMaterialGeneticoByRodalById'),
     
     path('api/rodales/getRodalesBySagpya/<int:idsagpya>/', views.getRodalesBySagpya, name='getRodalesBySagpya'),


     #RELEVAMIENTOS
     path('api/relevamientos/set-parcel-position', views.setPointParcelsPosition, name='set-parcel-position'),


     #GIS REQUEST
     path('api/gis/getRodalesGisById/<int:idrodal>/', views.getRodalgisById, name='getRodalgisById'),
     #path('api/gis/getRodalesGis/', views.getRodalesgis, name='getRodalesGis'),

     path('api/gis/getRodalesGisAll/', views.getRodalesgis, name='getRodalesGisAll'),

     #planificacion
     path('api/planificacion/getPlanificacionIntervencionesByRodal/<int:idrodal>/', views.getPlanificacionIntervencionesByRodal, name='getPlanificacionIntervencionesByRodal'),
     path('api/planificacion/getReferenciasPlanificacion/', views.getReferenciasPlanificacion, name='getReferenciasPlanificacion'),
     path('api/planificacion/getPlanificacionIntervenciones/', views.getPlanificacionIntervenciones, name='getPlanificacionIntervenciones'),
     path('api/planificacion/getPlanificacionDetailsByYearsAndTipo/', views.getPlanificacionDetailsByYearsAndTipo, name='getPlanificacionDetailsByYearsAndTipo'),
     
     #SAGPYAS
     path('api/sagpyas/getSagpyasById/<int:idsagpya>/', views.getSagpyasById, name='getSagpyasById'),
     path('api/sagpyas/getSagpyasWithDetails/', views.getSagpyasWithDetails, name='getSagpyasWithDetails'),
     path('api/sagpyas/getRodalesGisBySagpyas/<int:idsagpya>/', views.getRodalesGisBySagpyas, name='getRodalesGisBySagpyas'),
     path('api/sagpyas/getFilesDetailsBySagpya/<int:idsagpya>/', views.getFilesDetailsBySagpya, name='getFilesDetailsBySagpya'),
     path('api/sagpyas/downloadFileSagpya/<int:idfile>/', views.downloadFileSagpya, name='downloadFileSagpya'),


     #intervenciones

     path('api/intervenciones/getSobrevivenciaByRodalSerializer/<int:idrodal>/', views.getSobrevivenciaIntervencionByRodal, name='getSobrevivenciaByRodalSerializer'),
     path('api/intervenciones/getSobrevivenciaIntervencionGisByRodal/<int:idrodal>/', views.getSobrevivenciaIntervencionGisByRodal, name='getSobrevivenciaIntervencionGisByRodal'),
     path('api/intervenciones/getPodaIntervencionByRodal/<int:idrodal>/', \
          views.getPodaIntervencionByRodal, name='getPodaIntervencionByRodal'),

     path('api/intervenciones/getPodaIntervencionGisByRodal/<int:idrodal>/', \
          views.getPodaIntervencionGisByRodal, name='getPodaIntervencionGisByRodal'),
     
     path('api/intervenciones/getRaleoIntervencionByRodal/<int:idrodal>/', \
          views.getRaleoIntervencionByRodal, name='getRaleoIntervencionByRodal'),

     path('api/intervenciones/getRaleoIntervencionGisByRodal/<int:idrodal>/', \
          views.getRaleoIntervencionGisByRodal, name='getRaleoIntervencionGisByRodal'),

     path('api/intervenciones/getTalarazaIntervencionByRodal/<int:idrodal>/', \
          views.getTalarazaIntervencionByRodal, name='getTalarazaIntervencionByRodal'),

     path('api/intervenciones/getTalarazaIntervencionGisByRodal/<int:idrodal>/', \
          views.getTalarazaIntervencionGisByRodal, name='getTalarazaIntervencionGisByRodal'),
   

]
