from django.urls import path
from . import views


urlpatterns = [
    path('gis/gishome', views.IndexView, name='gishome'),
    path('gis/view-gis-by-rodales', views.viewGisByRodales, name='view-gis-by-rodales')

]
