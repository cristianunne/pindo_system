
var data_plantacion;
var data_intervencion;

async function createItemRodalesSidebar(rodal_id, name) {
    data_plantacion = await getPlantacionesByRodal(rodal_id);
    //console.log(data_plantacion);

    let sidebar_right_items = document.getElementById('sidebar-right-items');
    let sr_items_container = document.getElementById('sr-items-container');

    //variable que almacena la cantidad de elementos en el sidebar
    let num_items_in_sidebar = parseInt(sidebar_right_items.getAttribute('attr')) + 1;
    


    let item_dom = _createItemDOM(rodal_id, name, num_items_in_sidebar, num_items_in_sidebar);

    sr_items_container.innerHTML += item_dom;
    //aumento el numero del sidebar
    sidebar_right_items.setAttribute('attr', num_items_in_sidebar);
    


    if (data_plantacion != false) {
       
        _createItemPlantaciones(data_plantacion.plantacion.plantaciones_id, num_items_in_sidebar);

        //traigo los datos de la plantacion
        data_intervencion = await getIntervencionesByRodal(rodal_id);
 


        if (data_intervencion != null && data_intervencion != false){

          for(item of data_intervencion){
           

            //creo el item de la intervencion
            _createItemIntervenciones(item.intervencion_meta.intervenciones_id, 
              item.intervencion_meta.intervenciones_types__name, item.intervencion_meta.type, num_items_in_sidebar, item);
           
          }

        }


    }

    
}





function _createItemDOM(layer_id, name, num_items_in_sidebar) {

    //en el H2 heading clasifico segun el tipo de rodal

    let div_acordionitem = ` <div class="accordion-item" attr="${name}">
                          <div class="accordion-items-right-${num_items_in_sidebar} item-container" id='item-sidebar-${name}'> 
                            <h2 class="accordion-header ${'header-forestal'}">

                    <a class="dropdown-item" href="#collapse-itemsright-${num_items_in_sidebar}" 
                    data-bs-toggle="collapse" data-bs-target="#collapse-itemsright-${num_items_in_sidebar}" 
                    aria-expanded="true">
                        <div class="text-item-content p-1">${name}</div>
                        <div class="number-item-content p-1" >
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                        onclick="zoomToFly(${layer_id}, ${TYPE_LAYERS.RODALES})"
                        
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /><path d="M8 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16 16l-2.5 -2.5" /></svg>
                        </div>
                        
                    </a>
                    </h2>

                    <div id="collapse-itemsright-${num_items_in_sidebar}" class="collapse" 
                    data-bs-parent="#sr-items-container" style="">
                    <div class="" id="items-container-${num_items_in_sidebar}">
                        
                    
                    
                        </div>
                    </div>
                    </div>
                    </div>
                </div>`;


    

        return div_acordionitem;

}

function addItemLayerSidebar(element)
{
   
    let type_layer = element.getAttribute('typelayer');
    let id_layer = parseInt(element.getAttribute('idlayer'));
    
    if(!element.classList.contains('item-active')){
        addItemLayer(type_layer, id_layer);
        element.classList.add('item-active')
       

    } else {
        element.classList.remove('item-active')

        //console.log(id_layer);
        //console.log(type_layer);

        removeLayerOverlay(id_layer, type_layer);
    }

   

}

function _createItemPlantaciones(plantacion_id, num_items_in_sidebar)

