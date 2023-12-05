from django.urls import path
from . import views

urlpatterns = [
    path('maquinas/maquinas-index', views.index, name='maquinas-index'),
    path('maquinas/maquinas-add', views.addSagpyas, name='maquinas-add'),
   
]