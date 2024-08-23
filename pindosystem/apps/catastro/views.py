from django.shortcuts import render, redirect
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.http import Http404

from catastro.models import Catastrogis
from rodales_gis.models import Rodalesgis, RodalesState
from rodales.models import Rodales
from empresas.models import Empresas

from django.core.serializers import serialize

import json
from django.core.serializers.json import DjangoJSONEncoder

# Create your views here.

def index(request):
    
    catastros = Catastrogis.objects.all().order_by('pk')

    context = {'catastros' : catastros, 
               'category' : 'Catastros',
                'action' : 'Administración de Catastros'}
    

    return render(request, 'catastro/index.html', context)


def view(request, idcatastro):

    context = {'category' : 'Catastros',
                'action' : 'Administración de Catastros'}
    
    try:
        
        catastro = Catastrogis.objects.get(pk=idcatastro)

        context.update({
            'catastro' : catastro
        })


        rodales = Rodales.objects.prefetch_related('rodales_plantaciones')\
            .filter(is_finish = False, rodales_rodales_gis__geom_4326__intersects = catastro.geom_4326) \
        .values('pk', 'name', 'cod_sap', 'sap_id', 'campo', 'is_certificado', 'is_finish', 'is_sap', 'created', 'usos_rodales__name', 
                'empresa__name', 'empresa__pk', 'user__first_name', 'user__last_name', 'rodales_plantaciones',
                'rodales_plantaciones__plantacion_plantaciongis').distinct('cod_sap')

        
        context.update({
            'rodales' : rodales
        });

        #Rodalesgis.objects.filter(geom_4326__intersects = catastro.geom_4326)
        #traigo el catastro gis
        catastro_gis = serialize('geojson', Catastrogis.objects
                                     .filter(geom_4326__intersects = catastro.geom_4326), 
                                     geometry_field='geom_4326' )
        
        
        catastro_count = len(catastro_gis)

        context.update({'catastro_gis' : catastro_gis})

        #traigo los rodales usando rodales_state

        ids_rodales = []

        for rod in rodales:
           
            ids_rodales.append(rod['pk'])


        rodales_state_gis = serialize('geojson', RodalesState.objects
                                     .filter(rodales_id__in = ids_rodales), 
                                     geometry_field='geom_4326' )

        context.update({'rodales_state_gis' : rodales_state_gis})
        #print(list(rodales))


        rodal_ser = json.dumps(list(rodales), cls=DjangoJSONEncoder)

        #rodal_ser = serialize('json', rodales, many=True)
  
        context.update({'rodales_data' : rodal_ser})
      
      
       

    except Catastrogis.DoesNotExist as e:
        messages.error(request, str(e))
        return redirect('catastros-index')
    
    except Exception as e:

        messages.error(request, str(e))
        return redirect('catastros-index')
    
    return render(request, 'catastro/view.html', context)


def edit(request, idcatastro):
    
    context = {'category' : 'Catastros',
                'action' : 'Administración de Catastros'}
    
    try:
        
        catastro = Catastrogis.objects.get(pk=idcatastro)

        #traigo las empresas
        empresas = Empresas.objects.all().values_list('pk', 'name')
        

        context.update({
            'catastro' : catastro,
            'empresas' : empresas
        })

        if request.method == 'POST':

            idempresa = request.POST.get('select-empresa')
            superficie = request.POST.get('superficie')
            lote = request.POST.get('lote')
            parcela = request.POST.get('parcela')
            partida = request.POST.get('partida')
            matricula = request.POST.get('matricula')
            seccion = request.POST.get('seccion')
            municipio = request.POST.get('municipio')
            departamento = request.POST.get('departamento')
            certificado = request.POST.get('certificado')
            superficie_empresa = request.POST.get('superficie_empresa')
            trat_especial = request.POST.get('trat_especial')
            observaciones = request.POST.get('observaciones')

           

            empresa_object = None
            #traigo la empresa
            if idempresa is not None:
                empresa_object = Empresas.objects.get(pk=idempresa)
            
            if empresa_object is not None:
                catastro.empresa = empresa_object
            
            catastro.superficie = superficie
            catastro.lote = lote
            catastro.parcela = parcela
            catastro.partida = partida
            catastro.matricula = matricula
            catastro.seccion = seccion
            catastro.municipio = municipio
            catastro.departamento = departamento
            catastro.certificado = True if str(certificado) == 'SI' else False
            catastro.superficie_empresa = superficie_empresa
            catastro.trat_especial = trat_especial
            catastro.observaciones = observaciones

            try:
                catastro.save()
                messages.success(request, "El Catastro se ha editado con éxito")

                return redirect('catastros-index')

            except Exception as e:
                messages.error(request, str(e))
                return render(request, 'catastros/edit.html', context)



        return render(request, 'catastro/edit.html', context)
    
    except Catastrogis.DoesNotExist as e:
        messages.error(request, str(e))
        return redirect('catastros-index')
    
    except Exception as e:

        messages.error(request, str(e))
        return redirect('catastros-index')
    

@login_required
@csrf_exempt
def deleteParcela(request, id):

    try:
        obj = Catastrogis.objects.get(pk=id)
        obj.delete()
       
        messages.success(request, "La Parcela ha sido eliminada.")
        return redirect('catastros-index')

    except Catastrogis.DoesNotExist:
        raise Http404("error")
    except Exception as e:
        raise Http404(str(e))