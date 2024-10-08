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

    path('configuration/map-config/index', views.indexMapConfiguration, name='map-config-index'),
    path('configuration/map-config/view-config', views.viewMapConfig, name='map-view-config'),
    path('configuration/map-config/edit-config', views.editMapConfig, name='map-edit-config'),

    path('configuration/basemaps/index-basemaps', views.indexBaseMaps, name='index-basemaps'),
    path('configuration/basemaps/add-basemaps', views.addBaseMaps, name='add-basemaps'),
    path('configuration/basemaps/edit/<int:idcapabase>/', views.editBaseMaps, name='edit-basemaps'),
    path('configuration/basemaps/delete-basemaps/<int:id>/', views.deleteBaseMap, name='delete-basemaps'),

    path('configuration/basemaps-default/edit-basemaps-default', views.editBaseMapDefault, name='edit-basemaps-default'),

    path('configuration/categorias-capas/index-categoriascapas', views.indexCategoriasCapas, name='index-categoriascapas'),
    path('configuration/categorias-capas/add-categoriascapas', views.addCategoriasCapas, name='add-categoriascapas'),
    path('configuration/categorias-capas/edit-categoriascapas/<int:idcategoria>/', views.editCategoriasCapas, name='edit-categoriascapas'),
    path('configuration/categorias-capas/delete-categoriascapas/<int:id>/', views.deleteCategoriasCapas, name='delete-categoriascapas'),

    path('configuration/servicios-ide/index-servicios-ide', views.indexServiciosIDE, name='index-servicios-ide'),
    path('configuration/servicios-ide/add-servicios-ide', views.addServicioIDE, name='add-servicios-ide'),
    path('configuration/servicios-ide/edit-servicios-ide/<int:idservicio>/', views.editServiciosIDE, name='edit-servicios-ide'),
    path('configuration/servicios-ide/delete-servicios-ide/<int:id>/', views.deleteServicioIDE, name='delete-servicios-ide'),

    path('configuration/layers/index-layers', views.indexLayers, name='index-layers'),
    path('configuration/layers/add-layers', views.addLayers, name='add-layers'),
    path('configuration/layers/edit-layers/<int:idlayer>/', views.editLayers, name='edit-layers'),
    path('configuration/layers/delete-layers/<int:id>/', views.deleteLayers, name='delete-layers'),
    path('configuration/layers/view-layers/<int:idlayer>/', views.viewLayers, name='view-layers'),

    path('configuration/materiales/index-categorias-materiales', views.indexCategoriasMateriales, name='index-categorias-materiales'),
    path('configuration/materiales/add-categoria-material', views.addCategoriaMaterial, name='add-categoria-material'),
    path('configuration/materiales/edit-categoria-material/<int:idcategoria>/', views.editCategoriaMaterial, name='edit-categoria-material'),
    path('configuration/materiales/index-subcategorias-materiales', views.indexSubCategoriasMateriales, name='index-subcategorias-materiales'),
    path('configuration/materiales/add-subcategoria-material', views.addSubCategoriaMaterial, name='add-subcategoria-material'),
     path('configuration/materiales/index-materiales', views.indexMateriales, name='index-materiales'),
    path('configuration/materiales/add-material', views.addMateriales, name='add-material'),

    path('configuration/inventarios-categories/index', views.indexInventariosCategories, name='inventarios-categories-index'),
    path('configuration/inventarios-categories/add', views.addInventarioCategories, name='inventarios-categories-add'),
    path('configuration/inventarios-categories/edit/<int:id>/', views.editInventarioCategories, name='inventarios-categories-edit'),

    path('configuration/inventarios-observaciones/index', views.indexInventariosObservaciones, name='inventarios-observaciones-index'),
    path('configuration/inventarios-observaciones/add', views.addInventarioObservaciones, name='inventarios-observaciones-add'),
    path('configuration/inventarios-observaciones/edit/<int:id>/', views.editInventarioObservaciones, name='inventarios-observaciones-edit'),

    path('configuration/inventarios-damages/index', views.indexInventariosDamages, name='inventarios-damages-index'),
    path('configuration/inventarios-damages/add', views.addInventarioDamages, name='inventarios-damages-add'),
    path('configuration/inventarios-damages/edit/<int:id>/', views.editInventarioDamages, name='inventarios-damages-edit'),

]