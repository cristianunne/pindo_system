
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
   
    path('admin/', admin.site.urls),
    path('', include('pindosystem.apps.login.urls')),
    path('', include('pindosystem.apps.homepage.urls')),
    path('', include('pindosystem.apps.empresas.urls')),
    path('', include('pindosystem.apps.emsefor.urls')),
    path('', include('pindosystem.apps.procedencias.urls')),
    path('', include('pindosystem.apps.sagpyas.urls')),
    path('', include('pindosystem.apps.maquinas.urls')),
    path('', include('pindosystem.apps.configuration.urls')),
    path('', include('pindosystem.apps.rodales.urls')),
    path('', include('pindosystem.apps.plantaciones.urls')),
    path('', include('pindosystem.apps.intervenciones.urls')),
]  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
