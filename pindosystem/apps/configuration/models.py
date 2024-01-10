from django.db import models
from login.models import Users

# Create your models here.

class Usosrodales(models.Model):
    usosrodales_id = models.AutoField(primary_key=True)
    name = models.CharField("Nombre", unique=True, max_length=100, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='user_created_usos_rodales', blank=True, null=True, on_delete=models.SET_NULL)


class InventariosTypes(models.Model):
    inventariostypes_id = models.AutoField(primary_key=True)
    name = models.CharField("Nombre", unique=True, max_length=100, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='inventariostypes_users', blank=True, null=True, on_delete=models.SET_NULL)


class IntervencionesTypes(models.Model):
    intervencionestypes_id = models.AutoField(primary_key=True)
    name = models.CharField("Nombre", unique=True, max_length=100, blank=True)
    color = models.CharField("Color", unique=True, max_length=100, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='intervencionestypes_users', blank=True, null=True, on_delete=models.SET_NULL)


class MapConfigGis(models.Model):
    crs = models.CharField('CRS', null=True, blank=True, max_length=45, default='L.CRS.EPSG3857')
    center_x = models.FloatField(blank=False, null=False)
    center_y = models.FloatField(blank=False, null=False)
    zoom = models.FloatField(blank=False, null=False)
    min_zoom = models.IntegerField(blank=True, null=True)
    max_zoom = models.IntegerField(blank=True, null=True)
    renderer = models.BooleanField('Tipo de Renderizacion', default=False, null=True, blank=True)


class ServiciosIDEConfig(models.Model):
    name = models.CharField('Nombre', null=True, blank=True, max_length=100)
    url = models.CharField('URL del Servicio', null=True, blank=True, max_length=1000)

class CategoriasCapas(models.Model):
    name = models.CharField('Categoria', null=True, blank=True, max_length=50)



class CapasBases(models.Model):
    idcapasbase = models.BigAutoField(primary_key=True)
    name =  models.CharField('nombre', null=False, blank=False, max_length=100)
    urlservice = models.CharField('URL del Servicio', null=False, blank=False, max_length=1000, default='')
    attribution = models.CharField('Atribuciones', null=True, blank=True, max_length=500)
    subdomain = models.CharField('Subdominio', null=True, blank=True, max_length=200)
    min_zoom = models.IntegerField(blank=True, null=True)
    max_zoom = models.IntegerField(blank=True, null=True)
    format = models.CharField('Formato', null=True, blank=True, max_length=50)
    time =  models.CharField('Time', null=True, blank=True, max_length=100)
    tilematrixset =  models.CharField('tilematrixset', null=True, blank=True, max_length=100)
    opacity = models.FloatField(blank=True, null=True)
    active = models.BooleanField('active', null=False, blank=False, default=False)

class CapasBasesDefault(models.Model):
    capabase = models.OneToOneField(CapasBases, related_name='capasbase_default_cb', blank=False, null=False, on_delete=models.CASCADE);
    