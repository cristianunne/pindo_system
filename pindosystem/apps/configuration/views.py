from django.shortcuts import render, redirect
from configuration.models import Usosrodales, IntervencionesTypes, InventariosTypes
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

@login_required
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
    
@login_required
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
    


@login_required
def indexIntervencionesTypes(request):
    
    intervenciones_types = IntervencionesTypes.objects.all()
    context = {'intervenciones_types' : intervenciones_types, 
               'category' : 'Tipos de Intervención',
                'action' : 'Administración de Categorías de Tipos de Intervención'}

    return render(request, 'configuration/intervenciones_types/index.html', context)


@login_required
def addIntervencionesTypes(request):
    context = {
               'category' : 'Tipos de Intervención',
                'action' : 'Crea una Categoría de Intervención'}

    if request.method == 'POST':
        try:
        
            name = request.POST.get('name')
       
            user_entity = Users.objects.get(pk=request.user.pk)

            #creo el objeto
            intervencion = IntervencionesTypes.objects.create(name = name, user = user_entity)
        

            messages.success(request, "La Categoría ha sido agregado con éxito!.")
            return redirect('intervenciones-types-index')
    
        except IntegrityError as e:
            messages.error(request, str('Ya existe una Categoría con el nombre sugerido. Considere elegir un nombre alternativo!'))
            return render(request, 'configuration/intervenciones_types/add.html', context)
        except Exception as e:
            messages.error(request, str(e))
            return render(request, 'configuration/intervenciones_types/add.html', context)
  

    else:
    
        return render(request, 'configuration/intervenciones_types/add.html', context)
    

@login_required
def editIntervencionesTypes(request, id):
    context = {}

    try:
        intervencion = IntervencionesTypes.objects.get(pk = id)
        
        context.update({'intervencion' : intervencion})

        if (request.method == 'POST'):
           
            name = request.POST.get('name')
            intervencion.name = name

            try:
                intervencion.save()
                messages.success(request, "La categoría se ha editado con éxito")
                return redirect('intervenciones-types-index')
                
            
            except IntegrityError as e:
                messages.error(request, str('Ya existe una Categoría con el nombre sugerido. Considere elegir un nombre alternativo!'))
                return HttpResponseRedirect(reverse("intervenciones-types-edit", args=[id])) 
            except Exception as e:
                messages.error(request, str(e))

                return HttpResponseRedirect(reverse("intervenciones-types-edit", args=[id]))          
          
        else:
            return render(request, 'configuration/intervenciones_types/edit.html', context)
    
    except OSError as error: 
        print(error) 
    except Exception as e:
        messages.error(request, str(e))
        return redirect('intervenciones-types-index')
    


@login_required
def deleteIntervencionesTypes(request, id):

    try:
        intervencion = IntervencionesTypes.objects.get(pk=id)
        intervencion.delete()
       
        messages.success(request, "La categoría ha sido eliminada.")
        return redirect('intervenciones-types-index')

    except Usosrodales.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    


@login_required
def indexInventariosTypes(request):
    
    inventarios_types = InventariosTypes.objects.all()
    context = {'inventarios_types' : inventarios_types, 
               'category' : 'Tipos de Inventarios',
                'action' : 'Administración de Categorías de Tipos de Inventarios'}

    return render(request, 'configuration/inventarios_types/index.html', context)


@login_required
def addInventarioTypes(request):
    context = {
               'category' : 'Tipos de Inventarios',
                'action' : 'Crea una Categoría de Inventario'}

    if request.method == 'POST':
        try:
        
            name = request.POST.get('name')
       
            user_entity = Users.objects.get(pk=request.user.pk)

            #creo el objeto
            inventario = InventariosTypes.objects.create(name = name, user = user_entity)
        

            messages.success(request, "La Categoría ha sido agregado con éxito!.")
            return redirect('inventarios-types-index')
    
        except IntegrityError as e:
            messages.error(request, str('Ya existe una Categoría con el nombre sugerido. Considere elegir un nombre alternativo!'))
            return render(request, 'configuration/inventarios_types/add.html', context)
        except Exception as e:
            messages.error(request, str(e))
            return render(request, 'configuration/inventarios_types/add.html', context)
  

    else:
    
        return render(request, 'configuration/inventarios_types/add.html', context)
    


@login_required
def editInventarioTypes(request, id):
    context = {}

    try:
        inventario = InventariosTypes.objects.get(pk = id)
        
        context.update({'inventario' : inventario})

        if (request.method == 'POST'):
           
            name = request.POST.get('name')
            inventario.name = name

            try:
                inventario.save()
                messages.success(request, "La categoría se ha editado con éxito")
                return redirect('inventarios-types-index')
                
            
            except IntegrityError as e:
                messages.error(request, str('Ya existe una Categoría con el nombre sugerido. Considere elegir un nombre alternativo!'))
                return HttpResponseRedirect(reverse("inventarios-types-edit", args=[id])) 
            except Exception as e:
                messages.error(request, str(e))

                return HttpResponseRedirect(reverse("inventarios-types-edit", args=[id]))          
          
        else:
            return render(request, 'configuration/inventarios_types/edit.html', context)
    
    except OSError as error: 
        print(error) 
    except Exception as e:
        messages.error(request, str(e))
        return redirect('inventarios-types-index')
    
@login_required
def deleteInventarioTypes(request, id):

    try:
        inventario = InventariosTypes.objects.get(pk=id)
        inventario.delete()
       
        messages.success(request, "La categoría ha sido eliminada.")
        return redirect('inventarios-types-index')

    except Usosrodales.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
    

  

 
   
