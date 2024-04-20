from django.urls import path
from . import views

urlpatterns = [
    path('planificacion/planificacion-inter-index/<int:idrodal>/', views.indexPlanificacionIntervencion, name='planificacion-inter-index'),
    path('planificacion/planificacion-inter-add/<int:idrodal>/', views.addPlanificacionIntervencion, name='planificacion-inter-add'),
    path('planificacion/planificacion-inter-edit/<int:idrodal>/<int:idplanificacion>/', views.editPlanificacion, name='planificacion-inter-edit'),
    path('planificacion/planificacion-delete/<int:idplanificacion>/', views.deletePlanificacion, name='plantaciones-delete'),
]