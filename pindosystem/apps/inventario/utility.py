

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