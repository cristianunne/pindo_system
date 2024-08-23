from django.contrib.gis.db import models
from empresas.models import Empresas

# Create your models here.

class Catastrogis(models.Model):
    
    campo_empresa = models.CharField('Campo/Empresa', max_length=100, blank=True, null=True)
    superficie = models.FloatField('Superficie de Lote', blank=True, null=True)
    lote = models.CharField('Lote', max_length=100, blank=True, null=True)
    parcela = models.CharField('Parcela', max_length=100, blank=True, null=True)
    partida = models.CharField('Partida', max_length=100, blank=True, null=True)
    matricula = models.CharField('Matricula', max_length=100, blank=True, null=True)
    seccion = models.CharField('Seccion', max_length=100, blank=True, null=True)
    municipio = models.CharField('Municipio', max_length=100, blank=True, null=True)
    departamento = models.CharField('Departamento', max_length=100, blank=True, null=True)
    certificado = models.BooleanField('Certificado', max_length=100, blank=True, null=True)
    superficie_gis = models.FloatField('Superficie GIS', blank=True, null=True)
    superficie_empresa = models.FloatField('Superficie Empresa', blank=True, null=True)
    trat_especial = models.CharField('Tratamiento especial', max_length=200, blank=True, null=True)
    observaciones = models.CharField('Observaciones', max_length=1000, blank=True, null=True)
    empresa = models.ForeignKey(Empresas, related_name='catastro_empresas', blank=False, null=True, on_delete=models.SET_NULL)
    geom = models.MultiPolygonField(srid=5349, blank=True, null=True)
    geom_4326 = models.MultiPolygonField(blank=True, null=True)

