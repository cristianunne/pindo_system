from django.urls import path
from . import views

urlpatterns = [
    path('configuration/usos-rodales/index', views.indexUsosRodales, name='usos-rodales-index'),
    path('configuration/usos-rodales/add', views.addUsosRodales, name='usos-rodales-add'),
    path('configuration/usos-rodales/edit/<int:id>/', views.editUsosRodales, name='usos-rodales-edit'),
    path('configuration/usos-rodales/usos-rodales-delete/<int:id>/', views.deleteUsoRodales, name='usos-rodales-delete'),

    path('configuration/intervenciones-types/index', views.indexIntervencionesTypes, name='intervenciones-types-index'),
    path('configuration/intervenciones-types/add', views.addIntervencionesTypes, name='intervenciones-types-add'),
    path('configuration/intervenciones-types/edit/<int:id>/', views.editIntervencionesTypes, name='intervenciones-types-edit'),
    path('configuration/intervenciones-types/delete/<int:id>/', views.deleteIntervencionesTypes, name='intervenciones-types-delete'),

    path('configuration/inventarios-types/index', views.indexInventariosTypes, name='inventarios-types-index'),
    path('configuration/inventarios-types/add', views.addInventarioTypes, name='inventarios-types-add'),
    path('configuration/inventarios-types/edit/<int:id>/', views.editInventarioTypes, name='inventarios-types-edit'),
    path('configuration/inventarios-types/delete/<int:id>/', views.deleteInventarioTypes, name='inventarios-types-delete'),

   
]