{
    let div_container = document.getElementById('items-container-' + num_items_in_sidebar);

    let number_random = Math.floor(Math.random() * (1000000 - 0 + 1) + 0);

    let div_ = `<div class="list-group list-group-flush d-flex">
                    <div class="list-group-item list-group-item-action d-flex item-list" aria-current="true">
                    <div class="text-item-content p-1 d-flex flex-column align-items-start justify-content-center">${'Plantación'} </div>
                    <div class="number-item-content p-1 icon-subitem" typelayer="${TYPE_LAYERS.PLANTACION}" 
                    idlayer="${plantacion_id}" 

                    onclick=addItemLayerSidebar(this);>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M12 4v16" />
                        <path d="M4 15h8" /><path d="M12 12h8" /><path d="M16 12v8" /><path d="M16 16h4" /></svg>
                    </div>

                    <div class="number-item-content p-1 icon-subitem" data-bs-toggle="modal" data-bs-target="#modal${number_random}">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9h.01" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M11 12h1v4h1" /></svg>
                    </div>
                    <div class="number-item-content p-1 icon-subitem" onclick="zoomToFly(${plantacion_id}, ${TYPE_LAYERS.PLANTACION})">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /><path d="M8 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16 16l-2.5 -2.5" /></svg>
                    </div>
                    </div>
                    </div>`;


        div_container.innerHTML += div_;

        let tabs_map = document.getElementById('map-app-container');

        //le cambio el nombre almodal

        let modal_div = `<div class="modal" id="modal${number_random}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
       
            <div class="modal-body">
            <div class="col-lg-12 col-md-12 col-sm-12"> 
            <div>
              <h2 class="card-title text-center h2 text-azure">Detalles de la Plantación</h2>
            </div>
            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M15 8l2 0" /><path d="M15 12l2 0" /><path d="M7 16l10 0" /></svg>
            <strong>ID: </strong> ${data_plantacion.plantacion.plantaciones_id}
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
            <strong>Fecha: </strong> ${data_plantacion.plantacion.fecha}
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->

          
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shape" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" 
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 7l0 10" /><path d="M7 5l10 0" /><path d="M7 19l10 0" /><path d="M19 7l0 10" /></svg>
            
            <strong>Superficie: </strong> ${data_plantacion.plantacion.superficie}
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                <path d="M7 16l-1.5 -1.5" /></svg>
            <strong>Distancia entre líneas: </strong> ${data_plantacion.plantacion.dist_lineas} 
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                <path d="M7 16l-1.5 -1.5" /></svg>
            <strong>Distancia entre plantas: </strong> ${data_plantacion.plantacion.dist_plantas} 
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-christmas-tree" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1z" />
                <path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" /></svg>
            <strong>Árboles plantados: </strong> ${data_plantacion.plantacion.arboles_plantados} 
            </div>

            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 7v5l3 3"></path>
              </svg>
            <strong>Sobrevivencia: </strong> ${data_plantacion.plantacion.sobrevivencia} 
            </div>

          
            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler" 
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="img-fluid">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21l18 0"></path>
                <path d="M9 8l1 0"></path>
                <path d="M9 12l1 0"></path>
                <path d="M9 16l1 0"></path>
                <path d="M14 8l1 0"></path>
                <path d="M14 12l1 0"></path>
                <path d="M14 16l1 0"></path>
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
            </svg>
            <strong>Emsefor: </strong> 
            <a href="{% url 'empresas-view' id=plantacion.emsefors.pk %}">${data_plantacion.plantacion.emsefors}</a>

            </div>

            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M2 9a10 10 0 1 0 20 0"></path>
                <path d="M12 19a10 10 0 0 1 10 -10"></path>
                <path d="M2 9a10 10 0 0 1 10 10"></path>
                <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5"></path>
                <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"></path>
            </svg>
            <strong>Procedencia: </strong> 
            <a href="{% url 'empresas-view' id=plantacion.procedencias.pk %}">${data_plantacion.plantacion.procedencias}</a>

            </div>

          </div>
            
            </div>
            <div class="modal-footer">
              <button type="button" class="btn me-auto" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div>`;
      div_container.innerHTML += modal_div;

}

