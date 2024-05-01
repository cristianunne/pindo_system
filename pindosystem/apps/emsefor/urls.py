from django.urls import path
from . import views

urlpatterns = [
    path('emsefor/emsefor-index', views.index, name='emsefor-index'),
    path('emsefor/emsefor-add', views.addEmsefor, name='emsefor-add'),
    path('emsefor/emsefor-edit/<int:id>/', views.editEmsefor, name='emsefor-edit'),
    path('emsefor/emsefor-delete/<int:id>/', views.deleteEmsefor, name='emsefor-delete'),
    path('emsefor/modified-logo-emsefor/<int:id>',views.modifiedLogoEmsefor, name='modified-logo-emsefor'),
    path('emsefor/upload-image', views.uploadImage, name='emsefor-image'),
   path('emsefor/emsefor-view/<int:id>/', views.viewEmsefor, name='emsefor-view'), 
   path('emsefor/emsefor-add-maquinas/<int:idemsefor>/', views.addMaquinaEmsefor, name='emsefor-add-maquinas'),
    path('emsefor/emsefor-view-maquinas/<int:idemsefor>/', views.viewMaquinasEmsefor, name='emsefor-view-maquinas'),
    path('emsefor/emsefor-edit-cantidad-maquinas/<int:idmaquina_ems>/', views.editCantidadMaquinasEmsefor, name='emsefor-edit-cantidad-maquinas'),
    path('emsefor/emsefor-maquina-delete/<int:id>/', views.deleteMaquinaEmsefor, name='emsefor-maquina-delete'),
]