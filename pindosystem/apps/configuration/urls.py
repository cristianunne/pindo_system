from django.urls import path
from . import views

urlpatterns = [
    path('configuration/usos-rodales/index', views.indexUsosRodales, name='usos-rodales-index'),
    path('configuration/usos-rodales/add', views.addUsosRodales, name='usos-rodales-add'),
    path('configuration/usos-rodales/edit/<int:id>/', views.editUsosRodales, name='usos-rodales-edit'),
    path('configuration/usos-rodales/usos-rodales-delete/<int:id>/', views.deleteUsoRodales, name='usos-rodales-delete'),
   
]