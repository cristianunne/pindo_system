from django.urls import path
from . import views

urlpatterns = [
    path('catastros/catastros-index', views.index, name='catastros-index'),
    path('catastros/catastros-view/<int:idcatastro>/', views.view, name='catastros-view'),
    path('catastros/catastros-edit/<int:idcatastro>/', views.edit, name='catastros-edit'),
    path('catastros/catastros-delete/<int:id>/', views.deleteParcela, name='catastros-delete'),
    
]