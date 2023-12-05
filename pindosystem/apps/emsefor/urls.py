from django.urls import path
from . import views

urlpatterns = [
    path('emsefor/emsefor-index', views.index, name='emsefor-index'),
    path('emsefor/emsefor-add', views.addEmsefor, name='emsefor-add'),
    path('emsefor/emsefor-edit/<int:id>/', views.editEmsefor, name='emsefor-edit'),
    path('emsefor/emsefor-delete/<int:id>/', views.deleteEmsefor, name='emsefor-delete'),
    path('emsefor/modified-logo-emsefor/<int:id>',views.modifiedLogoEmsefor, name='modified-logo-emsefor'),
    path('emsefor/upload-image', views.uploadImage, name='emsefor-image'),
]