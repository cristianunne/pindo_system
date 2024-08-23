
function initGis() {

    var map = new L.map('map');


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);




    function styleRodal() {
        return {
            fillColor: '#ee0000',
            weight: 4,
            opacity: 1,
            dashArray: '0',
            color: 'red',
            fillOpacity: 0.5
        };
    }

    //agrego la plantacion

    let catastro_geoJSON = L.geoJson(catastro, {
        style: styleRodal
    });







    catastro_geoJSON.addTo(map);
    //console.log(geoJSON.getBounds());
    map.fitBounds(catastro_geoJSON.getBounds());


    //agrego la plantacion

    let rodales_state_geoJSON = L.geoJson(rodales_state_gis, {
        style: styleRodales,
        onEachFeature: onEachFeature
    });


    function styleRodales() {

        let color_rand = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        return {
            fillColor: color_rand,
            weight: 1,
            opacity: 1,
            dashArray: '0',
            color: '#FFFFFFFF',
            fillOpacity: 1
        };
    }

    
    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#882222',
            dashArray: '',
            fillOpacity: 0.7
        });

        layer.bringToFront();

        //aca tengo la lista de rodales, voy a tener que filtrar
        let nombre = '';

        
      

        rodaldata_serializer_json.forEach(element => {

            if(layer.feature.properties.rodales == element.pk){
                nombre = element.cod_sap != null ? element.cod_sap : '';
            }
           
            
            
        });



        let title = "<h5 style='text-align: center;'>" + 'Rodal: ' + nombre + "</h5>"

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
        rodales_state_geoJSON.resetStyle(e.target);
    }


    function onEachFeature(feature, layer) {

        //agrego el ramdon color
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
        });
    }

    rodales_state_geoJSON.addTo(map);


    var overlaysLayers = L.layerGroup([catastro_geoJSON]);
    var overlaysRodalesLayers = L.layerGroup([rodales_state_geoJSON]);
    var layerControl = L.control.layers(null, null).addTo(map);
    layerControl.addOverlay(overlaysLayers, "Catastro");
    layerControl.addOverlay(overlaysRodalesLayers, "Rodales");

};

