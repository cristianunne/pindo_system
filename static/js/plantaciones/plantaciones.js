
function calcNumArboles()
{
    //reviso cualquiera de los dos campos

    let dist_lineas_input = document.getElementById('dist_lineas');
    let dist_plantas_input = document.getElementById('dist_plantas');
    let densidad_input = document.getElementById('densidad');
    let num_arbol_input = document.getElementById('arboles_plantados');
    let superficie_input = document.getElementById('superficie');

    let res_multi = dist_lineas_input.value * dist_plantas_input.value ;

    
    console.log(dist_lineas_input.value);
    console.log(dist_plantas_input.value);
    console.log(res_multi);

    let densidad = parseFloat( 10000 / res_multi).toFixed(2);

    
    
    densidad_input.value = densidad != Infinity ? densidad : null;

    num_arbol_input.value = Math.round(superficie_input.value * (densidad != Infinity ? densidad : 0));



}