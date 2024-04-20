import json
import requests
from django.contrib import messages

API_URL = 'http://localhost/sap_api/API/'

ULRS = {
    'getEmpresas' : API_URL + 'getEmpresas',
    'getRodales' : API_URL + 'getRodales',
    'getEmsefors' :API_URL + 'getEmsefors',
    'getMateriales' : API_URL + 'getMateriales',
}


def getEmpresasApiSap(request):
    
    try:
        headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}
        data_response = requests.get(ULRS['getEmpresas'], headers=headers).json()

        return data_response
    
    except Exception as e:
        messages.error(request, str(e))
        return False


def getRodalesApiSap(request):

    try:
        headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}
        data_response = requests.get(ULRS['getRodales'], headers=headers).json()

        return data_response

    except Exception as e:
        messages.error(request, str(e))
        return False
    

def getEmseforsApiSap(request):
    try:
        headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}
        data_response = requests.get(ULRS['getEmsefors'], headers=headers).json()

        return data_response

    except Exception as e:
        messages.error(request, str(e))
        return False

def getMaterialessApiSap(request):
    try:
        headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}
        data_response = requests.get(ULRS['getMateriales'], headers=headers).json()

        return data_response

    except Exception as e:
        messages.error(request, str(e))
        return False