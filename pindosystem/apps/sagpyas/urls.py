from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('sagpyas/sagpyas-index', views.index, name='sagpyas-index'),
    path('sagpyas/sagpyas-add', views.addSagpyas, name='sagpyas-add'),
    path('sagpyas/sagpyas-edit/<int:id>/', views.editSagpyas, name='sagpyas-edit'),
    path('sagpyas/sagpyas-view/<int:id>/', views.viewSagpyas, name='sagpyas-view'),
    path('sagpyas/sagpyas-delete/<int:id>/', views.deleteSagpyas, name='sagpyas-delete'),
    path('sagpyas/manage-files-sagpyas/<int:id>',views.manageFilesSagpyas, name='manage-files-sagpyas'),
    path('sagpyas/upload-files-sagpyas', views.uploadFilesSagpyas, name='upload-files-sagpyas'),
    path('sagpyas/view-upload-files-sagpyas/<int:id>/', views.uploadFilesViewSagpyas, name='view-upload-files-sagpyas'),
    path('sagpyas/download-files-sagpyas/<int:id>/', views.downloadFile, name='download-files-sagpyas'),
    path('sagpyas/view-details-file-sagpyas/<int:id>/', views.viewDetailsFile, name='view-details-file-sagpyas'),
    path('sagpyas/sagpyas-delete-files/<int:id>/', views.deleteSagpyasFiles, name='sagpyas-delete-files'),
    path('sagpyas/sagpyas-assign-rodales/<int:idsagpya>/', views.assignRodalToSagpya, name='sagpyas-assign-rodales'),
    path('sagpyas/sagpyas-rodales-edit/<int:idsagpyarodal>/', views.editRodalSagpya, name='sagpyas-rodales-edit'),

    path('sagpyas/sagpyas-assign-delete/<int:idsagpya>/<int:idrodalsagpya>/', views.deleteRodalesSagpyas, name='sagpyas-assign-delete'),
    path('expedientes/expedientes-view/<int:idexpediente>/', views.viewExpediente, name='expedientes-view'),
    path('expedientes/expedientes-mov-add/<int:idexpediente>/', views.addMovimientoExpediente, name='expedientes-mov-add'),
     path('expedientes/expedientes-mov-edit/<int:idmovimiento>/', views.editMovimientoExpediente, name='expedientes-mov-edit'),
    path('expedientes/expedientes-mov-view/<int:idmovimiento>/<int:idexpediente>/', views.viewMovimientoDetails, name='expedientes-mov-view'),
     path('expedientes/expedientes-view-upload-files/<int:idmovimiento>/', views.uploadFilesViewMovimientos, name='expedientes-view-upload-files'),
    path('expedientes/upload-files-movimientos', views.uploadFilesMovimientos, name='upload-files-movimientos'),
    path('expedientes/download-files-movimientos/<int:idmovimiento>/', views.downloadFileMovimiento, name='download-files-movimientos'),
    path('expedientes/view-details-file-movimientos/<int:idmovimiento>/', views.viewDetailsFileMovimientos, name='view-details-file-movimientos'),
    path('expedientes/delete-files-movimientos/<int:id>/', views.deleteFileMovimiento, name='delete-files-movimientos'),

    path('movimientos/movimiento-add/<int:idsagpya>/', views.addMovimientoSagpya, name='movimiento-add'),
    path('movimientos/movimientos-view/<int:idsagpya>/', views.movimientosView, name='movimientos-view'),
    path('movimientos/movimientos-mov-view/<int:idmovimiento>/', views.viewMovimientosSagpyasDetails, name='movimientos-mov-view'),
    path('movimientos/movimientos-edit/<int:idmovimiento>/', views.editMovimientoSagpya, name='movimientos-edit'),
     path('movimientos/movimientos-delete/<int:idmovimiento>/', views.deleteMovimientos, name='movimientos-delete'),
    path('movimientos/movimientos-view-upload-files/<int:idmovimiento>/', views.uploadFilesViewMovimientosSagpyas, 
         name='movimientos-view-upload-files'),
    path('movimientos/upload-files-movimientossagpya', views.uploadFilesMovimientosSagpyas, name='upload-files-movimientossagpya'),
    path('movimientos/view-details-file-movimientos-sag/<int:idmovimiento>/', views.viewDetailsFileMovimientosSagpya, name='view-details-file-movimientos-sag'),
    path('movimientos/download-files-movimientos-sagpya/<int:idmovimiento>/', views.downloadFileMovimientoSagpya, 
         name='download-files-movimientos-sagpya'),
    path('movimientos/movimientos-delete-file/<int:id>/', views.deleteFileMovimientoSagpya, name='movimientos-delete-file'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)