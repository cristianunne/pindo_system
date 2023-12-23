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
]