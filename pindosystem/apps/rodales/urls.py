from django.urls import path
from . import views

urlpatterns = [
    path('rodales/rodales-index', views.index, name='rodales-index'),
    path('rodales/rodales-add', views.addRodal, name='rodales-add'),
    path('rodales/rodales-edit/<int:id>/', views.editRodal, name='rodales-edit'),
    path('rodales/rodales-config/<int:id>/', views.configurationRodal, name='rodales-config'),
]