



var parcels_control_container = L.control({position: 'bottomright'});

var back_control_container = L.control({position: 'bottomleft'});

//defino las vriables globales
var is_edit = false;
//almacena el id del point en edicion
var element_in_edit = null;

var point_coord = [];

var temp_marker = null;

var new_geojson_parcelas = null;
var parcelas_gis_geojson = null;


var point_icon = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"
            viewBox="0 0 24 24"  fill="currentColor"  
            class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
            </svg>`;
var point_icon_vacio = `<svg  xmlns="http://www.w3.org/2000/svg"  
            width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"    
            stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  
            class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin" style="color: gray;">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>`

function initParcelasGis(parcelas_gis, parcelas_data)
{
    let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    let googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(map);

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
        'Google Satellite' : googleSat,
        'Open Street Map' : osm,
        'ESRI Satellite' : Esri_WorldImagery,
        'CyclOSM' : CyclOSM,
        'Argenmap Black' : argenmap_oscuro,

    }

    overlayMaps = null;
    let rodal = rodal_gis_serializer_json != null ? loadRodal(rodal_gis_serializer_json) : null;
    //traigo la plantacion


    if(rodal != null){

        overlayMaps = {
            "Rodal" :  rodal
        }
    }


    layerControl = L.control.layers(basemaps, overlayMaps).addTo(map);


    initLocaliationsFunctions(parcelas_data);
    loadParcelasGisToMap(parcelas_gis);

}

function loadRodal(rodal_gis)
{

    let geoJSON = L.geoJson(rodal_gis, {
        style: styleRodal
    });
    geoJSON.addTo(map);
    
    map.fitBounds(geoJSON.getBounds());


    function styleRodal() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let clasified = true
        return {
            fillColor: '#c5d983',
            weight: clasified ? 2 : 2,
            opacity: 1,
            color:  "#c5d983",
            fillOpacity: 0.6
        };
    }

}


function initLocaliationsFunctions(parcelasdata_serializer_json)
{
    if (map != undefined && map != null)
    {
        /*map.on("contextmenu", function (event) {
            console.log("Coordinates: " + event.latlng.toString());
            L.marker(event.latlng).addTo(map);
        });*/



        //agrego el control
        createContainerControl(parcelasdata_serializer_json);
        createBackContainer();

    }

}


function loadParcelasGisToMap(parcelas_gis){

    if (map){

        let geojsonMarkerOptions = {
            radius: 8,
            fillColor: "#ff0000",
            color: "#ff0000",
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        };

        parcelas_gis_geojson = L.geoJson(parcelas_gis, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions);
            },
            onEachFeature: onEachFeaturePoint
        }).bringToFront().addTo(map);

       

        function onEachFeaturePoint(feature, layer)
        {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight
            });

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
        
            let title = `<h5 style='text-align: center;'>Parcela: ${' ' + layer.feature.properties.number_parcela} </h5>`
        
            layer.bindTooltip(title, {
                direction: 'top',
                permanent: false,
                sticky: false,
                offset: [0, -10],
                opacity: 0.75,
                className: 'leaflet-tooltip'
            }).openTooltip();
        
        }
        
        function resetHighlight(e) {
            parcelas_gis_geojson.resetStyle(e.target);
        }

    }

}






function createInfoRodal(rodal_data)
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

function createBackContainer()
{

    back_control_container.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'container-back card bg-dark text-dark-fg'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    back_control_container.update = function () {

        let volver = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-filled" '+
        'width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">'+
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>'+
        '<path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor" />'+
        '</svg>';


        let btn_aceptar = `<a href="${'/inventarios/inventarios-relevamientos/view-arboles/' + idrelevamiento + '/'}" 
        class="btn btn-success text-white">${volver + ' '} Volver</a>`
       


        this._div.innerHTML = btn_aceptar


    }

    back_control_container.addTo(map);


}

function goToBack()
{
    window.location.href = ''

}

