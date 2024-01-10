
var map = null;

function initGis(map_config)
{

    if (map_config != null){

        let options = {
            center: [map_config.center_x, map_config.center_y], 
            zoom: map_config.zoom,
            zoomDelta: 0.25,
            zoomSnap: 0,
            preferCanvas: map_config.renderer ? true : false,
        }

        if(map_config.min_zoom != null){
            options.minZoom = map_config.min_zoom;
        }

        if(map_config.max_zoom != null){
            options.maxZoom = map_config.max_zoom;
        }
       
        map = L.map('map', 
            options
        );
 
    
 
         //var map = L.map('map').setView([map_config.center_x, map_config.center_y], map_config.zoom);
 
         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
           maxZoom: 19,
           attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
         }).addTo(map);
 

    } else {

        let title = '¡Error al Cargar el Mapa!';
        let message = 'Se ha producido un error al cargar las configuraciones del Mapa, verifique y vuelva a ingresar.';
       
        modalError(null, title, message, URL_GO_TO.RODALES_INDEX);
      
    }


   
}