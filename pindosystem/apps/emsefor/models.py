from django.db import models

# Create your models here.

class Emsefor(models.Model):
    emsefor_id = models.AutoField(primary_key=True)
    name = models.CharField("Nombre de la Emsefor", unique=False, max_length=100, blank=False)
    contratista = models.CharField("Contratista", unique=False, max_length=100, blank=True)
    address = models.CharField("Dirección de la Emsefor", unique=False, max_length=150)
    phone = models.CharField("Teléfono de la Emsefor", unique=False, max_length=100)
    email = models.EmailField("Correo Electrónico", unique=True, max_length=100, blank=True)
    cuit = models.CharField("CUIT de la Emsefor", unique=False, max_length=20)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    image = models.TextField()
