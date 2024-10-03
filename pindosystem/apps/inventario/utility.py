
import openpyxl
from rodales.models import Rodales


names_sheets_excel_tradicional = [
    'inventario_base'
]


def calculate_general_resumen_poda(data_resumen):

    n_arb_ha = 0
    arboles_podados = 0
    arb_h_deseada = 0
    arb_no_podados = 0
    dap = 0
    h_total = 0
    h_poda = 0
    dmsm = 0
    area_basal = 0
    proc_rem = 0

    n_arb_ha_index = 0
    arboles_podados_index = 0
    arb_h_deseada_index = 0
    arb_no_podados_index = 0
    dap_index = 0
    h_total_index = 0
    h_poda_index = 0
    dmsm_index = 0
    area_basal_index = 0
    proc_rem_index = 0

    for data in data_resumen:

      
        
        if data['n_arb_ha'] is not None:
            if data['n_arb_ha'] > 0:
                n_arb_ha = n_arb_ha + data['n_arb_ha']
                n_arb_ha_index = n_arb_ha_index + 1

        if data['arboles_podados'] is not None:
            if data['arboles_podados'] > 0:
                arboles_podados = arboles_podados + data['arboles_podados']
                arboles_podados_index = arboles_podados_index + 1
        
        if data['arb_h_deseada'] is not None:
            if data['arb_h_deseada'] > 0:
                arb_h_deseada = arb_h_deseada + data['arb_h_deseada']
                arb_h_deseada_index = arb_h_deseada_index + 1
        
        if data['arb_no_podados'] is not None:
            if data['arb_no_podados'] > 0:
                arb_no_podados = arb_no_podados + data['arb_no_podados']
                arb_no_podados_index = arb_no_podados_index + 1
        
        if data['dap_'] is not None:
            if data['dap_'] > 0:
                dap = dap + data['dap_']
                dap_index = dap_index + 1
        
        if data['h_total_'] is not None:
            if data['h_total_'] > 0:
                h_total = h_total + data['h_total_']
                h_total_index = h_total_index + 1
        
        if data['h_poda_'] is not None:
            if data['h_poda_'] > 0:
                h_poda = h_poda + data['h_poda_']
                h_poda_index = h_poda_index + 1
        
        if data['dmsm_'] is not None:
            if data['dmsm_'] > 0:
                dmsm = dmsm + data['dmsm_']
                dmsm_index = dmsm_index + 1
        
        if data['area_basal'] is not None:
            if data['area_basal'] > 0:
                area_basal = area_basal + data['area_basal']
                area_basal_index = area_basal_index + 1
        
        if data['porc_remo'] is not None:
            if data['porc_remo'] > 0:
                proc_rem = proc_rem + data['porc_remo']
                proc_rem_index = proc_rem_index + 1

    
    #controlo la / por 0
    result = [{
        'n_arb_ha' : n_arb_ha / n_arb_ha_index if n_arb_ha_index > 0 else None,
        'arboles_podados' : arboles_podados / arboles_podados_index if arboles_podados_index > 0 else None,
        'arb_h_deseada' : arb_h_deseada / arb_h_deseada_index if arb_h_deseada_index > 0 else None,
        'arb_no_podados': arb_no_podados / arb_no_podados_index if arb_no_podados_index > 0 else None,
        'dap' : dap / dap_index if dap_index > 0 else None,
        'h_total' : h_total / h_total_index if h_total_index > 0 else None,
        'h_poda' : h_poda / h_poda_index if h_poda_index > 0 else None,
        'dmsm' : dmsm / dmsm_index if dmsm_index > 0 else None,
        'area_basal' : area_basal / area_basal_index if area_basal_index > 0 else None,
        'porc_rem' : proc_rem / proc_rem_index if proc_rem_index > 0 else None,


    }]
    return result



def process_excel_tradicional(excel_file):
    wb = openpyxl.load_workbook(excel_file)
  
    worksheet = wb.get_sheet_by_name(names_sheets_excel_tradicional[0])
    excel_data = list()
    # iterating over the rows and
    # getting value from each cell in row

    data_trad_list = []
    
    saps_rodales_idxs = []

    index = 0

    #empresa	rodal	fecha	num_arb	dap	h	area_basal	vmi_t	vmi_c	vol_comercial	total	ima

    for row in worksheet.iter_rows():
        
        if index > 0:

            #cargo todos los codigos SAPS
            saps_rodales_idxs.append(row[1].value)

            data_trad_list.append(
                {
                    'empresa' : row[0].value,
                    'rodal' : row[1].value,
                    'fecha' : row[2].value,
                    'num_arb' : row[3].value,
                    'dap' : row[4].value,
                    'h' : row[5].value,
                    'area_basal' : row[6].value,
                    'vmi_t' : row[7].value,
                    'vmi_c' : row[8].value,
                    'vol_comercial' : row[9].value,
                    'total' : row[10].value,
                    'ima' : row[11].value,

                }
            )
        else:
            index = index + 1

    rodales_present = get_rodales_by_sap(saps_rodales_idxs)
   

    for data in data_trad_list:

        is_present = False
        pk_rodal = None

        #recorro los rodales
        for rod in rodales_present:

            if data['rodal'] == rod.cod_sap:
                is_present = True
                pk_rodal = rod.pk

        data.update({'is_present' : is_present})
        data.update({'rodal_pk' : pk_rodal})
   
    
    return data_trad_list
 


def get_rodales_by_sap(idx_saps):
    
    rodales = Rodales.objects.filter(cod_sap__in = idx_saps)
    
    return rodales