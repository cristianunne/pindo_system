

function showPassword(element) {

    let id_input = element.getAttribute("attr");
    let number = element.getAttribute("attr2");

    let input = document.getElementById(id_input);

    //tengo que setear e icon tmb


    if (input.type === "password") {
        input.type = "text";

        if(number === '1'){
            let eye_off = document.getElementById('eye-off');
            eye_off.style.cssText += ';display:inherit !important;'

            let eye_on = document.getElementById('eye-on');
            eye_on.style.cssText += ';display:none !important;';
        } else {
            let eye_off = document.getElementById('eye-off2');
            eye_off.style.cssText += ';display:inherit !important;'

            let eye_on = document.getElementById('eye-on2');
            eye_on.style.cssText += ';display:none !important;';
        }

    
        
    } else {
        input.type = "password";
        if(number === '1'){
            let eye_off = document.getElementById('eye-off');
            eye_off.style.cssText += ';display:none !important;'

            let eye_on = document.getElementById('eye-on');
            eye_on.style.cssText += ';display:inherit !important;';
        } else {
            let eye_off = document.getElementById('eye-off2');
            eye_off.style.cssText += ';display:none !important;'

            let eye_on = document.getElementById('eye-on2');
            eye_on.style.cssText += ';display:inherit !important;';
        }
    }
}

