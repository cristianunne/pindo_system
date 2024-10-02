
const prefix_url = 'http://127.0.0.1:8000/api/';
//const prefix_url = 'http://correo.pindosa.com.ar:5050/api/';


const setParcelsPosition = async (parcel_id, coord) => {

    let headers = new Headers();

    headers.append('Accept', 'application/json'); // This one is enough for GET requests
    headers.append('Content-Type', 'application/json'); // This one sends body

    let data = {'parcel_id' : parcel_id, 'coord' : coord}


    let url = prefix_url + 'relevamientos/set-parcel-position';

  

    try {
        const data_request = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });
        const content = await data_request.json();
        //console.log(content);
    

        //user = content;
        return content;
    } catch (err) {
       
        return false;
    }

}