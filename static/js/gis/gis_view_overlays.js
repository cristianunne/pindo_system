
//Type controller is used to see a particular type of dara
function initGis(type_controller) {

    var map = new L.map('map');
 
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

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


    let overlays_geoJSON = L.geoJson(overlays, {
        style: styleOverlays
    });


    function styleOverlays(){

        let color_rand = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        return {
          fillColor: color_rand,
          weight: 0,
          opacity: 1,
          dashArray: '0',
          color: '#FFFFFFFF',
          fillOpacity: 1
      };
    }

    let overlayMaps = null;
    var overlaysLayers = L.layerGroup([overlays_geoJSON]);

    if(type_controller == 'Poda'){
        overlayMaps = {
            "poda" :  overlaysLayers
        }
    }
    

    rodal_gis_geoJSON.addTo(map);
    overlaysLayers.addTo(map);

    //console.log(geoJSON.getBounds());
    map.fitBounds(rodal_gis_geoJSON.getBounds());
  

    var layerControl = L.control.layers(null, overlayMaps).addTo(map);


    //var layerControl = L.control.layers(null, overlayMaps).addTo(map);
    //layerControl.addOverlay(overlaysLayers, type_controller);

   

}