from django.contrib.gis.db import models
from login.models import Users
from rodales.models import Rodales

# Create your models here.

TYPES_RELEVAMIENTO = (
    ('Manual', 'Manual'),
    ('Dispositivo', 'Dispositivo'),
    ('Preexistente', 'Preexistente')
)



class InventariosCategories(models.Model):
    name = models.CharField("Nombre", unique=True, max_length=100, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='inventarioscat_users', blank=True, null=True, on_delete=models.SET_NULL)

class InventariosObservaciones(models.Model):
    name = models.CharField("Nombre", unique=True, max_length=100, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='inventariosobs_users', blank=True, null=True, on_delete=models.SET_NULL)


class InventariosDamages(models.Model):
    name = models.CharField("Nombre", unique=True, max_length=100, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='inventariosdam_users', blank=True, null=True, on_delete=models.SET_NULL)



class InventariosRelevamientos(models.Model):
    number= models.IntegerField(blank=True)
    type = models.CharField("Tipo de Relevamiento", choices=TYPES_RELEVAMIENTO, blank=False, max_length=20)
    h_deseada = models.FloatField(blank=True, null=True)
    h_last_poda = models.FloatField(blank=True, null=True)
    fecha = models.DateTimeField(blank=False)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    is_finish = models.BooleanField("Finalizado", unique=False, blank=False, default=False)
    user = models.ForeignKey(Users, related_name='inventariosrel_users', blank=True, null=True, on_delete=models.SET_NULL)
    user_relevador = models.ForeignKey(Users, related_name='inventariosrel_users_relevador', blank=True, null=True, on_delete=models.SET_NULL)
    rodales = models.ForeignKey(Rodales, related_name='rel_rodales', blank=False, null=True, on_delete=models.SET_NULL)
    categorias = models.ForeignKey(InventariosCategories, related_name='rel_category', blank=False, null=True, on_delete=models.SET_NULL)


class InventariosParcelasgis(models.Model):
    size_parcela = models.FloatField(blank=True)
    #el numero es autoincrement y depende de parcelas por rodales
    number_parcela = models.IntegerField(blank=True)
    type = models.CharField("Tipo de Parcela", blank=False, max_length=100)
    rodales = models.ForeignKey(Rodales, related_name='parc_rodales', blank=False, null=True, on_delete=models.SET_NULL)
    number_trees = models.IntegerField(blank=False, default=0)
    relevamiento = models.ForeignKey(InventariosRelevamientos, related_name='parc_invrel', blank=False, null=True, on_delete=models.SET_NULL)
    geom = models.PointField(srid=5349, blank=True, null=True)
    geom_4326 = models.PointField(srid=4326, blank=True, null=True)


class ArbolesRelevamientoPoda(models.Model):

    number_tree = models.IntegerField(blank=True, null = False)
    dap = models.FloatField(blank=True, null = True)
    dmsm = models.FloatField(blank=True, null = True)
    h_poda = models.FloatField(blank=True, null = True)
    h_total = models.FloatField(blank=True, null = True)
    is_poda = models.BooleanField("Podado?", unique=False, blank=False, default=False, null = False)
    damages = models.ForeignKey(InventariosDamages, related_name='dam_arb_poda', blank=False, null=True, on_delete=models.SET_NULL)
    observaciones = models.ForeignKey(InventariosObservaciones, related_name='obser_arb_poda', blank=False, null=True, on_delete=models.SET_NULL)
    relevamientos = models.ForeignKey(InventariosRelevamientos, related_name='invrel_arb_poda', blank=False, null=True, on_delete=models.SET_NULL)
    parcela = models.ForeignKey(InventariosParcelasgis, related_name='invrel_parc_arb', blank=False, null=False, default=None, on_delete=models.CASCADE)

    geom = models.PointField(srid=5349, blank=True, null=True)
    geom_4326 = models.PointField(srid=4326, blank=True, null=True)


class ArbolesRelevamientoOthers(models.Model):
    number_tree = models.IntegerField(blank=True, null = False)
    dap = models.FloatField(blank=True, null = True)
    h_poda = models.FloatField(blank=True, null = True)
    h_total = models.FloatField(blank=True, null = True)
    damages = models.ForeignKey(InventariosDamages, related_name='dam_arb_others', blank=False, null=True, on_delete=models.SET_NULL)
    observaciones = models.ForeignKey(InventariosObservaciones, related_name='obs_arb_poda', blank=False, null=True, on_delete=models.SET_NULL)
    relevamientos = models.ForeignKey(InventariosRelevamientos, related_name='invrel_arb_others', blank=False, null=True, on_delete=models.SET_NULL)
    parcela = models.ForeignKey(InventariosParcelasgis, related_name='invrel_parc_arb_others', blank=False, null=False, default=None, on_delete=models.CASCADE)

    geom = models.PointField(srid=5349, blank=True, null=True)
    geom_4326 = models.PointField(srid=4326, blank=True, null=True)

