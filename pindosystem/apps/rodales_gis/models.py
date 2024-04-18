from django.contrib.gis.db import models
from rodales.models import Rodales

# Create your models here.

class Rodalesgis(models.Model):
    rodalesgis_id = models.AutoField(primary_key=True)
    superficie = models.FloatField(blank=True, null=True)
    perimetro = models.FloatField(blank=True, null=True)
    departamento = models.CharField("Departamento", unique=False, max_length=100, blank=True, null=True)
    municipio = models.CharField("Municipio", unique=False, max_length=100, blank=True, null=True)
    seccion = models.CharField("Sección", unique=False, max_length=100, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    #agregar relaciones a castastro ID A LA OBJETO DEL CATASTRO

    #establezco la relacion con el rodal
    rodales = models.ForeignKey(Rodales, related_name='rodales_rodales_gis', blank=True, null=True, on_delete=models.SET_NULL)

    geom = models.MultiPolygonField(srid=5349, blank=True, null=True)
    geom_4326 = models.MultiPolygonField(blank=True, null=True)


class RodalesState(models.Model):
    rodalesstate_id = models.AutoField(primary_key=True)
    superficie = models.FloatField(blank=True, null=True)
    perimetro = models.FloatField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    #establezco la relacion con el rodal
    rodales = models.ForeignKey(Rodales, related_name='rodales_rodalesstate_gis', blank=True, null=True, on_delete=models.SET_NULL)
    geom = models.MultiPolygonField(srid=5349, blank=True, null=True)
    geom_4326 = models.MultiPolygonField(blank=True, null=True)


class RodalesParcelas(models.Model):
    rodales_parcelas_id = models.AutoField(primary_key=True)
    departamento = models.CharField("Departamento", unique=False, max_length=100, blank=True, null=True)
    municipio = models.CharField("Municipio", unique=False, max_length=100, blank=True, null=True)
    seccion = models.CharField("Sección", unique=False, max_length=100, blank=True, null=True)
    chacra = models.CharField("Chacra", unique=False, max_length=100, blank=True, null=True)
    manzana = models.CharField("Manzana", unique=False, max_length=100, blank=True, null=True)
    parcela = models.CharField("Parcela", unique=False, max_length=100, blank=True, null=True)
    subparcela = models.CharField("Subparcela", unique=False, max_length=100, blank=True, null=True)
    partida = models.CharField("Partida", unique=False, max_length=100, blank=True, null=True)
    rodales = models.ForeignKey(Rodales, related_name='rodales_rodalesparcelas_gis', blank=True, null=True, on_delete=models.SET_NULL)
    geom = models.MultiPolygonField(srid=5349, blank=True, null=True)
    geom_4326 = models.MultiPolygonField(blank=True, null=True)
