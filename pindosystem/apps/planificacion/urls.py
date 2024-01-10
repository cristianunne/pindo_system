from django.urls import path
from . import views

urlpatterns = [
    path('planificacion/planificacion-inter-index/<int:idrodal>/', views.indexPlanificacionIntervencion, name='planificacion-inter-index'),
    path('planificacion/planificacion-inter-add/<int:idrodal>/', views.addPlanificacionIntervencion, name='planificacion-inter-add'),
]