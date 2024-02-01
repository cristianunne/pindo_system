

function initGis(layer) {
    var map = new L.map('map',
        {
            zoom: 9,
            minZoom: 1,
        });

    console.log(map);


    let basemap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);





    let capawms = createLayerWMS(layer);
    console.log(capawms);

    let base = {
        "OpenStreetMap": basemap
    }

    let wms_layer = {
        "capawms": capawms
    }

    capawms.addTo(map);
    console.log(layer.fields.min_x);
    console.log(layer.fields.min_y);
    console.log(layer.fields.max_x);
    console.log(layer.fields.max_y);

    //hago el fitbound a los limites de la capa
    /*map.fitBounds([
        [-27.6, -59.09],
        [-27.32, -58.83] 
    ]);*/
    /*map.fitBounds([
        [40.712, -74.227],
        [40.774, -74.125]
    ]);*/

    if (layer.min_x != 0 && layer.max_x != 0 && layer.min_y != 0 && layer.max_y != 0) {

        map.fitBounds([
            [parseFloat(layer.fields.min_y), parseFloat(layer.fields.min_x)],
            [parseFloat(layer.fields.max_y), parseFloat(layer.fields.max_x)]
        ]);

    }



    var layerControl = L.control.layers(base, wms_layer).addTo(map);





}