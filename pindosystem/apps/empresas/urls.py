from django.urls import path
from . import views

urlpatterns = [
    path('empresas/empresas-index', views.index, name='empresas-index'),
    path('empresas/empresas-add', views.add, name='empresas-add'),
    path('empresas/empresas-edit/<int:id>/', views.editEmpresa, name='empresas-edit'),
    path('empresas/empresas-delete/<int:id>/', views.deleteEmpresa, name='empresas-delete'),
    path('empresas/modified-logo-empresa/<int:id>',views.modifiedLogoEmpresa, name='modified-logo-empresa'),
    path('empresas/upload-image', views.uploadImage, name='empresas-image'),
    path('empresas/empresas-view/<int:id>/', views.viewEmpresa, name='empresas-view'),
]