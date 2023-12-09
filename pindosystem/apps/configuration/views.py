from django.shortcuts import render, redirect
from configuration.models import Usosrodales
from login.models import Users
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse, Http404, HttpResponseRedirect
from django.db import IntegrityError
from django.urls import reverse

# Create your views here.
@login_required
def indexUsosRodales(request):
    
    usos_rodales = Usosrodales.objects.all()
    context = {'usos_rodales' : usos_rodales, 
               'category' : 'Usos Rodales',
                'action' : 'Administración de Categorías de Usos Rodales'}

    return render(request, 'configuration/usos_rodales/index.html', context)

@login_required
def addUsosRodales(request):
    context = {
               'category' : 'Usos Rodales',
                'action' : 'Crea un nuevo Uso'}

    if request.method == 'POST':
        try:
        
            name = request.POST.get('name')
       
            user_entity = Users.objects.get(pk=request.user.pk)

            #creo el objeto
            uso_rodal = Usosrodales.objects.create(name = name, user = user_entity)
        

            messages.success(request, "El Uso ha sido agregado con éxito!.")
            return redirect('usos-rodales-index')
    
        except IntegrityError as e:
            messages.error(request, str('Ya existe un Uso con el nombre sugerido. Considere elegir un nombre alternativo!'))
            return render(request, 'configuration/usos_rodales/add.html', context)
        except Exception as e:
           
            return render(request, 'configuration/usos_rodales/add.html', context)
  

    else:
    
        return render(request, 'configuration/usos_rodales/add.html', context)


def editUsosRodales(request, id):
    context = {}

    try:
        uso_rodal = Usosrodales.objects.get(pk = id)
        
        context.update({'uso_rodal' : uso_rodal})

        if (request.method == 'POST'):
           
            name = request.POST.get('name')
            uso_rodal.name = name

            try:
                uso_rodal.save()
                messages.success(request, "El Uso se ha editado con éxito")
                return redirect('usos-rodales-index')
                
            
            except IntegrityError as e:
                messages.error(request, str('Ya existe un Uso con el nombre sugerido. Considere elegir un nombre alternativo!'))
                return HttpResponseRedirect(reverse("usos-rodales-edit", args=[id])) 
            except Exception as e:
                messages.error(request, str(e))

                return HttpResponseRedirect(reverse("usos-rodales-edit", args=[id]))          
          
        else:
            return render(request, 'configuration/usos_rodales/edit.html', context)
    
    except OSError as error: 
        print(error) 
    except Exception as e:
        messages.error(request, str(e))
        return redirect('usos-rodales-index')
    

def deleteUsoRodales(request, id):

    try:
        uso_rodal = Usosrodales.objects.get(pk=id)
        uso_rodal.delete()
      
       
        messages.success(request, "El Uso ha sido eliminada.")
        return redirect('usos-rodales-index')

    except Usosrodales.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))