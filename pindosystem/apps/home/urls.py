from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('indexAdmin/', views.indexAdmin, name='indexAdmin')

]