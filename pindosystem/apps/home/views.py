from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
   
    print('request.user.role')
    print(request.user.get_username())
    return render(request, 'home/index.html')

@login_required
def indexAdmin(request):

    
    context = {
            'user' : request.user}
    
    return render(request, 'home/index_admin.html', context=context)
