from django.db import models
from login.models import Users
from rodales.models import Rodales

# Create your models here.

class SagpyasExpedientes(models.Model):
    name = models.CharField("Nombre", max_length=200, blank=True, unique=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)





#creo una clase para registras los movimientos

class SagpyasExpedientesMovimientos(models.Model):
    name = models.CharField("Name", max_length=150, blank=True)
    description = models.CharField("Descripcion", max_length=1000, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user_created = models.ForeignKey(Users, related_name='user_created_sagpyas_exp', blank=False, null=True, default=None ,on_delete=models.SET_NULL)
    expediente = models.ForeignKey(SagpyasExpedientes, related_name='sagpyas_exp_mov', blank=False, null=False, default=None, on_delete=models.CASCADE)
    

class SagpyasExpedientesFiles(models.Model):
       #agregar nombre y detalles
    sagpyaexp = models.ForeignKey(SagpyasExpedientesMovimientos, related_name='sagpyasexpmov_files', null=False, blank=False, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='user_sagpyasexp_files', blank=True, null=True, on_delete=models.SET_NULL)
    file = models.FileField("Files", upload_to="sagpyas_files/", blank=False, null=False, max_length=200)
    name = models.CharField("Nombre", max_length=200, blank=True)
    #agregar el tipo de datos
    type = models.CharField("Tipo", max_length=20, blank=True)
    size = models.FloatField("Tamaño", blank=True, null=True)

    description = models.CharField("Description", max_length=3000, blank=True)
    url = models.CharField("URL", max_length=255, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    

class Sagpyas(models.Model):

    sagpyas_id = models.AutoField(primary_key=True)
    operaciones = models.CharField("Operaciones", unique=False, max_length=50, blank=True)
    fecha = models.DateTimeField(blank=True)
    expediente = models.CharField('Expediente', max_length=100, blank=True)
    sup_aprobada = models.FloatField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    expedientes = models.OneToOneField(SagpyasExpedientes, related_name='exp_sagpya', blank=True, null=True, on_delete=models.SET_NULL)
    rodales = models.ManyToManyField(Rodales, through='SagpyasRodales')
    resolucion = models.CharField("Resolucion", unique=False, max_length=250, blank=True)



class SagpyasFiles(models.Model):
    #agregar nombre y detalles
    sagpyas = models.ForeignKey(Sagpyas, related_name='sagpyas_files', null=False, blank=False, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='user_sagpyas_files', blank=True, null=True, on_delete=models.SET_NULL)
    file = models.FileField("Files", upload_to="sagpyas_files/", blank=False, null=False, max_length=200)
    name = models.CharField("Nombre", max_length=200, blank=True)
    #agregar el tipo de datos
    type = models.CharField("Tipo", max_length=20, blank=True)
    size = models.FloatField("Tamaño", blank=True, null=True)

    description = models.CharField("Description", max_length=1000, blank=True)
    url = models.CharField("URL", max_length=255, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
  


class SagpyasRodales(models.Model):
    rodales = models.ForeignKey(Rodales, related_name='rodales_sag',  on_delete=models.CASCADE)
    sagpyas = models.ForeignKey(Sagpyas, related_name='sagpyas_rod',  on_delete=models.CASCADE)
    turno = models.IntegerField('Turno', blank=True, null=True)
    superficie_aprobada = models.FloatField('Superficie Aprobada', blank=True, null=True)
    tarea = models.CharField('Tarea', max_length=255, blank=True)
  

#clase utilizada para los movimientos registrados en el sagpya pero no netad
class SagpyasMovimientos(models.Model):
    name = models.CharField("Name", max_length=150, blank=True)
    description = models.CharField("Descripcion", max_length=1000, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user_created = models.ForeignKey(Users, related_name='user_created_sagpyas_mov', blank=False, null=True, default=None ,on_delete=models.SET_NULL)
    sagpya = models.ForeignKey(Sagpyas, related_name='sagpyas_mov', blank=False, null=False, default=None, on_delete=models.CASCADE)


class SagpyasMovimientosFiles(models.Model):
       #agregar nombre y detalles
    sagpyamov = models.ForeignKey(SagpyasMovimientos, related_name='sagpyasmov_files', null=False, blank=False, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='user_sagpyasmov_files', blank=True, null=True, on_delete=models.SET_NULL)
    file = models.FileField("Files", upload_to="sagpyas_files/", blank=False, null=False, max_length=200)
    name = models.CharField("Nombre", max_length=200, blank=True)
    #agregar el tipo de datos
    type = models.CharField("Tipo", max_length=20, blank=True)
    size = models.FloatField("Tamaño", blank=True, null=True)

    description = models.CharField("Description", max_length=3000, blank=True)
    url = models.CharField("URL", max_length=255, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


"""class SagpyasExpedientesFiles(models.Model):
       #agregar nombre y detalles
    sagpyaexp = models.ForeignKey(SagpyasExpedientes, related_name='sagpyasexp_files', null=False, blank=False, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='user_sagpyasexp_files', blank=True, null=True, on_delete=models.SET_NULL)
    file = models.FileField("Files", upload_to="sagpyas_files/", blank=False, null=False, max_length=200)
    name = models.CharField("Nombre", max_length=200, blank=True)
    #agregar el tipo de datos
    type = models.CharFieldrodales_sag("Tipo", max_length=20, blank=True)
    size = models.FloatField("Tamaño", blank=True, null=True)

    description = models.CharField("Description", max_length=1000, blank=True)
    url = models.CharField("URL", max_length=255, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)"""

"""class Sagpyas(models.Model):

    sagpyas_id = models.AutoField(primary_key=True)
    operaciones = models.CharField("Operaciones", unique=False, max_length=50, blank=True)
    fecha = models.DateTimeField(blank=True)
    sup_aprobada = models.FloatField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    expedientes = models.OneToOneField(SagpyasExpedientes, related_name='exp_sagpya', blank=True, null=True, on_delete=models.SET_NULL)


class SagpyasFiles(models.Model):
    #agregar nombre y detalles
    sagpyas = models.ForeignKey(Sagpyas, related_name='sagpyas_files', null=False, blank=False, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, related_name='user_sagpyas_files', blank=True, null=True, on_delete=models.SET_NULL)
    file = models.FileField("Files", upload_to="sagpyas_files/", blank=False, null=False, max_length=200)
    name = models.CharField("Nombre", max_length=200, blank=True)
    #agregar el tipo de datos
    type = models.CharField("Tipo", max_length=20, blank=True)
    size = models.FloatField("Tamaño", blank=True, null=True)

    description = models.CharField("Description", max_length=1000, blank=True)
    url = models.CharField("URL", max_length=255, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)"""


"""class SagpyasRodales(models.Model):
    rodales = models.ForeignKey(Rodales, related_name='rodales_sag',  on_delete=models.CASCADE)
    sagpyas = models.ForeignKey(Sagpyas, related_name='sagpyas_rod',  on_delete=models.CASCADE)
    turno = models.IntegerField('Turno', blank=True, null=True)
    superficie_aprobada = models.FloatField('Superficie Aprobada', blank=True, null=True)"""