function _createItemIntervenciones(intervencion_id, name, type_inter, num_items_in_sidebar, item_data)
{

  //tipo de intervencion

  let span_intervencion = "";

  if(type_inter === 'Sobrevivencia'){
    span_intervencion = `<span class="avatar text-blue" style="width: 24px; height: 24px;">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-activity" width="24" height="24" viewBox="0 0 24 24" 
    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 12h4l3 8l4 -16l3 8h4" /></svg></span>`;

  } else if(type_inter === 'Poda'){
    span_intervencion = `<span class="avatar" style="background-image: url('static/img/icons/poda.png'); 
    width: 24px; height: 24px;"></span>`;

  } else if (type_inter === 'Raleo') {
    span_intervencion = `<span class="avatar" style="background-image: url('static/img/icons/raleo.png'); 
    width: 24px; height: 24px;"></span>`;

  } else {
    span_intervencion = `<span class="avatar" style="background-image: url('static/img/icons/talarasa.png'); 
    width: 24px; height: 24px;"></span>`;
  }

  let number_random = Math.floor(Math.random() * (1000000 - 0 + 1) + 0);


  let div_container = document.getElementById('items-container-' + num_items_in_sidebar);

  let div_ = `<div class="list-group list-group-flush d-flex">
                    <div class="list-group-item list-group-item-action d-flex item-list" aria-current="true">
                    <div class="text-item-content p-1 d-flex flex-row align-items-center justify-content-start" style="gap: 5px;">

                    ${span_intervencion}
                            
                    ${name} </div>
                    <div class="number-item-content p-1 icon-subitem" typelayer="${TYPE_LAYERS.INTERVECION}" 
                    idlayer="${intervencion_id}" 

                    onclick=addItemLayerSidebar(this);>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M12 4v16" />
                        <path d="M4 15h8" /><path d="M12 12h8" /><path d="M16 12v8" /><path d="M16 16h4" /></svg>
                    </div>

                    <div class="number-item-content p-1 icon-subitem" data-bs-toggle="modal" data-bs-target="#modal_inter${number_random}">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9h.01" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M11 12h1v4h1" /></svg>
                    </div>
                    <div class="number-item-content p-1 icon-subitem" onclick="zoomToFly(${intervencion_id}, ${TYPE_LAYERS.INTERVECION})">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /><path d="M8 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16 16l-2.5 -2.5" /></svg>
                    </div>
                    </div>
                    </div>`;

    div_container.innerHTML += div_;

    if(type_inter == 'Poda'){

      _createModalPodaIntervenciones(intervencion_id, item_data, div_container, number_random);

    } else if (type_inter == 'Sobrevivencia'){

      _createModalSobrevivenciaIntervenciones(intervencion_id, item_data, div_container, number_random);

    } else if (type_inter == 'Raleo'){
      _createModalRaleoIntervenciones(intervencion_id, item_data, div_container, number_random);
    } else if(type_inter == 'Talaraza'){

      _createModalTalarazaIntervenciones(intervencion_id, item_data, div_container, number_random);
    }



}


