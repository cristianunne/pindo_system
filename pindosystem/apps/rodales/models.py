
from django.contrib.gis.db import models
from configuration.models import Usosrodales
from login.models import Users
from empresas.models import Empresas


# Create your models here.

class Rodales(models.Model):
    rodales_id = models.AutoField(primary_key=True)
    name = models.CharField("Nombre", unique=False, max_length=100, blank=True,  null=True)
    cod_sap = models.CharField("Código", unique=True, max_length=100, blank=True, null=True)
    #este codigo uso para unir a sap
    sap_id = models.CharField("sap_id", unique=True, max_length=100, blank=True,  null=True)
    campo = models.CharField("Campo", unique=False, max_length=100, blank=True)
    is_certificado = models.BooleanField("Certificado", unique=False, blank=False, default=False)
    is_finish = models.BooleanField("Finalizado", unique=False, blank=False, default=False)
    is_sap = models.BooleanField("Es SAP", unique=False, blank=False, default=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    usos_rodales = models.ForeignKey(Usosrodales, related_name='usos_rodales_category', blank=True, null=True, on_delete=models.SET_NULL)
    user = models.ForeignKey(Users, related_name='user_created_rodales', blank=False, null=True, on_delete=models.SET_NULL)
    empresa = models.ForeignKey(Empresas, related_name='empresas_rodales', blank=False, null=True, on_delete=models.SET_NULL)


    
