from django.db import models
from login.models import Users
from emsefor.models import Emsefor
from rodales.models import Rodales
from procedencias.models import Procedencias
from rodales.models import Rodales

# Create your models here.

class Plantaciones(models.Model):
    plantaciones_id = models.AutoField(primary_key=True)
    rodales = models.ForeignKey(Rodales, related_name='rodales_plantaciones', blank=False, null=False, on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    superficie = models.FloatField(blank=True, null=True)
    densidad = models.FloatField(blank=True, null=True)
    dist_lineas = models.FloatField(blank=True, null=True)
    dist_plantas = models.FloatField(blank=True, null=True)
    arboles_plantados = models.IntegerField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    users = models.ForeignKey(Users, related_name='user_created_plantaciones', blank=False, null=True, on_delete=models.SET_NULL)
    emsefors = models.ForeignKey(Emsefor, related_name='plantacion_emsefor', blank=False, null=True, on_delete=models.SET_NULL)
    procedencias = models.ForeignKey(Procedencias, related_name='plantacion_procedencias', blank=False, null=True, on_delete=models.SET_NULL)

    

    