function createContainerControl(parcelasdata_serializer_json)
{
  
    parcels_control_container.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info card bg-dark text-dark-fg'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    parcels_control_container.update = function () {

        if (parcelasdata_serializer_json != undefined && parcelasdata_serializer_json != null){

         
            
            let edit_icon = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  
            fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  
            class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" 
            fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
            <path d="M16 5l3 3" /></svg>`

            

            let parcelas_items = '';
             //recorro la lista de datos
            parcelasdata_serializer_json.data.forEach(value => {
               
                let has_point = false;

                if(value.lat != null && value.lon != null){
                    has_point = true;
                }


                parcelas_items = parcelas_items + `<div class="d-flex align-items-center gap-2">
                <div id="${'id_icon_' + value.id}" class="icon_parcel" onclick="flyToParcel(${value.id})">${has_point ? point_icon : point_icon_vacio} </div>
                <div class="flex-grow-1">Parcela ${value.number_parcela} </div>
                <div id="edit-container" class="text-white" onclick="editPoint(this)" attr="false" 
                attr_id="${value.id}" >${edit_icon}</div>
                
                </div>`;
            })

          

            this._div.innerHTML = `<div class="card-body p-2">

            <div class="title-container">
            <h2 class="card-title text-center mb-1">Parcelas</h2>
            </div>

            <div class="d-flex flex-column gap-2 mt-3" id="parcelas-items-container">${parcelas_items}</div>`

        } else {
            alert('Error al traer los datos');

            this._div.innerHTML = `<div class="card-body p-2">

            <div class="title-container">
            <h2 class="card-title text-center mb-1">Parcelas</h2>
            </div>

            <div>
            <h3 class="card-title text-center mb-1">Sin datos</h3>
            </div>
            `
        }

       
    };

    parcels_control_container.addTo(map);

}

function editPoint(button){

    //traigo el id del button y consulto si hay algo en edicion

    if(is_edit){

        let titulo = 'Almacenamiento de información';
        let mensaje = `Desea guardar/modificar el punto geográfico de la Parcela?.`

        dialogConfirmSendData(button, titulo, mensaje);

    } else {

        let titulo = 'Modificar la posición geográfica de la Parcela';
        let mensaje = `Para marcar la posición de la Parcela utilice el boton <strong>'derecho'</strong> del mouse.
        Para terminar la edición presione el boton <strong>'editar'</strong> del panel de Parcelas.`
        dialogConfirmActions(button, titulo, mensaje, 'Aceptar');

    }

  
   
}


function dialogConfirmActions(element, title, message, txt_button) {

    
    let volver = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-filled" '+
    'width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">'+
    '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>'+
    '<path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor" />'+
    '</svg>';

    let trash_icon = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>`;

    
    let open_icon = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>'



    let info_icon = '<svg xmlns="http://www.w3.org/2000/svg" class="icon text-green" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'+ 
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>'+
        '<path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" stroke-width="0" fill="currentColor"></path>'+
        '</svg>';

    let id_element = element.getAttribute('attr_id');
    let status_element = element.getAttribute('attr');

   //consulto si hay algo en edicion
   if (is_edit){
    alert('Termine la edicion del punto actual primero!');
   } else {

        let modal = document.createElement("div");
        modal.classList.add("modal", "modal-blur", "fade", 'show');
        modal.setAttribute('id', "modal-small");
        modal.setAttribute('tabindex', "-1");
        modal.setAttribute('role', "dialog");
        modal.setAttribute('aria-hidden', "true");
        modal.style.display = 'block';

        let div1 = document.createElement("div");
        div1.classList.add("modal-dialog", "modal-sm", "modal-dialog-centered");
        div1.setAttribute('role', "document");

        let div2 = document.createElement("div");
        div2.classList.add("modal-content");

        let div_modal_body = document.createElement("div");
        div_modal_body.classList.add("modal-body");

        let div_title = document.createElement("div");
        div_title.classList.add("modal-title");
        div_title.innerHTML = title;

        let div_info = document.createElement("div");
        div_info.innerHTML = info_icon + ' ' + message;

        div_modal_body.appendChild(div_title);
        div_modal_body.appendChild(div_info);

        div2.appendChild(div_modal_body);

        //creo eo footer
        let div_footer = document.createElement("div");
        div_footer.classList.add('modal-footer');

        let btn_cancelar = document.createElement('button');
        btn_cancelar.classList.add('btn', 'btn-dark', 'me-auto');
        div1.setAttribute('data-bs-dismiss', "modal");
        btn_cancelar.innerHTML = volver + ' Cancelar';

    

        btn_cancelar.addEventListener('click', function(){
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            modal.remove();

            //cancelar la edicion
              //seteo is editing en tru
              is_edit = false;
              element_in_edit = null;
        });


        let btn_aceptar = document.createElement('button');
        btn_aceptar.classList.add('btn', 'btn-success');


        texto_ = (txt_button.toString() == null || txt_button.toString() == undefined) ? ' Aceptar' : txt_button.toString();
        

        btn_aceptar.innerHTML = trash_icon +  texto_ 

        btn_aceptar.addEventListener('click', function(){
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');

            //INiciar la edicion
            element.classList.remove("text-white");
            element.classList.add("text-red");
            element.setAttribute('attr', true);

            //seteo is editing en tru
            is_edit = true;
            element_in_edit = id_element;

            //activo la herramienta de edicion

            map.on("contextmenu", function (event) {
              
                point_coord = null;
                point_coord = {
                    'lat': event.latlng.lat,
                    'long': event.latlng.lng
                }
               
                if (temp_marker != null){
                    if(map.hasLayer(temp_marker)){

                        map.removeLayer(temp_marker);
                        temp_marker = null;
                        temp_marker = L.marker(event.latlng);
                        temp_marker.addTo(map)

                    }

                } else {
                    temp_marker = L.marker(event.latlng);
                    temp_marker.addTo(map)
                }
                
              
            });

           

        
            
        });



        div_footer.appendChild(btn_cancelar);
        div_footer.appendChild(btn_aceptar);

        div2.appendChild(div_footer);


        div1.appendChild(div2);
        modal.appendChild(div1);


        document.body.classList.add('modal-open');
        document.body.appendChild(modal);

   }
}

function dialogConfirmSendData(element, title, message) {

    
    let volver = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-filled" '+
    'width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">'+
    '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>'+
    '<path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor" />'+
    '</svg>';

    let trash_icon = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>`;

    
    let open_icon = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>'



    let info_icon = '<svg xmlns="http://www.w3.org/2000/svg" class="icon text-green" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'+ 
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>'+
        '<path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" stroke-width="0" fill="currentColor"></path>'+
        '</svg>';

    let id_element = element.getAttribute('attr_id');
    let state_element = element.getAttribute('attr');

    let modal = document.createElement("div");
    modal.classList.add("modal", "modal-blur", "fade", 'show');
    modal.setAttribute('id', "modal-small");
    modal.setAttribute('tabindex', "-1");
    modal.setAttribute('role', "dialog");
    modal.setAttribute('aria-hidden', "true");
    modal.style.display = 'block';

    let div1 = document.createElement("div");
    div1.classList.add("modal-dialog", "modal-sm", "modal-dialog-centered");
    div1.setAttribute('role', "document");

    let div2 = document.createElement("div");
    div2.classList.add("modal-content");

    let div_modal_body = document.createElement("div");
    div_modal_body.classList.add("modal-body");

    let div_title = document.createElement("div");
    div_title.classList.add("modal-title");
    div_title.innerHTML = title;

    let div_info = document.createElement("div");
    div_info.innerHTML = info_icon + ' ' + message;

    div_modal_body.appendChild(div_title);
    div_modal_body.appendChild(div_info);

    div2.appendChild(div_modal_body);

    //creo eo footer
    let div_footer = document.createElement("div");
    div_footer.classList.add('modal-footer');

    let btn_cancelar = document.createElement('button');
    btn_cancelar.classList.add('btn', 'btn-dark', 'me-auto');
    div1.setAttribute('data-bs-dismiss', "modal");
    btn_cancelar.innerHTML = volver + ' Cancelar';



    btn_cancelar.addEventListener('click', function(){
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        modal.remove();

        //cancelar la edicion
          //INiciar la edicion
        element.classList.remove("text-red");
        element.classList.add("text-white");
        element.setAttribute('attr', false);

        //NO ENVIO LOS DATOS
        is_edit = false;
        element_in_edit = null;
        point_coord = []

        map.off('contextmenu');
        
        //elimino el ultimo marker

        if (temp_marker != null){
            if(map.hasLayer(temp_marker)){

                map.removeLayer(temp_marker);
                temp_marker = null;
               

            }

        }
    });


    let btn_aceptar = document.createElement('button');
    btn_aceptar.classList.add('btn', 'btn-success');


    texto_ = ' Aceptar';
    

    btn_aceptar.innerHTML = trash_icon +  texto_ 

    btn_aceptar.addEventListener('click', async function(){
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');

        //INiciar la edicion
        element.classList.remove("text-red");
        element.classList.add("text-white");
        element.setAttribute('attr', false);

        //seteo is editing en tru
        is_edit = false;
        element_in_edit = null;

        //hago el envio de los datos
       
        let result = await setParcelsPosition(id_element, point_coord);

        //vuelvo a traer parcelas data o mejor cambio el icono

        //desactivo la funcion
        map.off('contextmenu');
        
        //elimino el ultimo marker

        if (temp_marker != null){
            if(map.hasLayer(temp_marker)){

                map.removeLayer(temp_marker);
                temp_marker = null;
               

            }

        }

      
        //recargo la capa
        if (result != false){

            new_geojson_parcelas = JSON.parse(result != '' ? result : null);

            //elimino la capa de parcelas del map parcelas_gis_geojson


            if (parcelas_gis_geojson != null){
                if(map.hasLayer(parcelas_gis_geojson)){

                    map.removeLayer(parcelas_gis_geojson);
                    parcelas_gis_geojson = new_geojson_parcelas;

                    //vuelvo a cargar la capa
                    loadParcelasGisToMap(new_geojson_parcelas);

                    //cambio el icono
                    let icon_point = document.getElementById('id_icon_' + id_element);

                    icon_point.innerHTML = "";
                    icon_point.innerHTML = point_icon;
                

                }

            }

        } else {
            //error al cargar
            alert('Error al cargar el punto');
        }
      
    
    
        
    });



    div_footer.appendChild(btn_cancelar);
    div_footer.appendChild(btn_aceptar);

    div2.appendChild(div_footer);


    div1.appendChild(div2);
    modal.appendChild(div1);


    document.body.classList.add('modal-open');
    document.body.appendChild(modal);

}

function flyToParcel(id_parcel)
{
    let layers = parcelas_gis_geojson.getLayers();
    
    layers.forEach(point => {
     
        if(point.feature.properties.pk.toString() === id_parcel.toString())
        {
            let latlong = point.feature.geometry.coordinates;
            map.flyTo([latlong[1], latlong[0]], 19);
           
        }
    })

}






