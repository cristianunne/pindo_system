from django.db import models
from login.models import Users
from rodales.models import Rodales

# Create your models here.


class Sagpyas(models.Model):

    sagpyas_id = models.AutoField(primary_key=True)
    operaciones = models.CharField("Operaciones", unique=False, max_length=50, blank=True)
    fecha = models.DateTimeField(blank=True)
    sup_aprobada = models.FloatField(blank=True)
    expediente = models.CharField("Expediente", unique=False, max_length=50, blank=True)
    turno_minimo = models.CharField("Turno Mínimo", unique=False, max_length=50, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    rodales = models.ManyToManyField(Rodales, related_name='sagpyas_rodales')



class SagpyasFiles(models.Model):
    #agregar nombre y detalles
    sagpyas = models.ForeignKey(Sagpyas, related_name='sagpyas_files', null=False, blank=False, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='user_sagpyas_files', blank=True, null=True, on_delete=models.SET_NULL)
    file = models.FileField("Files", upload_to="sagpyas_files/", blank=False, null=False, max_length=200)
    name = models.CharField("Nombre", max_length=200, blank=True)
    #agregar el tipo de datos
    type = models.CharField("Tipo", max_length=20, blank=True)
    size = models.FloatField("Tamaño", blank=True, null=True)

    description = models.CharField("Description", max_length=1000, blank=True)
    url = models.CharField("URL", max_length=255, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
