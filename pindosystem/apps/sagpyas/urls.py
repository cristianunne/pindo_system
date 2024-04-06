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
    path('sagpyas/sagpyas-assign-delete/<int:idsagpya>/<int:idrodal>/', views.deleteRodalesSagpyas, name='sagpyas-assign-delete'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)