
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
   
    path('admin/', admin.site.urls),
    path('', include('pindosystem.apps.login.urls')),
    path('', include('pindosystem.apps.homepage.urls')),
    path('', include('pindosystem.apps.empresas.urls')),
    path('', include('pindosystem.apps.emsefor.urls')),
    path('', include('pindosystem.apps.procedencias.urls')),
    path('', include('pindosystem.apps.sagpyas.urls')),
    path('', include('pindosystem.apps.maquinas.urls')),
]
