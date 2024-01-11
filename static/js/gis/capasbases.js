


function createBaseMaps(basemap)
{

    //recorro la entidad y extraigo os atributos

    let attribution = basemap.attribution =! null ? basemap.attribution : null;
    let subdomains = basemap.subdomain != null ? basemap.subdomain.toString().split(',') : null;
    let minZoom = basemap.min_zoom != null ? basemap.min_zoom : null;
    let maxZoom = basemap.max_zoom =! null ? basemap.max_zoom : null;

    let options = {};

    if (attribution != null){
        options['attribution'] = attribution;
    }

    if (subdomains != null){
        options['subdomains'] = subdomains
    }

    if (minZoom != null){
        options['minZoom'] = minZoom
    }

    if (maxZoom != null){
        options['maxZoom'] = maxZoom
    }
    options['className'] = basemap.name



    let capa = L.tileLayer(basemap.urlservice, 
                   options
                );
    
    return capa;


}