from django.db import models
from login.models import Users
from django.utils import timezone

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
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='map_config_users', blank=True, null=True, on_delete=models.SET_NULL)


class ServiciosIDEConfig(models.Model):
    name = models.CharField('Nombre', null=True, blank=True, max_length=100)
    url = models.CharField('URL del Servicio', null=True, blank=True, max_length=1000)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='servicio_ide_users', blank=True, null=True, on_delete=models.SET_NULL)


class CategoriasCapas(models.Model):
    name = models.CharField('Categoria', null=True, blank=True, max_length=50, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='categoriascapas_users', blank=True, null=True, on_delete=models.SET_NULL)


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
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='capabase_users', blank=True, null=True, on_delete=models.SET_NULL)
    name =  models.CharField('nombre', null=False, blank=False, max_length=100)
   

class CapasBasesDefault(models.Model):
    capabase = models.OneToOneField(CapasBases, blank=False, null=False, on_delete=models.CASCADE, related_name='capasbasedefaultcb')
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='capabasedefault_users', blank=True, null=True, on_delete=models.SET_NULL)


class TileLayerWMS(models.Model):
    idlayer = models.AutoField(primary_key=True)
    name =  models.CharField('nombre', null=False, blank=False, max_length=100)
    layer_name = models.CharField('workspace:Layer', null=False, blank=False, max_length=200, default='')
    styles =  models.CharField('styles', null=True, blank=True, max_length=255)
    format = models.CharField('Formato', null=False, blank=False, max_length=50, default='image/jpeg')
    transparent = models.BooleanField('transparent', null=False, blank=False, default=True)
    version =  models.CharField('version', null=True, blank=True, max_length=30)
    crs =  models.CharField('crs', null=True, blank=True, max_length=50)
    uppercase = models.BooleanField('uppercase', null=True, blank=True)
    min_zoom = models.IntegerField(blank=True, null=True)
    max_zoom = models.IntegerField(blank=True, null=True)
    opacity = models.FloatField(blank=True, null=True)
    attribution = models.CharField('Atribuciones', null=True, blank=True, max_length=500)
    active = models.BooleanField('active', null=False, blank=False, default=False)
    tiles_size = models.IntegerField(blank=True, null=True)
    servicio = models.ForeignKey(ServiciosIDEConfig, related_name='layer_servicio_ide', blank=True, null=True, on_delete=models.SET_NULL)
    categoria = models.ForeignKey(CategoriasCapas, related_name='layer_categorias', blank=True, null=True, on_delete=models.SET_NULL)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='tilelayer_wms_users', blank=True, null=True, on_delete=models.SET_NULL)
    min_x = models.FloatField(blank=False, null=False, default=0)
    min_y = models.FloatField(blank=False, null=False,  default=0)
    max_x = models.FloatField(blank=False, null=False,  default=0)
    max_y = models.FloatField(blank=False, null=False,  default=0)


    #Clases orientadas al manejo de materiales
class CategoriasMateriales(models.Model):
    idcategoriamateriales = models.AutoField(primary_key=True)
    name = models.CharField('nombre', null=False, blank=False, max_length=100, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='categoriasmat_users', blank=True, null=True, on_delete=models.SET_NULL)

    
class SubCategoriasMateriales(models.Model):
    idsubcategoriamateriales = models.AutoField(primary_key=True)
    name = models.CharField('nombre', null=False, blank=False, max_length=100, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    categorias_materiales = models.ForeignKey(CategoriasMateriales, related_name='categorias_mat_sub_cat', blank = False, null=False, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='subcategoriasmat_users', blank=True, null=True, on_delete=models.SET_NULL)


class MaterialesSAP(models.Model):
    idmaterialessap = models.AutoField(primary_key=True)
    matnr = models.CharField('matnr', null=False, blank=True, max_length=200, unique=True)
    maktx = models.CharField('maktx', null=False, blank=True, max_length=200, unique=False)
    subcategorias_materiales = models.ForeignKey(SubCategoriasMateriales, related_name='subcategorias_mat_sap', blank = False, null=False, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='matsap_users', blank=True, null=True, on_delete=models.SET_NULL)



