
from configuration.models import CapasBases


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

def CapasBasesByDefaultSerializer(capabasedefault_instance):

    data = []

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