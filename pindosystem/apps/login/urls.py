from django.urls import path
from . import views


urlpatterns = [
    path('users/user-index', views.index, name='user-index'),
    path('users/user-add', views.addUser, name='user-add'),
    path('users/user-edit/<int:id>', views.editUser, name='user-edit'),
    path('login', views.login, name='login'),
    path('signup', views.signin, name='sign-up'),
    path('logout', views.logout, name='logout'),
    path('users/delete-user/<int:id>',views.delete, name='delete-user'),
    path('users/modified-image-profile/<int:id>',views.modifiedImageProfile, name='modified-image-profile'),
    path('users/upload-image', views.uploadImage, name='upload-image'),
    path('users/users-profile/<int:iduser>', views.usersProfile, name='users-profile'),
]
