
function initGis() {




    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

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

}


function loadPlantaciones() {

    //console.log(plantaciones);
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

    var overlaysLayers = L.layerGroup([plantaciones_geoJSON]);
    var layerControl = L.control.layers(null, null).addTo(map);
    layerControl.addOverlay(overlaysLayers, "Plantaciones");
}


