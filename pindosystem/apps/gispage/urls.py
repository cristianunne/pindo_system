from django.urls import path
from . import views


urlpatterns = [
    path('gis/gishome', views.IndexView, name='gishome')

]