function _createModalPodaIntervenciones(intervencion_id, item_data, div_container, number_random)
{

  console.log(item_data);
  let valores = Object.values(item_data.intervenciones);
  let poda = null;
  let poda_metadata = item_data.intervencion_meta;

  for(let i=0; i< valores.length; i++){
    poda = valores[i];
    break;
  }

  let modal_div = `<div class="modal" id="modal_inter${number_random}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
       
            <div class="modal-body">
            <div class="col-lg-12 col-md-12 col-sm-12"> 
            <div>
              <h2 class="card-title text-center h2 text-azure">Detalles de la Poda</h2>
            </div>

            <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                      <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                      <path d="M15 8l2 0" /><path d="M15 12l2 0" /><path d="M7 16l10 0" /></svg>
                                  <strong>ID: </strong> ${poda_metadata.intervenciones_id}
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
                                  <strong>Fecha: </strong> ${poda_metadata.fecha}
                                  </div>
          
            
                                  <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
    
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-letters" width="24" height="24" viewBox="0 0 24 24" 
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9" /><path d="M11 12h9" /><path d="M11 18h9" />
                                    <path d="M4 10v-4.5a1.5 1.5 0 0 1 3 0v4.5" /><path d="M4 8h3" />
                                      <path d="M4 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6z" /></svg>
                                  
                                  <strong>Tipo de Intervención: </strong> ${poda_metadata.type}
                                  </div>


                                  <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
    
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shape" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" 
                                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                      <path d="M5 7l0 10" /><path d="M7 5l10 0" /><path d="M7 19l10 0" /><path d="M19 7l0 10" /></svg>
                                  
                                  <strong>Superficie: </strong> ${poda_metadata.superficie}
                                  </div>
          
            
                                  <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cut" width="24" height="24" 
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                      <path d="M9.15 14.85l8.85 -10.85" /><path d="M6 4l8.85 10.85" /></svg>
                                  <strong>Árboles podados: </strong> ${poda.arb_podados}
                                  </div>
            
            
                                  <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ban" width="24" height="24" viewBox="0 0 24 24" 
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M5.7 5.7l12.6 12.6" /></svg>
                                  <strong>Árboles no podados: </strong> ${poda.arb_no_podados}
                                  </div>
    
    
                                  <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                                      <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                                      <path d="M7 16l-1.5 -1.5" /></svg>
                                  <strong>Altura deseada: </strong> ${poda.alt_deseada}
                                  </div>
    
                                  <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                                      <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                                      <path d="M7 16l-1.5 -1.5" /></svg>
                                  <strong>Altura de Poda: </strong> ${poda.alt_poda}
                                  </div>

                                  <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                                      <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                                      <path d="M7 16l-1.5 -1.5" /></svg>
                                  <strong>DAP: </strong> ${poda.dap}
                                  </div>

                                  <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                                      <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                                      <path d="M7 16l-1.5 -1.5" /></svg>
                                  <strong>Altura: </strong> ${poda.altura}
                                  </div>

                                  <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                                      <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                                      <path d="M7 16l-1.5 -1.5" /></svg>
                                  <strong>Área basal: </strong> ${poda.area_basal}
                                  </div>

                                  <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-percentage" width="24" height="24" viewBox="0 0 24 24" 
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                      <path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M6 18l12 -12" /></svg>
                                  <strong>Porcentaje removido: </strong> ${poda.porc_removido}
                                  </div>
    
                                
                                  <div class="mb-2">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/book -->
                                    <svg xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler" 
                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="img-fluid">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M3 21l18 0"></path>
                                      <path d="M9 8l1 0"></path>
                                      <path d="M9 12l1 0"></path>
                                      <path d="M9 16l1 0"></path>
                                      <path d="M14 8l1 0"></path>
                                      <path d="M14 12l1 0"></path>
                                      <path d="M14 16l1 0"></path>
                                      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                                  </svg>
                                  <strong>Emsefor: </strong> 
                                  <a href="{% url 'empresas-view' id=poda.emsefors.pk %}">${poda_metadata.emsefors__name}</a>
    
                                  </div>
            

          </div>
            
            </div>
            <div class="modal-footer">
              <button type="button" class="btn me-auto" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div>`;
      div_container.innerHTML += modal_div;

}

function _createModalSobrevivenciaIntervenciones(intervencion_id, item_data, div_container, number_random)
{
  let modal_div = `<div class="modal" id="modal_inter${number_random}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
       
            <div class="modal-body">
            <div class="col-lg-12 col-md-12 col-sm-12"> 
            <div>
              <h2 class="card-title text-center h2 text-azure">Detalles de la Sobrevivencia</h2>
            </div>
            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M15 8l2 0" /><path d="M15 12l2 0" /><path d="M7 16l10 0" /></svg>
            <strong>ID: </strong> 
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
            <strong>Fecha: </strong>
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->

          
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shape" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" 
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 7l0 10" /><path d="M7 5l10 0" /><path d="M7 19l10 0" /><path d="M19 7l0 10" /></svg>
            
            <strong>Superficie: </strong> 
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                <path d="M7 16l-1.5 -1.5" /></svg>
            <strong>Distancia entre líneas: </strong> 
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                <path d="M7 16l-1.5 -1.5" /></svg>
            <strong>Distancia entre plantas: </strong>
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-christmas-tree" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1z" />
                <path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" /></svg>
            <strong>Árboles plantados: </strong> 
            </div>

            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 7v5l3 3"></path>
              </svg>
            <strong>Sobrevivencia: </strong> 
            </div>

          
            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler" 
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="img-fluid">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21l18 0"></path>
                <path d="M9 8l1 0"></path>
                <path d="M9 12l1 0"></path>
                <path d="M9 16l1 0"></path>
                <path d="M14 8l1 0"></path>
                <path d="M14 12l1 0"></path>
                <path d="M14 16l1 0"></path>
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
            </svg>
            <strong>Emsefor: </strong> 
            <a href="{% url 'empresas-view' id=plantacion.emsefors.pk %}"></a>

            </div>

            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M2 9a10 10 0 1 0 20 0"></path>
                <path d="M12 19a10 10 0 0 1 10 -10"></path>
                <path d="M2 9a10 10 0 0 1 10 10"></path>
                <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5"></path>
                <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"></path>
            </svg>
            <strong>Procedencia: </strong> 
            <a href="{% url 'empresas-view' id=plantacion.procedencias.pk %}"></a>

            </div>

          </div>
            
            </div>
            <div class="modal-footer">
              <button type="button" class="btn me-auto" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div>`;
      div_container.innerHTML += modal_div;

}

