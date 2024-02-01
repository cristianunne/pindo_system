

function createLayerWMS(id_layer, layer, url_service)
{

    //console.log(layer);

    let url = url_service;

    //let url = 'http://localhost:8080/geoserver/gwc/service/wms';
    /*let options = {
        layers : 'ne:countries',
        format : 'image/jpeg',
        transparent : true,
        version : '1.1.0',
        minZoom: 0,
        maxZoom: 18,
        zIndex: 10

    }*/

    let layers = layer.layer_name =! null ? layer.layer_name : null;
    let styles = layer.styles =! null ? layer.styles : null;
    let transparent = layer.transparent =! null ? layer.transparent : null;
    let format = layer.format =! null ? layer.format : null;
    let version = layer.version =! null ? layer.version : null;
    let minZoom = layer.min_zoom =! null ? layer.min_zoom : null;
    let maxZoom = layer.max_zoom =! null ? layer.max_zoom : null;
    let opacity = layer.opacity =! null ? layer.opacity : null;
    let attribution = layer.attribution =! null ? layer.attribution : null;
    let tiles_size = layer.tiles_size =! null ? layer.tiles_size : null;
    let uppercase = layer.uppercase =! null ? layer.uppercase : null;
   


    let options = {};

    if (layers != null){
        options['layers'] = layers;
    }

    if (styles != null){
        options['styles'] = styles;
    }

    if (transparent != null){
        options['transparent'] = transparent;
    }

    if (format != null){
        options['format'] = format;
    }

    if (version != null){
        options['version'] = version;
    }

    if (minZoom != null){
        options['minZoom'] = minZoom;
    }

    if (maxZoom != null){
        options['maxZoom'] = maxZoom;
    }

    if (opacity != null){
        options['opacity'] = opacity;
    }

    if (attribution != null){
        options['attribution'] = attribution;
    }

    if (tiles_size != null){
        options['tileSize'] = tiles_size;
    }

    if (uppercase != null){
        options['uppercase'] = uppercase;
    }

    options['zIndex'] = 1;

    options['idlayer'] = parseInt(id_layer);
    options['type_layer'] = TYPE_LAYERS.WMS;

    return L.tileLayer.wms(url, options);

}


async function activeLayerWMS(element)
{

    url_service = element.getAttribute('servicio-url');
    id_layer = element.getAttribute('overlay-id');

    if (element.classList.contains('item-active')) {
        element.classList.remove('item-active')
  
        removeLayerOverlay(id_layer, TYPE_LAYERS.WMS);

  
      
      } else {
        element.classList.add('item-active')
  
        //agrego la capa al mapa
        //loadRodalesToMap(element, rodal_id);

         //obtengo los datos de la capa
        const layer = await getLayerWMS(id_layer);

        let layer_wms = createLayerWMS(id_layer, layer, url_service);

        //console.log(layer_wms);
        
        layer_wms.addTo(map);
        layer_wms.bringToFront()

        Toastify({
            text: "La Capa se ha agregado al Mapa",
            duration: 4500,
            newWindow: true,
            gravity: "bottom", 
            position: 'right',
            style: {
                background: COLORS.SUCCESS,
              }
        }).showToast();
  
  
      }





   



}