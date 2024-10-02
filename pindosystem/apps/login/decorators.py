from functools import wraps
from django.contrib import messages
from django.shortcuts import redirect
from django.http import HttpResponse


def admin_test_function(user):
    if user.role == 'AG':
        return True
    return False


def admin_access_only(function):
    def decorator(request, *args, **kwargs):
      
        if not admin_test_function(request.user):
            messages.error(request, "Acceso no permitido!")
            return redirect('indexAdmin')
        else:
            return function(request, *args, **kwargs)
          
    return decorator

#request.user