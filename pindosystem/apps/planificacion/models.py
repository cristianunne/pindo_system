from django.db import models
from login.models import Users
from rodales.models import Rodales
from configuration.models import IntervencionesTypes

# Create your models here.

class PlanificacionIntervenciones(models.Model):
    planificacionintervencion_id = models.BigAutoField(primary_key=True)
    title = models.CharField('Titulo', null=False, blank=False, max_length=100)
    date_start = models.DateField('Fecha de Inicio', blank=False, null = False)
    date_end = models.DateField('Fecha de Finalización', blank=False, null = False)
    status = models.BooleanField('Realizado?', blank=False, null = False, default=False) 
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='user_created_planificacion_inter', blank=False, null=True, on_delete=models.SET_NULL)
    rodales = models.ForeignKey(Rodales, related_name='rodales_planificacion_inter', blank=False, null=True, on_delete=models.SET_NULL)
    intervenciones_types = models.ForeignKey(IntervencionesTypes, related_name='inter_types_planificacion_inter', blank=False, null=True, on_delete=models.SET_NULL)

