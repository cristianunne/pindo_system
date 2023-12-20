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
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='intervencionestypes_users', blank=True, null=True, on_delete=models.SET_NULL)