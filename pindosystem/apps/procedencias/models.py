from django.db import models

# Create your models here.

#MaterialGenetico

class Procedencias(models.Model):
    procedencias_id = models.AutoField(primary_key=True)
    name = models.CharField("Nombre", unique=False, max_length=100, blank=False)
    especie = models.CharField("Especie", unique=False, max_length=100)
    origen = models.CharField("Origen", unique=False, max_length=100)
    mejora = models.CharField("Mejora", unique=False, max_length=100)
    vivero = models.CharField("Vivero", unique=False, max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    image = models.TextField()