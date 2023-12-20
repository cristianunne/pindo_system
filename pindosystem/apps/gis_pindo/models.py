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
    user = models.OneToOneField(Users, related_name='user_created_plantaciones_gis', blank=False, null=True, on_delete=models.SET_NULL)
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
    user = models.OneToOneField(Users, related_name='user_created_poda_intervencion_gis', blank=False, null=True, on_delete=models.SET_NULL)
    geom = models.MultiPolygonField(srid=5349, blank=True, null=True)
    geom_4326 = models.MultiPolygonField(blank=True, null=True)



   


   