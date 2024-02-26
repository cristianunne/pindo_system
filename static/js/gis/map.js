



function addLayerOverlay()
{
    //primero verifico que no exista en la lista disponible del mapap
}


//este metodo agrega una capa PLantacion o intervencion
function addItemLayer(TYPE_LAYER_, id_layer)
{
    let data_ = null;

   

    if(TYPE_LAYER_ == TYPE_LAYERS.PLANTACION){
        data_ = data_plantacion;
        let geojson_layer = createCapaGeoJsonItems(data_, TYPE_LAYER_, id_layer);
 
        geojson_layer.addTo(map);
        geojson_layer.bringToFront();
    
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

    } else if (TYPE_LAYER_ == TYPE_LAYERS.INTERVECION){
        data_ = data_intervencion;

        //consulto el layer por su id
      
        if (data_ != null && data_ != false){

            for(item of data_){
               

                if(item.intervencion_meta.intervenciones_id == id_layer){
                    
                    let valores = Object.values(item.intervenciones)

                    for(let i=0; i< valores.length; i++){

                        if(id_layer == valores[i].intervenciones_id){
                           
                            let data_inter = valores[i];
                            let geojson_layer = createCapaGeoJsonItems(data_inter, TYPE_LAYER_, id_layer);

                            if (geojson_layer != false){

                                geojson_layer.addTo(map);
                                geojson_layer.bringToFront();

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

                       
                    }
                 

                }
            
            }
  
          }


    }

    
   
}


function removeLayerOverlay(idlayer, TYPE_LAYER)
{

    console.log(idlayer);
    console.log(TYPE_LAYER);

    map.eachLayer(function(layer){

   
        if(layer.options.type_layer !== undefined){

            if(TYPE_LAYER == TYPE_LAYERS.WMS){

                if(layer.options.idlayer == idlayer && layer.options.type_layer == TYPE_LAYER){
                    map.removeLayer(layer);
    
                   Toastify({
                        text: "La Capa se ha Removido del Mapa",
                        duration: 4500,
                        newWindow: true,
                        gravity: "bottom", 
                        position: 'right',
                        style: {
                            background: COLORS.DANGER,
                          }
                    }).showToast();
                }

            } else {

                if(layer.options.idlayer == idlayer && layer.options.type_layer == TYPE_LAYER && 
                    layer.feature != null){
                    map.removeLayer(layer);
    
                   Toastify({
                        text: "La Capa se ha Removido del Mapa",
                        duration: 4500,
                        newWindow: true,
                        gravity: "bottom", 
                        position: 'right',
                        style: {
                            background: COLORS.DANGER,
                          }
                    }).showToast();
                }

            }
          
            

        }

        

    });
}

function flyToLayer(idlayer, TYPE_LAYER)
{
    let arr_cordinates = [];
    
    map.eachLayer(function(layer){

        //deberia guardar los layer y hacer un getbounds completo

        
   
        if(layer.options.type_layer !== undefined){
     
            
            if(parseInt(layer.options.idlayer) == idlayer && layer.options.type_layer == TYPE_LAYER && 
                layer.feature != null){
                //console.log(layer.feature.geometry.coordinates[0]);
                arr_cordinates.push(layer.getCenter());

             
            }
        }

      

    });

    //calculo el promedio
    let sum_lat = null;
    let sum_long = null;
    let num_el = 0;

    arr_cordinates.forEach(el => {
        console.log(el.lat);
        sum_lat = sum_lat + el.lat;
        sum_long = sum_long + el.lng;
        num_el++;
    })

    let prom_lat = sum_lat / num_el;
    let prom_long = sum_long / num_el;

    let latlng = L.latLng(prom_lat, prom_long);

    map.flyTo(latlng, 16);

}