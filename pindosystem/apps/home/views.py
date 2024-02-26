from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
   
    return render(request, 'home/index.html')

@login_required
def indexAdmin(request):
    return render(request, 'home/index_admin.html')
