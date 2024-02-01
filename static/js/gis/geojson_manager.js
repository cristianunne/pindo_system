
var info = null;

function createCapaGeoJson(capa, idrodal)
{

    //agrego un color random al object geojson
    for (item of capa.features) {

        let color_random = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        item.properties = { ...item.properties, 'color': color_random };
    }

    let capa_geojson = L.geoJson(capa, {
        'idlayer' : parseInt(idrodal),
        'type_layer': TYPE_LAYERS.RODALES,
        onEachFeature: onEachFeature,
        style: styleFeature,

    });


    function styleFeature(feature) {

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

        //creo el div de informacion

        rodales_serializer_json.forEach(element => {

            if(idrodal == element.rodales_id){

                createInfoRodal(element);
                //console.log(element);

            }


        });

       
    }

    function resetHighlight(e) {
        capa_geojson.resetStyle(e.target);
        e.target.bringToBack();

        //elimino el div
        map.removeControl(info);
    }

    function onEachFeature(feature, layer) {

        //agrego el ramdon color
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
        });
    }

    return capa_geojson;
    


}

//function that load Rodales to map
/*
    Revisar si seguir trayendo los rodales al inicio o traer a demanda
*/

function loadRodalesToMap(element_dom, id_rodal = null)
{
     //por lo pronto utilizo esta variable rodales_serializer_json
    if (id_rodal != null){

        //recorro los rodales y cargo el que coincide
        rodales_serializer_json.forEach(element => {
           
            if (id_rodal == element.rodales_id){
                //agrego al mapa como un overlay layer
                let geojson_layer = JSON.parse(element.gis != '' ? element.gis : null);
                if(geojson_layer != null){
                    //console.log(geojson_layer);
                    let layer_rodal = createCapaGeoJson(geojson_layer, id_rodal);
                    layer_rodal.addTo(map);
                    return;

                } else {
                     //mostrar un mensaje de error y destildar el item
                     setErrorItemRodal(element_dom);
                     alert('errororor');

                }
               
            }
            
        });

    }

}

function createInfoRodal(rodal_data)
{

    info = L.control({'position' : 'topleft'});

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
               <strong>Código SAP: </strong> ${rodal_data.cod_sap.toString()}
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
             <strong>Campo: </strong> ${rodal_data.campo.toString()}
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
           <strong>Uso: </strong> ${rodal_data.campo.toString()}
          </div>


          <div class="mb-2">
          <!-- Download SVG icon from http://tabler-icons.io/i/book -->
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M12 7v5l3 3"></path>
           </svg>
         <strong>Certificado: </strong> ${rodal_data.is_certificado ? 'Si' : 'No'}
        </div>

        <div class="mb-2">
            <!-- Download SVG icon from http://tabler-icons.io/i/book -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 7v5l3 3"></path>
            </svg>
             <strong>Finalizado: </strong> ${rodal_data.is_finish ? 'Si' : 'No'}
        
        
        </div>
    
        </div>`;


        /*this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
            '<b>' + 6 + '</b><br />' + 6 + ' people / mi<sup>2</sup>'
            : 'Hover over a state');*/
    };
    

    info.addTo(map);

}


function createCapaGeoJsonItems(layer_data, TYPE_LAYER, id_layer)
{
    let capa = null;
    let idlayer = null;

    if(TYPE_LAYER == TYPE_LAYERS.PLANTACION){
         //creo el geojson de los datos traidos
        capa = JSON.parse(layer_data.plantacion_gis != '' ? layer_data.plantacion_gis : null);
        idlayer = id_layer;
        console.log(capa);

    } else if (TYPE_LAYER == TYPE_LAYERS.INTERVECION)
    {
        capa = JSON.parse(layer_data.gis != '' ? layer_data.gis : null);
        console.log(capa);
        idlayer = id_layer;

    }


    
    if(capa != null && capa.features.length != 0){

       

        //creo el geojson y agrego al mapa
        for (item of capa.features) {

            let color_random = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            item.properties = { ...item.properties, 'color': color_random };
        }
    
        let capa_geojson = L.geoJson(capa, {
            'idlayer' : parseInt(idlayer),
            'type_layer': parseInt(TYPE_LAYER),
            style: styleFeature,
    
        });
    
    
        function styleFeature(feature) {
    
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
      

        /*capa_geojson.addTo(map);
        capa_geojson.bringToFront();*/

        return capa_geojson;

    } else {
       
        Toastify({
            text: "No se ha cargado la Capa GIS necesaria para dibujar en el Mapa",
            duration: 4500,
            newWindow: true,
            gravity: "bottom", 
            position: 'right',
            style: {
                background: COLORS.DANGER,
              }
        }).showToast();
    }

    return false;


}
