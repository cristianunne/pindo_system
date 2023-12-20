
function initGis() {

    var map = new L.map('map');
 
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let geoJSON = L.geoJson(misiones_, {
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
    
    //agrego la plantacion

    let plantacion_geoJSON = L.geoJson(plantacion, {
        style: stylePlantacion
    });


    function stylePlantacion(){

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

    plantacion_geoJSON.addTo(map);

    geoJSON.addTo(map);
    //console.log(geoJSON.getBounds());
    map.fitBounds(geoJSON.getBounds());

    var overlaysLayers = L.layerGroup([plantacion_geoJSON]);
    var layerControl = L.control.layers(null, null).addTo(map);
    layerControl.addOverlay(overlaysLayers, "Plantación");

};


