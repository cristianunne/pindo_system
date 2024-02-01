
from configuration.models import CapasBases, CapasBasesDefault


def CapasBasesSerializer():

    data = []

    capasbases = CapasBases.objects.filter(active=True)

    for capa in capasbases:

        data.append({
            'capabase_id' : capa.pk,
            'name' : capa.name,
            'attribution' : capa.attribution,
            'urlservice' : capa.urlservice,
            'subdomain' : capa.subdomain,
            'min_zoom' : capa.min_zoom,
            'max_zoom' : capa.max_zoom,
            'format' : capa.format,
            'time' : capa.time,
            'tilematrixset' : capa.tilematrixset,
            'opacity' : capa.opacity,

        })

    return data


def CapasBasesWithDefaultSerializer():

    data = []

    capasbases = CapasBases.objects.filter(active=True)
    capabasedefault = CapasBasesDefault.objects.first()

    for capa in capasbases:

        if capa.pk == capabasedefault.capabase.pk:
            data.append({
            'capabase_id' : capa.pk,
            'name' : capa.name,
            'attribution' : capa.attribution,
            'urlservice' : capa.urlservice,
            'subdomain' : capa.subdomain,
            'min_zoom' : capa.min_zoom,
            'max_zoom' : capa.max_zoom,
            'format' : capa.format,
            'time' : capa.time,
            'tilematrixset' : capa.tilematrixset,
            'opacity' : capa.opacity, 
            'default' : True })

        else :
            data.append({
            'capabase_id' : capa.pk,
            'name' : capa.name,
            'attribution' : capa.attribution,
            'urlservice' : capa.urlservice,
            'subdomain' : capa.subdomain,
            'min_zoom' : capa.min_zoom,
            'max_zoom' : capa.max_zoom,
            'format' : capa.format,
            'time' : capa.time,
            'tilematrixset' : capa.tilematrixset,
            'opacity' : capa.opacity, 
            'default' : False })


      

    return data

def CapasBasesByDefaultSerializer(capabasedefault_instance):

    data = []

    if capabasedefault_instance != None:

        capasbases = CapasBases.objects.filter(pk=capabasedefault_instance.capabase.pk)

        for capa in capasbases:

            data.append({
                'capabase_id' : capa.pk,
                'name' : capa.name,
                'attribution' : capa.attribution,
                'urlservice' : capa.urlservice,
                'subdomain' : capa.subdomain,
                'min_zoom' : capa.min_zoom,
                'max_zoom' : capa.max_zoom,
                'format' : capa.format,
                'time' : capa.time,
                'tilematrixset' : capa.tilematrixset,
                'opacity' : capa.opacity,

            })

    return data