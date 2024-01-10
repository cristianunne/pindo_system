from django.urls import path
from . import views

urlpatterns = [
    path('intervenciones/intervenciones-index/<int:idrodal>/', views.indexIntervencion, name='intervenciones-index'),
    path('intervenciones/intervenciones-poda-add/<int:idrodal>/', views.addIntervencionPoda, name='intervenciones-poda-add'),
    path('intervenciones/intervenciones-poda-edit/<int:idpoda>/', views.editIntervencionPoda, name='intervenciones-poda-edit'),
    path('intervenciones/intervenciones-poda-view/<int:idpoda>/', views.viewIntervencionPoda, name='intervenciones-poda-view'),
    path('intervenciones/intervenciones-poda-delete/<int:idpoda>/', views.deleteIntervencionPoda, name='intervenciones-poda-delete'),

    path('intervenciones/intervenciones-sobrevivencia-add/<int:idrodal>/', views.addIntervencionSobrevivencia, name='intervenciones-sobrevivencia-add'),
    path('intervenciones/intervenciones-sobrevivencia-view/<int:idsobrevivencia>/', views.viewIntervencionSobrevivencia, name='intervenciones-sobrevivencia-view'),
    path('intervenciones/intervenciones-sobrevivencia-edit/<int:idsobrevivencia>/', views.editIntervencionSobrevivencia, name='intervenciones-sobrevivencia-edit'),
    path('intervenciones/intervenciones-sobrevivencia-delete/<int:idsobrevivencia>/', views.deleteIntervencionPoda, name='intervenciones-sobrevivencia-delete'),

    path('intervenciones/intervenciones-raleo-add/<int:idrodal>/', views.addIntervencionRaleo, name='intervenciones-raleo-add'),
    path('intervenciones/intervenciones-raleo-edit/<int:idraleo>/', views.editIntervencionRaleo, name='intervenciones-raleo-edit'),
    path('intervenciones/intervenciones-raleo-view/<int:idraleo>/', views.viewIntervencionRaleo, name='intervenciones-raleo-view'),
    path('intervenciones/intervenciones-raleo-delete/<int:idraleo>/', views.deleteIntervencionRaleo, name='intervenciones-raleo-delete'),

    path('intervenciones/intervenciones-talaraza-add/<int:idrodal>/', views.addIntervencionTalaraza, name='intervenciones-talaraza-add'),
    path('intervenciones/intervenciones-talaraza-edit/<int:idtalaraza>/', views.editIntervencionTalaraza, name='intervenciones-talaraza-edit'),
    path('intervenciones/intervenciones-talaraza-view/<int:idtalaraza>/', views.viewIntervencionTalaraza, name='intervenciones-talaraza-view'),
    path('intervenciones/intervenciones-talaraza-delete/<int:idraleo>/', views.deleteIntervencionTalaraza, name='intervenciones-talaraza-delete'),
]