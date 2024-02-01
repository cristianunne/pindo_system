
//Type controller is used to see a particular type of dara
function initGis(type_controller) {

    var map = new L.map('map', {
        zoomDelta: 0.25,
        zoomSnap: 0,
    });

    //Traigo los basemaps desde la base
    let basemaps = {};

    if (capasbases != null){

        //recorro las capas bases y agrego las opciones

        for (item of capasbases)
        {


            basemaps[item.name] = createBaseMaps(item);

            console.log(basemaps);
        }



    } else {

        //SI no hay capas cargadas, cargo estas por defecto

        let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

        let googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
                maxZoom: 20,
                subdomains:['mt0','mt1','mt2','mt3']
            });

        basemaps = {
            'Open Street Map' : osm,
            'Google Satellite' : googleSat
        }
    

    }
 
  
    


  
    let rodal_gis_geoJSON = L.geoJson(rodal_gis, {
      style: styleRodal
    });
   

    function styleRodal(){
        return {
          fillColor: '',
          weight: 4,
          opacity: 1,
          dashArray: '0',
          color: 'red',
          fillOpacity: 0
      };
    }


    let overlaysLayers = loadOverlays(type_controller);
    overlayMaps = null;

    if(overlaysLayers != null){
        if(type_controller == 'Poda'){
            overlayMaps = {
                "Poda" :  overlaysLayers
            }
        } else if (type_controller == 'Sobrevivencia'){
            overlayMaps = {
                "Sobrevivencia" :  overlaysLayers
            }
        } else if (type_controller == 'Raleo'){
            overlayMaps = {
                "Raleo" :  overlaysLayers
            }
        } else if (type_controller == 'Talaraza'){
            overlayMaps = {
                "Talaraza" :  overlaysLayers
            }
        }

    }

   
    rodal_gis_geoJSON.addTo(map);

    if(overlaysLayers != null){
        overlaysLayers.addTo(map);
    }
   

    console.log(geoJSON.getBounds());
    map.fitBounds(rodal_gis_geoJSON.getBounds());
  

    var layerControl = L.control.layers(basemaps, overlayMaps).addTo(map);


    //var layerControl = L.control.layers(null, overlayMaps).addTo(map);
    //layerControl.addOverlay(overlaysLayers, type_controller);

}


function loadOverlays(type_controller)
{

    if(overlays != null){

        for (item of overlays.features) {

            let color_ = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            item.properties = { ...item.properties, 'color': color_ };
    
        }
    
        let overlays_geoJSON = L.geoJson(overlays, {
            style: styleOverlays,
            onEachFeature: onEachFeature,
        });
    
    
        function styleOverlays(feature){
    
        
            return {
              fillColor: feature.properties.color,
              weight: 0,
              opacity: 1,
              dashArray: '0',
              color: '#FFFFFFFF',
              fillOpacity: 1
          };
        }
    
        function onEachFeature(feature, layer) {
    
            //agrego el ramdon color
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight
               
            });
        }
    
        function highlightFeature(e) {
            var layer = e.target;
    
            layer.setStyle({
                weight: 5,
                color: '#FFFF00',
                dashArray: '',
                fillOpacity: 0.7
            });
    
            layer.bringToFront();
    
            let title = null;
    
            if(type_controller == 'Poda'){
    
                title = "<h5 style='text-align: center; margin: 0 auto;'> Plantación: "  + layer.feature.properties.intervencion_gis.toString() + "</h5>"
               
            } else if (type_controller == 'Sobrevivencia'){
    
                title = "<h5 style='text-align: center; margin: 0 auto;'>"  + layer.feature.properties.name.toString() + "</h5>"
            
            } else if (type_controller == 'Raleo' ){
    
                title = "<h5 style='text-align: center; margin: 0 auto;'>Raleo: "  + layer.feature.properties.intervencion_gis.toString() + "</h5>"
            } else if (type_controller == 'Talaraza' ){
    
                title = "<h5 style='text-align: center; margin: 0 auto;'>Talaraza: "  + layer.feature.properties.intervencion_gis.toString() + "</h5>"
            }
    
    
            
    
            layer.bindTooltip(title, {
                direction: 'top',
                permanent: false,
                sticky: false,
                offset: [10, 0],
                opacity: 0.75,
                className: 'leaflet-tooltip'
            }).openTooltip();
        }
    
        function resetHighlight(e) {
            overlays_geoJSON.resetStyle(e.target);
        }
    
    
        let overlayMaps = null;
        var overlaysLayers = L.layerGroup([overlays_geoJSON]);
    
    
        return overlaysLayers;

    }

    return null;

   
}


