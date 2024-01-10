from django.contrib.gis.db import models
from rodales.models import Rodales
from login.models import Users
from emsefor.models import Emsefor
from configuration.models import IntervencionesTypes

# Create your models here.
INTERVENCIONES_CHOICES = (
    ('Sobrevivencia', 'Sobrevivencia'),
    ('Poda', 'Poda'),
    ('Raleo', 'Raleo'),
    ('Talaraza', 'Talaraza')
)

INTERVENCIONES_DICT = {
    'Sobrevivencia' : 'Sobrevivencia',
    'Poda' : 'Poda',
    'Raleo' : 'Raleo',
    'Talaraza' : 'Talaraza'
}

INTERVENCIONES_ARRAY = ['Sobrevivencia', 'Poda', 'Raleo', 'Talaraza']

class Intervenciones(models.Model):
    intervenciones_id = models.AutoField(primary_key=True)
    rodales = models.ForeignKey(Rodales, related_name='rodales_intervenciones', blank=False, null=False, on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    type = models.EmailField("Tipo de Intervencion", choices=INTERVENCIONES_CHOICES, max_length=15, blank=False)
    superficie = models.FloatField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    users = models.ForeignKey(Users, related_name='user_created_intervencion', blank=False, null=True, on_delete=models.SET_NULL)
    emsefors = models.ForeignKey(Emsefor, related_name='intervencion_emsefor', blank=False, null=True, on_delete=models.SET_NULL)
    name = models.CharField('Nombre de Intervencion', unique=False, max_length=100, null=True)
    intervenciones_types = models.ForeignKey(IntervencionesTypes, related_name='inter_type_intervencion', blank=True, null=True, on_delete=models.CASCADE)




class PodaIntervencion(models.Model):
    intervenciones = models.OneToOneField(Intervenciones, related_name='poda_intervencion', blank=False, null=False, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    arb_podados = models.IntegerField(blank=True, null=True)
    arb_no_podados = models.IntegerField(blank=True, null=True)
    alt_deseada = models.FloatField(blank=True, null=True)
    alt_poda = models.FloatField(blank=True, null=True)
    dap = models.FloatField(blank=True, null=True)
    altura = models.FloatField(blank=True, null=True)
    dmsm = models.FloatField(blank=True, null=True)
    area_basal = models.FloatField(blank=True, null=True)
    porc_removido = models.FloatField(blank=True, null=True)


class SobrevivenciaIntervencion(models.Model):
    intervenciones = models.OneToOneField(Intervenciones, related_name='sobrevivencia_intervencion', blank=False, null=False, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    parcela_size = models.FloatField(blank=True, null=True)
    parcela_relevadas = models.IntegerField(blank=True, null=True)
    plantas_vivas = models.IntegerField(blank=True, null=True)
    plantas_muertas = models.IntegerField(blank=True, null=True)
    damage_herbicida = models.IntegerField(blank=True, null=True)
    damage_mecanico = models.IntegerField(blank=True, null=True)
    sobrevivencia = models.FloatField(blank=True, null=True)
    responsable = models.CharField('Responsable', unique=False, max_length=100, null=True)


class RaleoIntervencion(models.Model):
    intervenciones = models.OneToOneField(Intervenciones, related_name='raleo_intervencion', blank=False, null=False, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    criterio = models.CharField('Criterio', unique=False, max_length=100, null=True)
    arboles_extraidos = models.IntegerField(blank=True, null=True)
    arboles_podados = models.IntegerField(blank=True, null=True)
    dap = models.FloatField(blank=True, null=True)
    altura = models.FloatField(blank=True, null=True)
    dmsm = models.FloatField(blank=True, null=True)
    porc_removido = models.FloatField(blank=True, null=True)
    intensidad = models.FloatField(blank=True, null=True)
    levante = models.FloatField(blank=True, null=True)


class TalarazaIntervencion(models.Model):
    intervenciones = models.OneToOneField(Intervenciones, related_name='talaraza_intervencion', blank=False, null=False, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    criterio = models.CharField('Criterio', unique=False, max_length=100, null=True)
    arboles_extraidos = models.IntegerField(blank=True, null=True)
    arboles_podados = models.IntegerField(blank=True, null=True)
    dap = models.FloatField(blank=True, null=True)
    altura = models.FloatField(blank=True, null=True)
    dmsm = models.FloatField(blank=True, null=True)
    porc_removido = models.FloatField(blank=True, null=True)
    intensidad = models.FloatField(blank=True, null=True)
    levante = models.FloatField(blank=True, null=True)






