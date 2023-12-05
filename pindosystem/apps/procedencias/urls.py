from django.urls import path
from . import views

urlpatterns = [
    path('procedencias/procedencias-index', views.index, name='procedencias-index'),
    path('procedencias/procedencias-add', views.addProcedencia, name='procedencias-add'),
    path('procedencias/procedencias-edit/<int:id>/', views.editProcedencia, name='procedencias-edit'),
    path('procedencias/procedencias-delete/<int:id>/', views.deleteProcedencias, name='procedencias-delete'),
    path('procedencias/modified-logo-procedencias/<int:id>',views.modifiedLogoProcedencias, name='modified-logo-procedencias'),
    path('procedencias/upload-image', views.uploadImage, name='emsefor-image'),
]