function _createModalRaleoIntervenciones(intervencion_id, item_data, div_container, number_random)
{

  let modal_div = `<div class="modal" id="modal_inter${number_random}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
       
            <div class="modal-body">
            <div class="col-lg-12 col-md-12 col-sm-12"> 
            <div>
              <h2 class="card-title text-center h2 text-azure">Detalles de la Sobrevivencia</h2>
            </div>
            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M15 8l2 0" /><path d="M15 12l2 0" /><path d="M7 16l10 0" /></svg>
            <strong>ID: </strong> 
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
            <strong>Fecha: </strong>
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->

          
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shape" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" 
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 7l0 10" /><path d="M7 5l10 0" /><path d="M7 19l10 0" /><path d="M19 7l0 10" /></svg>
            
            <strong>Superficie: </strong> 
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                <path d="M7 16l-1.5 -1.5" /></svg>
            <strong>Distancia entre líneas: </strong> 
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                <path d="M7 16l-1.5 -1.5" /></svg>
            <strong>Distancia entre plantas: </strong>
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-christmas-tree" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1z" />
                <path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" /></svg>
            <strong>Árboles plantados: </strong> 
            </div>

            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 7v5l3 3"></path>
              </svg>
            <strong>Sobrevivencia: </strong> 
            </div>

          
            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler" 
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="img-fluid">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21l18 0"></path>
                <path d="M9 8l1 0"></path>
                <path d="M9 12l1 0"></path>
                <path d="M9 16l1 0"></path>
                <path d="M14 8l1 0"></path>
                <path d="M14 12l1 0"></path>
                <path d="M14 16l1 0"></path>
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
            </svg>
            <strong>Emsefor: </strong> 
            <a href="{% url 'empresas-view' id=plantacion.emsefors.pk %}"></a>

            </div>

            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M2 9a10 10 0 1 0 20 0"></path>
                <path d="M12 19a10 10 0 0 1 10 -10"></path>
                <path d="M2 9a10 10 0 0 1 10 10"></path>
                <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5"></path>
                <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"></path>
            </svg>
            <strong>Procedencia: </strong> 
            <a href="{% url 'empresas-view' id=plantacion.procedencias.pk %}"></a>

            </div>

          </div>
            
            </div>
            <div class="modal-footer">
              <button type="button" class="btn me-auto" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div>`;
      div_container.innerHTML += modal_div;

}

