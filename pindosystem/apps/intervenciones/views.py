from django.shortcuts import render, redirect
from intervenciones.models import Intervenciones, PodaIntervencion
from rodales.models import Rodales
from emsefor.models import Emsefor
from login.models import Users
from gis_pindo.models import PodaIntervenciongis
from rodales_gis.models import Rodalesgis

from django.contrib import messages
from django.http import JsonResponse, Http404, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt

from django.db import transaction

from intervenciones.models import INTERVENCIONES_DICT

# Create your views here.
@login_required
def indexIntervencion(request, idrodal):
    intervenciones = Intervenciones.objects.all()

    context = {'intervenciones' : intervenciones, 
               'category' : 'Intervenciones',
                'action' : 'Administración de Intervenciones'}
    
    context.update({'idrodal' : idrodal})

    try:
        rodal = Rodales.objects.get(pk=idrodal)
        context.update({'rodal' : rodal})


        return render(request, 'intervenciones/index.html', context)


    except Rodales.DoesNotExist:
        #messages.error(request, str('No existe el registro solicitado. Intente nuevamente!'))
        #return HttpResponseRedirect(reverse("rodales-config", args=[id]))
        return HttpResponseRedirect(reverse("rodales-config", args=[idrodal]))
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("rodales-config", args=[idrodal]))

   


@login_required
def addIntervencionPoda(request, idrodal):
    context = {'category' : 'Intervenciones',
                'action' : 'Administración de Intervenciones / Agregar Poda'}
    context.update({'idrodal' : idrodal})
    try:
        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})

        type_intervencion = INTERVENCIONES_DICT['Poda']

        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})

        if request.method == 'POST':
            fecha = request.POST.get('fecha')
            superficie = request.POST.get('superficie')
            arb_podados = request.POST.get('arb_podados')
            arb_no_podados = request.POST.get('arb_no_podados')
            alt_deseada = request.POST.get('alt_deseada')
            alt_poda = request.POST.get('alt_poda')
            dap = request.POST.get('dap')
            altura = request.POST.get('altura')
            dmsm = request.POST.get('dmsm')
            area_basal = request.POST.get('area_basal')
            porc_removido = request.POST.get('porc_removido')

            emsefor = request.POST.get('select-emsefor')

            #traigo las entidades
            rodal_ent = Rodales.objects.get(pk = idrodal)
            emsefor_ent = Emsefor.objects.get(pk = emsefor)
            user_entity = Users.objects.get(pk=request.user.pk)

            try:
                with transaction.atomic():
                    intervencion = Intervenciones.objects.create(rodales=rodal_ent, fecha=fecha, type=type_intervencion, superficie=superficie,
                                                                 users=user_entity, emsefors=emsefor_ent)
                    
                    poda_intervencion = PodaIntervencion.objects.create(intervenciones=intervencion, arb_podados=arb_podados, arb_no_podados=arb_no_podados, 
                                                                        alt_deseada=alt_deseada, alt_poda=alt_poda, dap=dap, altura=altura, dmsm=dmsm, 
                                                                        area_basal=area_basal, porc_removido=porc_removido)
                    
                    messages.success(request, "La Poda se ha creado con éxito!.")
                    return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))


            except Exception as e:
                messages.error(request, str(e))
                return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
     

       
        return render(request, 'intervenciones/poda/add.html', context)
    
    except Rodales.DoesNotExist:
        #messages.error(request, str('No existe el registro solicitado. Intente nuevamente!'))
        #return HttpResponseRedirect(reverse("rodales-config", args=[id]))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    except Emsefor.DoesNotExist:
        #messages.error(request, str('No existe el registro solicitado. Intente nuevamente!'))
        #return HttpResponseRedirect(reverse("rodales-config", args=[id]))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
   
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    
@login_required
def editIntervencionPoda(request, idpoda):

    context = {'category' : 'Intervenciones',
                'action' : 'Administración de Intervenciones / Agregar Poda'}
    context.update({'idpoda' : idpoda})

    try:
        poda = Intervenciones.objects.get(pk=idpoda)
        idrodal = poda.rodales.rodales_id

        context.update({'poda' : poda})
        context.update({'idrodal' : idrodal})

        rodales = Rodales.objects.values_list("rodales_id", "cod_sap").filter(rodales_id = idrodal)
        context.update({'rodales' : rodales})

        emsefors = Emsefor.objects.values_list("emsefor_id", "name")
        context.update({'emsefors' : emsefors})

        if request.method == 'POST':
            fecha = request.POST.get('fecha')
            superficie = request.POST.get('superficie')
            arb_podados = request.POST.get('arb_podados')
            arb_no_podados = request.POST.get('arb_no_podados')
            alt_deseada = request.POST.get('alt_deseada')
            alt_poda = request.POST.get('alt_poda')
            dap = request.POST.get('dap')
            altura = request.POST.get('altura')
            dmsm = request.POST.get('dmsm')
            area_basal = request.POST.get('area_basal')
            porc_removido = request.POST.get('porc_removido')

            emsefor = request.POST.get('select-emsefor')

            #traigo las entidades
            emsefor_ent = Emsefor.objects.get(pk = emsefor)
            user_entity = Users.objects.get(pk=request.user.pk)


            try:
                with transaction.atomic():

                    poda.fecha = fecha
                    poda.superficie = superficie
                    poda.emsefors = emsefor_ent
                    poda.users = user_entity
                    poda.poda_intervencion.arb_podados = arb_podados
                    poda.poda_intervencion.arb_no_podados = arb_no_podados
                    poda.poda_intervencion.alt_deseada = alt_deseada
                    poda.poda_intervencion.alt_poda = alt_poda
                    poda.poda_intervencion.dap = dap
                    poda.poda_intervencion.altura = altura
                    poda.poda_intervencion.dmsm = dmsm
                    poda.poda_intervencion.area_basal = area_basal
                    poda.poda_intervencion.porc_removido = porc_removido
                   
                    poda.save()
                    poda.poda_intervencion.save()
                    messages.success(request, "La Poda se ha editado con éxito")
                    return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))   
                
            except Exception as e:
                messages.error(request, str(e))

                    #paso un mensaje de error user-add
                    #return redirect('user-add', context)
                #return render(request, 'users/edit.html', context)
                return HttpResponseRedirect(reverse("intervenciones-poda-edit", args=[idpoda]))    
          



        return render(request, 'intervenciones/poda/edit.html', context)

    except Intervenciones.DoesNotExist:
        messages.error(request, str('Error al traer la Intervención. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    except Rodales.DoesNotExist:
        messages.error(request, str('Error al traer el Rodal. Intente nuevamente!'))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    except Exception as e:
       
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))
    
