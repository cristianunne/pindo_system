from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.contrib.auth.models import UserManager


#creamos las opciones
ROL_CHOICES = (
    ('AG', 'General Administrator'),
    ('AA', 'Area Administrator'),
    ('AAWP', 'Area Administrator Witouth Permission'),
    ('DE', 'Data Entry')
)



class Users(AbstractUser):
    username = models.CharField("Nombre de usuario", unique=False, max_length=100)
    email = models.EmailField("Correo Electrónico", unique=True, max_length=100, blank=False)
    first_name = models.CharField("Nombres", max_length=100, blank=True)
    last_name = models.CharField("Apellidos", max_length=100, blank=True)
    role = models.CharField("Role", choices=ROL_CHOICES, blank=False, max_length=10, default='DE')
    date_joined = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    image = models.TextField(blank=False)

    objects = UserManager()

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)


    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['password', 'first_name', 'last_name', 'username']

    def __str__(self):
        return f'{self.first_name}, {self.last_name}'
    
    





