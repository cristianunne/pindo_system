
function initGis(rodal_gis, plantaciones) {


    let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    });

    let Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });


    var CyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });


        var argenmap_oscuro = new L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/argenmap_oscuro@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
            minZoom: 1, maxZoom: 20
        });


    let basemaps = {
        'Open Street Map' : osm,
        'Google Satellite' : googleSat,
        'ESRI Satellite' : Esri_WorldImagery,
        'CyclOSM' : CyclOSM,
        'Argenmap Black' : argenmap_oscuro,

    }


    overlayMaps = null;
    let rodal = loadRodal(rodal_gis);
    //traigo la plantacion


    if(rodal != null){

        overlayMaps = {
            "Rodal" :  rodal
        }
    }


    layerControl = L.control.layers(basemaps, overlayMaps).addTo(map);

    loadPlantaciones(plantaciones);
    

}


function loadPlantaciones(plantaciones) {

    console.log(plantaciones);
    for (item of plantaciones.features) {

        let color_plant = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        item.properties = { ...item.properties, 'color': color_plant };
    }

    let plantaciones_geoJSON = L.geoJson(plantaciones, {
        onEachFeature: onEachFeature,
        style: stylePlantacion,

    });

    function stylePlantacion(feature) {

        style = {
            fillColor: feature.properties.color,
            weight: 0,
            opacity: 1,
            dashArray: '0',
            color: '#FFFFFFFF',
            fillOpacity: 1
        }

        return style;
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

        let title = "<h5 style='text-align: center;'>" + 'Plantación N°: ' + layer.feature.properties.plantacion.toString() + "</h5>"

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
        plantaciones_geoJSON.resetStyle(e.target);
    }

    function onClickFeature(e) {
        console.log(e.target.feature);

        let url = URL_GO_TO.RODALES_PLANTACIONES_VIEW + e.target.feature.properties.plantacion

        var newTab = window.open();
        newTab.location.href = url;
        this.window.focus();

    }

    function onEachFeature(feature, layer) {

        //agrego el ramdon color
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: onClickFeature
        });
    }

    plantaciones_geoJSON.addTo(map);

    layerControl.addOverlay(plantaciones_geoJSON, 'Plantaciones');

    
}

function loadIntervenciones(overlays, type_controller)
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
    
                title = "<h5 style='text-align: center; margin: 0 auto;'> Poda: "  + layer.feature.properties.intervencion_gis.toString() + "</h5>"
               
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

        layerControl.addOverlay(overlaysLayers, type_controller.toString());
    
    }


}

function loadRodal(rodal_gis)
{

    let geoJSON = L.geoJson(rodal_gis, {
        style: styleRodal
    });
    geoJSON.addTo(map);
    console.log(geoJSON.getBounds());
    map.fitBounds(geoJSON.getBounds());


    function styleRodal() {
        return {
            fillColor: '#EE5555',
            weight: 2,
            opacity: 1,
            color: 'red',
            fillOpacity: 0.6
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
    }

    function resetHighlight(e) {
        geoJSON.resetStyle(e.target);
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight
        });
    }


    return geoJSON;



}

function cerateInfoRodal(rodal_data)
{

    let info = L.control({'position' : 'topleft'});

      info.onAdd = function (map) {
          this._div = L.DomUtil.create('div', 'card bg-dark text-dark-fg'); // create a div with a class "info"
          this.update();
          return this._div;
      };

      info.update = function () {

        this._div.innerHTML = `<div class="card-body p-2">

                <div>
                <h2 class="card-title text-center mb-1">Rodal</h2>
                </div>

                <div class="mb-2">
                <!-- Download SVG icon from http://tabler-icons.io/i/book -->
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-3d-cube-sphere" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 17.6l-2 -1.1v-2.5"></path>
                    <path d="M4 10v-2.5l2 -1.1"></path>
                    <path d="M10 4.1l2 -1.1l2 1.1"></path>
                    <path d="M18 6.4l2 1.1v2.5"></path>
                    <path d="M20 14v2.5l-2 1.12"></path>
                    <path d="M14 19.9l-2 1.1l-2 -1.1"></path>
                    <path d="M12 12l2 -1.1"></path>
                    <path d="M18 8.6l2 -1.1"></path>
                    <path d="M12 12l0 2.5"></path>
                    <path d="M12 18.5l0 2.5"></path>
                    <path d="M12 12l-2 -1.12"></path>
                    <path d="M6 8.6l-2 -1.1"></path>
                 </svg>
               <strong>Código SAP: </strong> ${rodal_data[0].fields.cod_sap.toString()}
              </div>

              <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                  <path d="M16 3v4"></path>
                  <path d="M8 3v4"></path>
                  <path d="M4 11h16"></path>
                  <path d="M11 15h1"></path>
                  <path d="M12 15v3"></path>
               </svg>
             <strong>Campo: </strong> ${rodal_data[0].fields.campo.toString()}
            </div>


            <div class="mb-2">
            <!-- Download SVG icon from http://tabler-icons.io/i/book -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M9 9l1 0"></path>
                <path d="M9 13l6 0"></path>
                <path d="M9 17l6 0"></path>
             </svg>
           <strong>Uso: </strong> ${rodal_data[0].fields.campo.toString()}
          </div>


          <div class="mb-2">
          <!-- Download SVG icon from http://tabler-icons.io/i/book -->
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M12 7v5l3 3"></path>
           </svg>
         <strong>Certificado: </strong> ${rodal_data[0].fields.is_certificado ? 'Si' : 'No'}
        </div>

        <div class="mb-2">
            <!-- Download SVG icon from http://tabler-icons.io/i/book -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 7v5l3 3"></path>
            </svg>
             <strong>Finalizado: </strong> ${rodal_data[0].fields.is_finish ? 'Si' : 'No'}
        
        
        </div>
    
        </div>`;


        /*this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
            '<b>' + 6 + '</b><br />' + 6 + ' people / mi<sup>2</sup>'
            : 'Hover over a state');*/
    };
    

    info.addTo(map);

}