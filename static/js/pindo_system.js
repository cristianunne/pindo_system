

function setCheckedControl(checked) {


    if (checked.checked) {

        checked.setAttribute('value', 'SI');


        console.log(checked.checked);
    } else {
        checked.setAttribute('value', 'NO');

    }

}


function deleteInformation(element){

  let controller = element.getAttribute('controller');

  if (controller === 'empresas'){

    let title = '¿Desea Eliminar la Empresa?';
    let message = 'Si acepta se borrará toda la información de la Empresa';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.EMPRESA_DELETE);
  } else if(controller === 'users') {

    let title = '¿Desea Eliminar el Usuario?';
    let message = 'Si acepta se borrará toda la información del Usuario';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.USUARIOS_DELETE);
  } else if(controller === 'emsefor') {

    let title = '¿Desea Eliminar la Emsefor?';
    let message = 'Si acepta se borrará toda la información del Emsefor';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.EMSEFOR_DELETE);
  } else if(controller === 'procedencias') {

    let title = '¿Desea Eliminar la Procedencias?';
    let message = 'Si acepta se borrará toda la información del Procedencias';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.PROCEDENCIAS_DELETE);
  } else if(controller === 'sagpyas_files') {

    let title = '¿Desea Eliminar el Archivo?';
    let message = 'Si acepta se borrará toda la información del Procedencias';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.SAGPYAS_FILES_DELETE);

  } else if(controller === 'sagpyas') {

    let title = '¿Desea Eliminar el Sagpya?';
    let message = 'Si acepta se borrará toda la información del Sagpya';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.SAGPYAS_DELETE);
  }



}


function dialogDeleteConfirm(element, title, message, url) {

    console.log(title);


    let volver = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-filled" '+
    'width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">'+
    '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>'+
    '<path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor" />'+
    '</svg>';

    let trash_icon = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" '+
        'width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'+
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>'+
        '<path d="M4 7l16 0"></path>'+
        '<path d="M10 11l0 6"></path>'+
        '<path d="M14 11l0 6"></path>'+
        '<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>'+
        '<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>'+
        '</svg>';



    let info_icon = '<svg xmlns="http://www.w3.org/2000/svg" class="icon text-red" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'+ 
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>'+
        '<path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" stroke-width="0" fill="currentColor"></path>'+
        '</svg>';

    let id = element.getAttribute('attr');


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
    });


    let btn_aceptar = document.createElement('button');
    btn_aceptar.classList.add('btn', 'btn-danger');
    btn_aceptar.innerHTML = trash_icon + ' Eliminar';

    btn_aceptar.addEventListener('click', function(){
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        window.location = url + id;
        
    });



    div_footer.appendChild(btn_cancelar);
    div_footer.appendChild(btn_aceptar);

    div2.appendChild(div_footer);


    div1.appendChild(div2);
    modal.appendChild(div1);


    document.body.classList.add('modal-open');
    document.body.appendChild(modal);




    //class="modal-open" style="overflow: hidden; padding-right: 16px;"


    /*<div class="modal-dialog modal-sm modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="modal-title">Desea eliminar el Usuario?</div>
          <div>Si acepta se borrará toda la información del Usuario </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-link link-secondary me-auto" data-bs-dismiss="modal">Cancelar</button>
          <a href="{% url 'delete-user' id=user.pk %}" class="btn btn-danger" aria-label="Button" data-bs-dismiss="modal">Aceptar</a>
        
        </div>
      </div>
    </div>
  </>*/


}
