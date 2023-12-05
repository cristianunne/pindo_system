from django.shortcuts import render
from maquinas.models import Maquinas

# Create your views here.

def index(request):

    maquinas = Maquinas.objects.all()

    context = {'maquinas' : maquinas, 
               'category' : 'Maquinas',
                'action' : 'Administración de Maquinas'}

    return render(request, 'maquinas/index.html', context)



def addSagpyas(request):

    
    return render(request, 'maquinas/add.html')
