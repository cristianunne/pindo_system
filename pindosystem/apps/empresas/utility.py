
from empresas.models import Empresas


"""
    Metodo que filtra los rodales ya cargados
"""
def filterEmpresas(lista_empresas):
    
    empresa_sap = {}
    #traigo las empresas
    empresas = Empresas.objects.all()

    for emp in lista_empresas:

        exists = False

        for emp_local in empresas:
            
            if emp['idempresa'] == emp_local.sap_id:
                exists = True

        if (exists == False):

            empresa_sap[emp['idempresa']] = emp['nombre']

    return empresa_sap


def filterEmpresasWithId(lista_empresas, empresa_id):
    
    empresa_sap = {}
    #traigo las empresas
    empresas = Empresas.objects.all()

    for emp in lista_empresas:

        exists = False

        for emp_local in empresas:
            
            if emp['idempresa'] == emp_local.sap_id and emp['idempresa'] != empresa_id:
                exists = True

        if (exists == False):

            empresa_sap[emp['idempresa']] = emp['nombre']

    return empresa_sap
        

