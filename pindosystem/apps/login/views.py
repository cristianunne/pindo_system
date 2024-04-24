from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import auth
from django.contrib import messages
from login.models import Users
from django.http import Http404

from django.http import HttpResponseRedirect
from django.urls import reverse

from django.views.decorators.csrf import csrf_exempt
import base64
from django.core.files.base import ContentFile
from django.contrib.auth.decorators import login_required

from django.http import JsonResponse



# Create your views here.
#creamos las opciones
ROL_CHOICES = (
    ('AG', 'General Administrator'),
    ('AA', 'Area Administrator'),
    ('AAWP', 'Area Administrator Witouth Permission'),
    ('DE', 'Data Entry')
)



@login_required
def index(request):
    
    
    users = Users.objects.all()
  
    context = {'users' : users, 
               'category' : 'Usuarios',
                'action' : 'Administración de Usuarios'}

    return render(request, 'users/index.html', context)




@login_required
def delete(request, id):

    try:
        obj = Users.objects.get(pk=id)
        obj.delete()
        """context = {'is_delete' : True,
                   'category' : 'Usuarios',
                   'action' : 'Administración de Usuarios'}"""
        #return render(request, 'user-index', context) 
       
        messages.success(request, "El Usuario ha sido eliminado.")
        return redirect('user-index')

    except Users.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

def addUser(request):
    context = {'roles' : ROL_CHOICES}
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        role = request.POST.get('select-role')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')
        superuser = request.POST.get('admin')
        

        if password != password2:
            messages.error(request, "Las Contraseñas no coinciden.")
            return render(request, 'users/add.html', context)
        
        else:
            #creo el objeto
            user = Users()
            user.first_name = first_name
            user.last_name = last_name
            user.email = email
            user.role = role
            user.is_superuser = True if superuser == 'SI' else False
            user.set_password(password)
           

            try:
                user.save()
                messages.success(request, "El Usuario se ha agregado con éxito")
                return redirect('user-index')
                
            except Exception as e:
                messages.error(request, str(e))

                context_ = {
                    'roles' : ROL_CHOICES,
                    'firstname' : first_name,
                    'lastname' : last_name,
                    'email' : email
                }
                #paso un mensaje de error user-add
                #return redirect('user-add', context)
                return render(request, 'users/add.html', context_)
        

    else:
        return render(request, 'users/add.html', context)


@login_required
def editUser(request, id):
    context = {'roles' : ROL_CHOICES}
   
   
    try:

        user = Users.objects.get(id = id)
        
        context.update({'user_data' : user})
        
        #context['user_data'] = user
        if request.method == 'POST':
            first_name = request.POST.get('first_name')
            last_name = request.POST.get('last_name')
            email = request.POST.get('email')
            role = request.POST.get('select-role')
            superuser = request.POST.get('admin')
            is_active = request.POST.get('is_active')
        
            user.first_name = first_name
            user.last_name = last_name
            user.email = None if email == '' else email
            user.role = role
            user.is_superuser = True if superuser == 'SI' else False
            user.is_active = True if is_active == 'SI' else False
    
            try:
                user.save()
                messages.success(request, "El Usuario se ha editado con éxito")
                return redirect('user-index')
                
            except Exception as e:
                messages.error(request, str(e))

                    #paso un mensaje de error user-add
                    #return redirect('user-add', context)
                #return render(request, 'users/edit.html', context)
                return HttpResponseRedirect(reverse("user-edit", args=[id]))         
            
        else:
            return render(request, 'users/edit.html', context)
        
    
    except Exception as e:
        messages.error(request, str(e))
        return redirect('user-index')

@login_required
def modifiedImageProfile(request, id):
     
    try:

        context = {
               'category' : 'Usuarios',
                'action' : 'Administración de Usuarios / Cambio de Imagen de Perfil'}

        user = Users.objects.get(id = id)
        
        context.update({'user_data' : user})
        """if request.method == 'POST':
            file = request.POST.get('dropzone-default')
            print(file)"""
       

        return render(request, 'users/modified_image_profile.html', context=context)
         
    except Exception as e:
        messages.error(request, str(e))
        return redirect('user-index')
     
@login_required
@csrf_exempt
def uploadImage(request):

    if request.method == 'POST':
        image_data = request.FILES['file']
        user = request.user

        if image_data != None:
            #format, imgstr = image_data.split(';base64,')
            image_string = base64.standard_b64encode(image_data.read())

            user.image = image_string.decode()
            #print(str(image_string.decode()))

            try:
                user.save()
                return JsonResponse({'respuesta' : True})


            except:

                 return JsonResponse({'respuesta' : False})
        
        return JsonResponse({'respuesta' : False})
    return JsonResponse({'respuesta' : False})

  
         
@login_required
def usersProfile(request, iduser):
    try:
        
        user = Users.objects.get(id =iduser)

        context = {
            'user' : user
        }

        return render(request, 'users/users-profile.html', context=context)


    except Exception as e:
        messages.error(request, str(e))
        return redirect('user-index')

def login(request):
    
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = auth.authenticate(email=email, password=password)

        if user is not None:
            #time session expire
            #request.session.set_expiry(600)
            if user.is_active:
                auth.login(request, user)

                #verifico el tipo de usuario para redireccionar

                return redirect('indexAdmin')
            else:
                 return redirect('logout')

        else:
            messages.info(request, 'Credenciales invalidas')
            return redirect('login')

    else:
        if request.user.is_authenticated:
             return redirect('index')
        else:

            return render(request, 'login/login.html')
        

def signin(request):
     if request.method == 'POST':
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')

        if password != password2:
            messages.error(request, "Las Contraseñas no coinciden.")
            return render(request, 'login/sign-up.html')
        
        else:
            user = Users()
            user.first_name = firstname
            user.last_name = lastname
            user.email = email
            user.set_password(password)

            try:
                user.save()
                return redirect('login')
                
            except Exception as e:
                messages.error(request, str(e))

                context = {
                    'firstname' : firstname,
                    'lastname' : lastname,
                    'email' : email
                }

                return render(request, 'login/sign-up.html', context)

     else:
         return render(request, 'login/sign-up.html')
     


def logout(request):
    auth.logout(request)
    return redirect('index')