@login_required
def viewIntervencionPoda(request, idpoda):
    context = {'category' : 'Intervenciones',
                    'action' : 'Ver Poda'}

    try:
        poda = Intervenciones.objects.get(pk=idpoda)
        idrodal = poda.rodales.pk

        #poda2 = Intervenciones.objects.get(pk=idpoda)

        #print(poda2.poda_intervencion_gis.all())
        

        context.update({'poda' : poda})

        #traigo el rodal gis
        poda_gis = serialize('geojson', PodaIntervenciongis.objects.filter(intervencion_gis=poda), geometry_field='geom_4326')
        poda_count = len(PodaIntervenciongis.objects.filter(intervencion_gis=poda)) 

          #paso el msj 
        if poda_count == 0:
            messages.error(request, str('No se ha asignado el Polígono a la Intervención. Utilice un Software SIG para cargar la información.'))
           

        else:
            context.update({'poda_gis' : poda_gis})
        
        rodales_gis = serialize('geojson', Rodalesgis.objects.filter(rodales=poda.rodales), geometry_field='geom_4326')

        context.update({'rodales_gis' : rodales_gis})
       

        return render(request, 'intervenciones/poda/view.html', context)

    
    except Intervenciones.DoesNotExist:
        messages.error(request, str('Error al traer los datos de la Intervención'))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    
    except Exception as e:
        messages.error(request, str(e))
        return HttpResponseRedirect(reverse('intervenciones-index', args=[idrodal]))
    

@login_required
@csrf_exempt
def deleteIntervencionPoda(request, idpoda):
    try:
        obj = Intervenciones.objects.get(pk=idpoda)
        idrodal = obj.rodales.pk

        #traigo el id del rodal

        obj.delete()

        messages.success(request, "La Poda se ha eliminada con éxito")
        return HttpResponseRedirect(reverse("intervenciones-index", args=[idrodal]))       
       
       
    except Intervenciones.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))
