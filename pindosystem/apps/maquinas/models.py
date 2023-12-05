from django.db import models
from login.models import Users

# Create your models here.
class Maquinas(models.Model):

    maquinas_id = models.AutoField(primary_key=True)
    nombre = models.CharField("Nombre", unique=False, max_length=100, blank=True)
    marca = models.CharField("Marca", unique=False, max_length=50, blank=True)
    modelo = models.CharField("Modelo", unique=False, max_length=50, blank=True)
    image = models.FileField("Files", upload_to="maquinas_files/", blank=False, null=False, max_length=250)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Users, related_name='user_created', blank=True, null=True, on_delete=models.SET_NULL)