


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

function loadBaseMaps(basemap_serializer)
{

    if(basemap_serializer != null){

        let basemaps_object = {};
        basemap_serializer.forEach(element => {

            //creo la capa
            let capa_b = createBaseMaps(element);

            //agrego la capa base default al mapa
            if (element.default == true) {

                capa_b.addTo(map);

            }
            basemaps_object[`${element.name}`] = capa_b;
            
        });
        

        L.control.layers(basemaps_object, null).addTo(map);

    } else {
        //mensaje de error
        Toastify({
            text: "Error al cargar las Capas Bases. Verifique las configuraciones.",
            duration: 4500,
            newWindow: true,
            gravity: "bottom", 
            position: 'right',
            style: {
                background: COLORS.DANGER,
              }
        }).showToast();
    }

    

}