function _createModalTalarazaIntervenciones(intervencion_id, item_data, div_container, number_random)
{
  let modal_div = `<div class="modal" id="modal_inter${number_random}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
       
            <div class="modal-body">
            <div class="col-lg-12 col-md-12 col-sm-12"> 
            <div>
              <h2 class="card-title text-center h2 text-azure">Detalles de la Sobrevivencia</h2>
            </div>
            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M15 8l2 0" /><path d="M15 12l2 0" /><path d="M7 16l10 0" /></svg>
            <strong>ID: </strong> 
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
            <strong>Fecha: </strong>
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->

          
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shape" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" 
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 7l0 10" /><path d="M7 5l10 0" /><path d="M7 19l10 0" /><path d="M19 7l0 10" /></svg>
            
            <strong>Superficie: </strong> 
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                <path d="M7 16l-1.5 -1.5" /></svg>
            <strong>Distancia entre líneas: </strong> 
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3l4 4l-14 14l-4 -4z" />
                <path d="M16 7l-1.5 -1.5" /><path d="M13 10l-1.5 -1.5" /><path d="M10 13l-1.5 -1.5" />
                <path d="M7 16l-1.5 -1.5" /></svg>
            <strong>Distancia entre plantas: </strong>
            </div>


            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-christmas-tree" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1z" />
                <path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" /></svg>
            <strong>Árboles plantados: </strong> 
            </div>

            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 7v5l3 3"></path>
              </svg>
            <strong>Sobrevivencia: </strong> 
            </div>

          
            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->
              <svg xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler" 
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="img-fluid">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21l18 0"></path>
                <path d="M9 8l1 0"></path>
                <path d="M9 12l1 0"></path>
                <path d="M9 16l1 0"></path>
                <path d="M14 8l1 0"></path>
                <path d="M14 12l1 0"></path>
                <path d="M14 16l1 0"></path>
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
            </svg>
            <strong>Emsefor: </strong> 
            <a href="{% url 'empresas-view' id=plantacion.emsefors.pk %}"></a>

            </div>

            <div class="mb-2">
              <!-- Download SVG icon from http://tabler-icons.io/i/book -->

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M2 9a10 10 0 1 0 20 0"></path>
                <path d="M12 19a10 10 0 0 1 10 -10"></path>
                <path d="M2 9a10 10 0 0 1 10 10"></path>
                <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5"></path>
                <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"></path>
            </svg>
            <strong>Procedencia: </strong> 
            <a href="{% url 'empresas-view' id=plantacion.procedencias.pk %}"></a>

            </div>

          </div>
            
            </div>
            <div class="modal-footer">
              <button type="button" class="btn me-auto" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div>`;
      div_container.innerHTML += modal_div;
}


function removeItemSidebarRight(name)
{

    let div_item = document.getElementById('item-sidebar-' + name);
    div_item.remove();

}


function zoomToFly(layer_id, type_layer)
{
    flyToLayer(layer_id, type_layer);

}

function filterRodalesSidebarRight(input)
{
  resetRodalesSidebarRight();

    let textFilter = input.value.toString();

    let rodalesTOC = document.getElementById('sr-items-container');

    if(textFilter != ''){
        if (rodalesTOC.hasChildNodes){

            for(let i = 0; i < rodalesTOC.childNodes.length; i++){
      
              if(rodalesTOC.childNodes[i].nodeType == Node.ELEMENT_NODE){
      
                  if(rodalesTOC.childNodes[i].nodeName === 'DIV'){
      
                      //estoy adentro de los a, puedo filtar
                      //convierto a minusculas
                      let txt_filr = textFilter.toLowerCase();
                      let text_sap = rodalesTOC.childNodes[i].getAttribute('attr').toString().toLowerCase();
      
                      if(!text_sap.startsWith(txt_filr)){
                          rodalesTOC.childNodes[i].style.display = 'none';
                      }
      
                  }
      
              }
      
            }
          }
    } else {

        if (rodalesTOC.hasChildNodes){

            for(let i = 0; i < rodalesTOC.childNodes.length; i++){
      
              if(rodalesTOC.childNodes[i].nodeType == Node.ELEMENT_NODE){
      
                  if(rodalesTOC.childNodes[i].nodeName === 'DIV'){
      
                    rodalesTOC.childNodes[i].style.display = 'block';
      
                  }
      
              }
      
            }
          }

    }

   

}

function resetRodalesSidebarRight()
{
    let rodalesTOC = document.getElementById('sr-items-container');
    if (rodalesTOC.hasChildNodes){

        for(let i = 0; i < rodalesTOC.childNodes.length; i++){
  
          if(rodalesTOC.childNodes[i].nodeType == Node.ELEMENT_NODE){
  
              if(rodalesTOC.childNodes[i].nodeName === 'DIV'){
  
                rodalesTOC.childNodes[i].style.display = 'block';
  
              }
  
          }
  
        }
      }
}