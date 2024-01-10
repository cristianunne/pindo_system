from django.contrib.gis.db import models
from login.models import Users
from plantaciones.models import Plantaciones
from intervenciones.models import Intervenciones

# Create your models here.

     

class Plantacionesgis(models.Model):
    plantacionesgis_id = models.AutoField(primary_key=True)
    superficie = models.FloatField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    plantacion = models.ForeignKey(Plantaciones, related_name='plantacion_plantaciongis', blank=False, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='user_created_plantaciones_gis', blank=False, null=True, on_delete=models.SET_NULL)
    geom = models.MultiPolygonField(srid=5349, blank=True, null=True)
    geom_4326 = models.MultiPolygonField(blank=True, null=True)

    def get_data_plantacion(self):
        return self.plantacion.pk
   

class PodaIntervenciongis(models.Model):
    podaintervenciongis_id = models.AutoField(primary_key=True)
    superficie = models.FloatField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    intervencion_gis = models.ForeignKey(Intervenciones, related_name='poda_intervencion_gis', blank=False, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='user_created_poda_intervencion_gis', blank=False, null=True, on_delete=models.SET_NULL)
    geom = models.MultiPolygonField(srid=5349, blank=True, null=True)
    geom_4326 = models.MultiPolygonField(blank=True, null=True)


class SobrevivenciaIntervenciongis(models.Model):
    superficie = models.FloatField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    intervencion_gis = models.ForeignKey(Intervenciones, related_name='sobrevivencia_intervencion_gis', blank=False, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='user_created_sobrevivencia_intervencion_gis', blank=False, null=True, on_delete=models.SET_NULL)
    geom = models.MultiPolygonField(srid=5349, blank=True, null=True)
    geom_4326 = models.MultiPolygonField(blank=True, null=True)
    name = models.CharField('Nombre de Parcela', unique=False, max_length=100, null=True)


class RaleoIntervenciongis(models.Model):
    raleointervenciongis_id = models.AutoField(primary_key=True)
    superficie = models.FloatField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    intervencion_gis = models.ForeignKey(Intervenciones, related_name='raleo_intervencion_gis', blank=False, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='user_created_raleo_intervencion_gis', blank=False, null=True, on_delete=models.SET_NULL)
    geom = models.MultiPolygonField(srid=5349, blank=True, null=True)
    geom_4326 = models.MultiPolygonField(blank=True, null=True)


class TalarazaIntervenciongis(models.Model):
    superficie = models.FloatField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    intervencion_gis = models.ForeignKey(Intervenciones, related_name='talaraza_intervencion_gis', blank=False, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='user_created_talaraza_intervencion_gis', blank=False, null=True, on_delete=models.SET_NULL)
    geom = models.MultiPolygonField(srid=5349, blank=True, null=True)
    geom_4326 = models.MultiPolygonField(blank=True, null=True)


   


   