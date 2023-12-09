from django.shortcuts import render, redirect
from rodales.models import Rodales
from login.models import Users
from configuration.models import Usosrodales
from empresas.models import Empresas
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, Http404, HttpResponseRedirect
from django.contrib import messages
from django.db import IntegrityError
from django.urls import reverse

# Create your views here.
@login_required
def index(request):
    rodales = Rodales.objects.all()

    context = {'rodales' : rodales, 
               'category' : 'Rodales',
                'action' : 'Administración de Rodales'}

    return render(request, 'rodales/index.html', context)


@login_required
def addRodal(request):
    context = {
            'category' : 'Rodales',
            'action' : 'Crea un nuevo Rodal'}
    

    usos_rodales = Usosrodales.objects.values_list("usosrodales_id", "name")
    context.update({'usos_rodales' : usos_rodales})

    #traigo las empresas
    empresas = Empresas.objects.values_list("empresas_id", "name")
    context.update({'empresas' : empresas})


    if request.method == 'POST':
        try:
        
            cod_sap = request.POST.get('cod_sap')
            campo = request.POST.get('campo')
            certificado = request.POST.get('is_certificado')
            uso = request.POST.get('select-uso')
            empresa = request.POST.get('select-empresa')
           
            is_certificado = True if certificado == 'SI' else False
       
            user_entity = Users.objects.get(pk=request.user.pk)

            #creo el objeto
            uso_rodal = Usosrodales.objects.get(pk=uso)
            empresa_ent = Empresas.objects.get(pk=empresa)

            rodal = Rodales.objects.create(cod_sap=cod_sap, campo=campo, is_certificado=is_certificado, usos_rodales=uso_rodal, user=user_entity, empresa=empresa_ent)
        

            messages.success(request, "El Rodal se ha creado con éxito!.")
            return redirect('rodales-index')
    
        except IntegrityError as e:
            #messages.error(request, str(e))
            messages.error(request, str('Ya existe un Rodal con el Código SAP sugerido!'))
            context.update({'campo' : campo,
                            'is_certificado' : certificado})
            

            return render(request, 'rodales/add.html', context)
        except Exception as e:
            messages.error(request, str(e))
            return render(request, 'rodales/add.html', context)

    else:
    
        return render(request, 'rodales/add.html', context)
    

def editRodal(request, id):

    context = {
            'category' : 'Rodales',
            'action' : 'Editar un Rodal'}
    
    try:

        usos_rodales = Usosrodales.objects.values_list("usosrodales_id", "name")
        context.update({'usos_rodales' : usos_rodales})

        #traigo las empresas
        empresas = Empresas.objects.values_list("empresas_id", "name")
        context.update({'empresas' : empresas})

        #traigo el rodal
        rodal = Rodales.objects.get(pk = id)
        context.update({'rodal' : rodal})

        if (request.method == 'POST'):
            
            cod_sap = request.POST.get('cod_sap')
            campo = request.POST.get('campo')
            certificado = request.POST.get('is_certificado')
            uso = request.POST.get('select-uso')
            empresa = request.POST.get('select-empresa')
           

            is_certificado = True if certificado == 'SI' else False
             #creo el objeto
            uso_rodal = Usosrodales.objects.get(pk=uso)
            empresa_ent = Empresas.objects.get(pk=empresa)


            rodal.cod_sap = cod_sap
            rodal.campo = campo
            rodal.is_certificado = is_certificado
            rodal.usos_rodales = uso_rodal
            rodal.empresa = empresa_ent

            try:
                rodal.save()
                messages.success(request, "El Rodal se ha editado con éxito")
                return redirect('rodales-index')
                
            except Exception as e:
                messages.error(request, str(e))

                    #paso un mensaje de error user-add
                    #return redirect('user-add', context)
                #return render(request, 'users/edit.html', context)
                return HttpResponseRedirect(reverse("rodales-edit", args=[id])) 




        else:
            return render(request, 'rodales/edit.html', context)


    
    except Exception as e:
        messages.error(request, str(e))
        return redirect('rodales-index')
    

def configurationRodal(request, id):
    return render(request, 'rodales/configuration.html')


