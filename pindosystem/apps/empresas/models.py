from django.db import models

# Create your models here.


class Empresas(models.Model):

    empresas_id = models.AutoField(primary_key=True)
    sap_id = models.CharField("sap_id", unique=False, max_length=100, blank=False)
    name = models.CharField("Nombre de la Empresa", unique=False, max_length=100, blank=True)
    address = models.CharField("Dirección de la Empresa", unique=False, max_length=150)
    phone = models.CharField("Teléfono de la Empresa", unique=False, max_length=100)
    email = models.EmailField("Correo Electrónico", unique=True, max_length=100, blank=True)
    cuit = models.CharField("CUIT de la Empresa", unique=False, max_length=20)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    image = models.TextField()
    #agregar columna representante/apoderado
    #telefono
    #email