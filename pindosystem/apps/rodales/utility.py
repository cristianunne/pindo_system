from plantaciones.models import Plantaciones
from rodales_gis.models import Rodalesgis



def get_stock_by_rodal(rodal):

    #trae la plantacion y el total de arboles
    #descuenta del total los relevamientos de sobrevivencia
    plantacion = Plantaciones.objects.filter(rodales = rodal).all()

    data = []

    total_arboles = 0
    superficie = 0
    plantacion_sup = 0

    for p in plantacion:
        total_arboles = total_arboles + p.arboles_plantados
        plantacion_sup = plantacion_sup + p.superficie
    
  
    data.append({'name' : 'total_arboles', 'category' : 'plantacion', 'value' : total_arboles, 
                 "porcentaje" : 100, 'color' : '#ff0000', 'superficie' : plantacion_sup, 'porc_superficie' : 100});

    #traigo los relevamientos de sobrevivencia
    sobrevivencia_arboles = 0
    total_arboles_aux = total_arboles
    disponible = 100
    sup_disponible = 100


    intervenciones = rodal.rodales_intervenciones.all()

    for inter in intervenciones:
        if (inter.type == 'Sobrevivencia'):
         
            sob = inter.sobrevivencia_intervencion

            type_inter = inter.intervenciones_types.color
          
            porcentaje = 100 - sob.sobrevivencia
            sobrevivencia_arboles = round(((total_arboles_aux * porcentaje) / 100))
            total_arboles_aux = total_arboles_aux - round(((total_arboles_aux * porcentaje) / 100))


            

            data.append({'name': str(inter.name), 'category' : 'sobrevivencia', 
                                             'value' : sobrevivencia_arboles, 
                                             "porcentaje" : (sobrevivencia_arboles * 100 / total_arboles), 
                                             'color' : inter.intervenciones_types.color, 'superficie' : inter.superficie, 
                                             'porc_superficie' : (inter.superficie * 100 / plantacion_sup)})
            disponible = disponible -  (sobrevivencia_arboles * 100 / total_arboles)
            superficie = superficie + inter.superficie

        elif (inter.type == 'Raleo'):
            raleo = inter.raleo_intervencion
            type_inter = inter.intervenciones_types.color

            #descuento arboles del stock
            total_arboles_aux = total_arboles_aux - raleo.arboles_extraidos

            data.append({'name': str(inter.name), 'category' : 'Raleo', 
                                             'value' : raleo.arboles_extraidos, 
                                             "porcentaje" : raleo.porc_removido, 
                                             'color' : inter.intervenciones_types.color, 'superficie' : inter.superficie, 
                                              'porc_superficie' : (inter.superficie * 100 / plantacion_sup)})
            
            disponible = disponible -  raleo.porc_removido
            superficie = superficie + inter.superficie
            sup_disponible = sup_disponible - (inter.superficie * 100 / plantacion_sup)
        
        elif (inter.type == 'Talaraza'):
            talaraza = inter.talaraza_intervencion
            type_inter = inter.intervenciones_types.color

            #descuento arboles del stock
            total_arboles_aux = total_arboles_aux - talaraza.arboles_extraidos

            data.append({'name': str(inter.name), 'category' : 'Talaraza', 
                                             'value' : talaraza.arboles_extraidos, 
                                             "porcentaje" : talaraza.porc_removido, 
                                             'color' : inter.intervenciones_types.color, 'superficie' : inter.superficie, 
                                              'porc_superficie' : (inter.superficie * 100 / plantacion_sup)})
            
            disponible = disponible -  talaraza.porc_removido
            superficie = superficie + inter.superficie
            sup_disponible = sup_disponible - (inter.superficie * 100 / plantacion_sup)



    data.append({'name' : 'Disponible', 'category' : 'disponible', 'value' : total_arboles_aux, 
                 "porcentaje" : disponible, 'color' : '#0ca678', 'superficie' : (plantacion_sup - superficie), 
                 'porc_superficie' : sup_disponible});

    return data


def get_rodales_with_gis():

   
    data = []

    rodales_gis = Rodalesgis.objects.all()

    for rod in rodales_gis:
        data.append(rod.rodales.pk)

    return data
