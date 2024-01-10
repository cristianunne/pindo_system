

def get_ids_typesintervenciones_from_instances_rodales(rodales_instances):
    
    ids_inter_types = []
    for rod in rodales_instances:
            
            for inter in rod.rodales_planificacion_inter.all():

                if inter.intervenciones_types.pk not in ids_inter_types:

                    ids_inter_types.append(inter.intervenciones_types.pk)


    return ids_inter_types