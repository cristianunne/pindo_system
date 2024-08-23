from django.urls import path
from . import views

urlpatterns = [
    path('rodales/rodales-index', views.index, name='rodales-index'),
    path('rodales/rodales-add', views.addRodal, name='rodales-add'),
    path('rodales/rodales-add-no-sap', views.addRodalNoSap, name='rodales-add-no-sap'),
    path('rodales/rodales-edit/<int:id>/', views.editRodal, name='rodales-edit'),
    path('rodales/rodales-config/<int:id>/', views.configurationRodal, name='rodales-config'),
    path('rodales/rodales-view/<int:idrodal>/', views.viewRodales, name='rodales-view'),
    path('rodales/rodales-delete/<int:idrodal>/', views.deleteRodal, name='rodales-delete'),
    path('rodales/rodales-close/<int:idrodal>/', views.closeRodal, name='rodales-close'),
    path('rodales/rodales-open/<int:idrodal>/', views.openRodal, name='rodales-open'),
]