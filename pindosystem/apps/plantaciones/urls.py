from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('plantaciones/plantaciones-index/<int:id>/', views.indexPlantacionesByRodal, name='plantaciones-index'),
    path('plantaciones/plantaciones-add/<int:idrodal>/', views.addPlantacionByRodal, name='plantaciones-add'),
    path('plantaciones/plantaciones-view/<int:id_plantacion>/', views.viewPlantacion, name='plantaciones-view'),
    path('plantaciones/plantaciones-edit/<int:id_plantacion>/', views.editPlantacion, name='plantaciones-edit'),
    path('plantaciones/plantaciones-delete/<int:id_plantacion>/', views.deletePlantacion, name='plantaciones-delete'),
   
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)