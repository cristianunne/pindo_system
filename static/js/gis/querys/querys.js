

const getPlantacionesByRodal = async (rodal_id) => {

    let headers = new Headers();

    headers.append('Accept', 'application/json'); // This one is enough for GET requests
    headers.append('Content-Type', 'application/json'); // This one sends body

    let data = {rodal_id : rodal_id}
    console.log('idrodal: ' + rodal_id);

    let url = prefix_url + 'get-plantaciones-by-rodal';

    const data_request = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    });

    try {
        const content = await data_request.json();
        //console.log(content);

        //user = content;
        return content;
    } catch (err) {
        //console.log(err);
        return false;
    }

}

const getIntervencionesByRodal = async (rodal_id) => {

    let headers = new Headers();

    headers.append('Accept', 'application/json'); // This one is enough for GET requests
    headers.append('Content-Type', 'application/json'); // This one sends body

    let data = {rodal_id : rodal_id}
    console.log('idrodal: ' + rodal_id);

    let url = prefix_url + 'get-intervenciones-by-rodal';

    const data_request = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    });

    try {
        const content = await data_request.json();
        //console.log(content);

        //user = content;
        return content;
    } catch (err) {
        //console.log(err);
        return false;
    }

}


const getLayerWMS = async (layer_id) => {


    let headers = new Headers();

    headers.append('Accept', 'application/json'); // This one is enough for GET requests
    headers.append('Content-Type', 'application/json'); // This one sends body

    let data = {layer_id : layer_id}


    let url = prefix_url + 'get-layer-wms';

    const data_request = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    });

    try {
        const content = await data_request.json();
        //console.log(content);

        //user = content;
        return content;
    } catch (err) {
        //console.log(err);
        return false;
    }

}