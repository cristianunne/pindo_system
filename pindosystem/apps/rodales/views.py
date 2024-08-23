from django.shortcuts import render, redirect
from rodales.models import Rodales
from login.models import Users
from rodales_gis.models import Rodalesgis
from configuration.models import Usosrodales,IntervencionesTypes, CapasBases
from empresas.models import Empresas
from plantaciones.models import Plantaciones
from gis_pindo.models import Plantacionesgis, SobrevivenciaIntervenciongis, PodaIntervenciongis, RaleoIntervenciongis
from planificacion.models import PlanificacionIntervenciones

from rodales.utility import *

from configuration.serializers import CapasBasesSerializer


from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, Http404, HttpResponseRedirect
from django.contrib import messages
from django.db import IntegrityError
from django.urls import NoReverseMatch, reverse

from django.core.serializers import serialize
import json

from general_utility import getRodalesApiSap

from catastro.models import Catastrogis


# Create your views here.
@login_required
def index(request):
    rodales = Rodales.objects.prefetch_related('rodales_plantaciones').filter(is_finish = False) \
        .values('pk', 'name', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'is_finish', 'is_sap', 'created', 'usos_rodales__name', 
                'empresa__name', 'empresa__pk', 'user__first_name', 'user__last_name', 'rodales_plantaciones',
                'rodales_plantaciones__plantacion_plantaciongis').distinct('cod_sap')

    

    rodales_close = Rodales.objects.prefetch_related('rodales_plantaciones').filter(is_finish = True) \
        .values('pk', 'name', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'is_finish', 'is_sap', 'created', 'usos_rodales__name', 
                'empresa__name', 'empresa__pk', 'user__first_name', 'user__last_name', 'rodales_plantaciones',
                'rodales_plantaciones__plantacion_plantaciongis').distinct('cod_sap')

    context = {'rodales' : rodales, 
               'rodales_close' : rodales_close, 
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

    #proceso los rodales desde la api
    data_sap = getRodalesApiSap(request)

    if data_sap:
        
        rodales_sap = filterRodales(data_sap)
        #print(rodales_sap)
        context.update({'rodales_sap' : list(rodales_sap.items())})




    if request.method == 'POST':
        try:
        
            #cod_sap = request.POST.get('cod_sap')
            campo = request.POST.get('campo')
            certificado = request.POST.get('is_certificado')
            uso = request.POST.get('select-uso')
            empresa = request.POST.get('select-empresa')
            sap_id = request.POST.get('select-rodales')
           
            is_certificado = True if certificado == 'SI' else False
       
            user_entity = Users.objects.get(pk=request.user.pk)

            #creo el objeto
            uso_rodal = Usosrodales.objects.get(pk=uso)
            empresa_ent = Empresas.objects.get(pk=empresa)

            cod_sap = None

            for item in data_sap:
                 if(item['objnr'] == sap_id):
                      cod_sap = item['rodal']
                      break



            rodal = Rodales.objects.create(cod_sap=cod_sap, sap_id=sap_id, campo=campo, is_certificado=is_certificado, 
                                           usos_rodales=uso_rodal, user=user_entity, empresa=empresa_ent)
            
        

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
    


@login_required
def addRodalNoSap(request):
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
        
            #cod_sap = request.POST.get('cod_sap')
            campo = request.POST.get('campo')
            certificado = request.POST.get('is_certificado')
            uso = request.POST.get('select-uso')
            empresa = request.POST.get('select-empresa')
            name = request.POST.get('name')
           
            is_certificado = True if certificado == 'SI' else False
       
            user_entity = Users.objects.get(pk=request.user.pk)

            #creo el objeto
            uso_rodal = Usosrodales.objects.get(pk=uso)
            empresa_ent = Empresas.objects.get(pk=empresa)

            cod_sap = None


            rodal = Rodales.objects.create(name=name, campo=campo, is_certificado=is_certificado, 
                                           usos_rodales=uso_rodal, user=user_entity, empresa=empresa_ent, is_sap = False)
            
        

            messages.success(request, "El Rodal se ha creado con éxito!.")
            return redirect('rodales-index')
    
        except IntegrityError as e:
            #messages.error(request, str(e))
            messages.error(request, str('Ya existe un Rodal con el Código SAP sugerido!'))
            context.update({'campo' : campo,
                            'is_certificado' : certificado})
        
            return render(request, 'rodales/add_no_sap.html', context)
        except Exception as e:
            messages.error(request, str(e))
            return render(request, 'rodales/add_no_sap.html', context)

    else:
    
        return render(request, 'rodales/add_no_sap.html', context)

@login_required
def editRodal(request, id):

    context = {
            'category' : 'Rodales',
            'action' : 'Editar un Rodal'}
    
    try:
        #traigo el rodal
        rodal = Rodales.objects.get(pk = id)
        context.update({'rodal' : rodal})

        #proceso los rodales desde la api, puede generar un error si la red no esta conectada a SAP
        data_sap = getRodalesApiSap(request)


        if data_sap:
            
            rodales_sap = filterRodalesWithId(data_sap, rodal.sap_id)
            #print(rodales_sap)
            context.update({'rodales_sap' : list(rodales_sap.items())})



        usos_rodales = Usosrodales.objects.values_list("usosrodales_id", "name")
        context.update({'usos_rodales' : usos_rodales})

        #traigo las empresas
        empresas = Empresas.objects.values_list("empresas_id", "name")
        context.update({'empresas' : empresas})

     

        if (request.method == 'POST'):
            
            sap_id = request.POST.get('select-rodales')
            campo = request.POST.get('campo')
            certificado = request.POST.get('is_certificado')
            uso = request.POST.get('select-uso')
            empresa = request.POST.get('select-empresa')
           

            is_certificado = True if certificado == 'SI' else False
             #creo el objeto
            uso_rodal = Usosrodales.objects.get(pk=uso)
            empresa_ent = Empresas.objects.get(pk=empresa)


            cod_sap = None

            for item in data_sap:
                 if(item['objnr'] == sap_id):
                      cod_sap = item['rodal']
                      break


            rodal.sap_id = sap_id
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
    
    except TypeError as e:
         
        messages.error(request, str('Error con la conexion a SAP!'))
        return redirect('rodales-index')
         
    except Exception as e:
        messages.error(request, str(e))
        return redirect('rodales-index')
    
@login_required
def configurationRodal(request, id):

    context = {
            'category' : 'Rodales',
            'action' : 'Configuración del Rodal'}

    try:
        rodal = Rodales.objects.get(pk = id)
        rodales_gis = serialize('geojson', Rodalesgis.objects.filter(rodales=rodal), geometry_field='geom_4326')

        context.update({'rodales_gis' : rodales_gis})
        context.update({'rodal' : rodal})
     

        #traigo las plantaciones
        #plantaciones = Plantaciones.objects.filter(rodales = rodal)
        plantaciones_ids = list(Plantaciones.objects.filter(rodales=rodal).values_list('pk', flat=True))
        #print(plantaciones_ids)

        plantaciones_gis = serialize('geojson', Plantacionesgis.objects.all().filter(plantacion_id__in=plantaciones_ids), geometry_field='geom_4326')
        context.update({'plantaciones_gis' : plantaciones_gis})
        #print(plantaciones_gis)

        return render(request, 'rodales/configuration.html', context)
    
    except NoReverseMatch as e:
                messages.error(request, str(e))
                return redirect('rodales-index')

    except Exception as e:
                messages.error(request, str(e))
                return redirect('rodales-index')
                
    

@login_required
def viewRodales(request, idrodal):

    context = {
            'category' : 'Rodales',
            'action' : 'Ver Rodal'}

    try:
        rodal = Rodales.objects.get(pk = idrodal)
        rodaldata_ = Rodales.objects.filter(pk = idrodal)
        rodales_gis = serialize('geojson', Rodalesgis.objects.filter(rodales=rodal), geometry_field='geom_4326')

        context.update({'rodales_gis' : rodales_gis})
        context.update({'rodal' : rodal})


        #traigo las plantaciones
        #plantaciones = Plantaciones.objects.filter(rodales = rodal)
        plantaciones_ids = list(Plantaciones.objects.filter(rodales=rodal).values_list('pk', flat=True))
        #print(plantaciones_ids)

        plantaciones_gis = serialize('geojson', Plantacionesgis.objects.all().filter(plantacion_id__in=plantaciones_ids), geometry_field='geom_4326')
        context.update({'plantaciones_gis' : plantaciones_gis})
        #print(plantaciones_gis)

        rodaldata = serialize('json', rodaldata_)
        context.update({'rodaldata' : rodaldata})

        #recorro las intervenciones
       
        intervenciones = rodal.rodales_intervenciones.all()

        for inter in intervenciones:
            intervencion_gis = None
            if (inter.type == 'Sobrevivencia'):
                 
                intervencion_gis = serialize('geojson', SobrevivenciaIntervenciongis.objects.filter(intervencion_gis=inter.pk), geometry_field='geom_4326')
                context.update({'sobrevivencia_gis' : intervencion_gis})

            elif (inter.type == 'Poda'):
                 
                intervencion_gis = serialize('geojson', PodaIntervenciongis.objects.filter(intervencion_gis=inter.pk), geometry_field='geom_4326')
                context.update({'poda_gis' : intervencion_gis})
            
            elif (inter.type == 'Raleo'):
                 
                intervencion_gis = serialize('geojson', RaleoIntervenciongis.objects.filter(intervencion_gis=inter.pk), geometry_field='geom_4326')
                context.update({'raleo_gis' : intervencion_gis})
        
        
        #traigo los eventos
        planificacion = PlanificacionIntervenciones.objects.filter(rodales_id = idrodal)

        eventos_planificacion = serialize('json', planificacion, fields = ['title', 'date_start', 'date_end','status'])
        context.update({'eventos_planificacion' : eventos_planificacion})
        context.update({'name_rodal': rodal.cod_sap})

        #traigo las categorias presentes
        ids_inter_types = []

        for p in planificacion.all():
            ids_inter_types.append(p.intervenciones_types.pk)

    
        categorias_intervencion = serialize('json', IntervencionesTypes.objects.filter(pk__in = ids_inter_types), fields = ['name', 'color'])

        context.update({'categorias_intervencion' : categorias_intervencion})

        #taigo plantaciones
        resumen_intervenciones = get_stock_by_rodal(rodal)
        context.update({'res_intervenciones' : resumen_intervenciones})
       

        context.update({'resumen_intervenciones' :  json.dumps(resumen_intervenciones)})


        #traigo la inforacion catastral
        catastros_parcelas = Catastrogis.objects.filter(geom_4326__intersects = Rodalesgis.objects.get(rodales=rodal).geom_4326)


        context.update({'catastros' : catastros_parcelas})
    

        
        
    except Exception as e:
                messages.error(request, str(e))
                
    return render(request, 'rodales/view.html', context)

@login_required
def deleteRodal(request, idrodal):
    try:
        obj = Rodales.objects.get(pk=idrodal)
        obj.delete()
       
        messages.success(request, "El Rodal ha sido eliminado.")
        return redirect('rodales-index')

    except Rodales.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))

@login_required
def closeRodal(request, idrodal):
    try:
        obj = Rodales.objects.get(pk=idrodal)
        obj.is_finish = True
        obj.save()
       
        messages.success(request, "El Rodal ha sido cerrado.")
        return redirect('rodales-index')

    except Rodales.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))


@login_required
def openRodal(request, idrodal):
    try:
        obj = Rodales.objects.get(pk=idrodal)
        obj.is_finish = False
        obj.save()
       
        messages.success(request, "El Rodal ha sido cerrado.")
        return redirect('rodales-index')

    except Rodales.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))