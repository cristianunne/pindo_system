from django.urls import path
from . import views

urlpatterns = [
    path('maquinas/maquinas-index', views.index, name='maquinas-index'),
    path('maquinas/maquinas-add', views.addMaquina, name='maquinas-add'),
    path('maquinas/maquinas-edit/<int:id>/', views.editMaquina, name='maquinas-edit'),
    path('maquinas/maquinas-delete/<int:id>/', views.deleteMaquina, name='maquinas-delete'),
   
]