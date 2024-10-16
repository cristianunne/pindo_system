

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
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.EMPRESA_DELETE, 'Eliminar');
  } else if(controller === 'rodales') {

    let title = '¿Desea Eliminar el Rodal?';
    let message = 'Si acepta se borrará toda la información del Rodal';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.RODALES_DELETE, 'Eliminar');

  } else if(controller === 'rodales_close') {

    let title = '¿Desea Cerrar el Rodal?';
    let message = 'La información del Rodal quedara almacenada en el historial';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.RODALES_CLOSE, 'Cerrar');
  }

  else if(controller === 'rodales_open') {

    let title = '¿Desea Abrir el Rodal?';
    let message = 'La información del Rodal se recuperara nuevamente';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.RODALES_OPEN, 'Aceptar');
  }
  
  else if(controller === 'users') {

    let title = '¿Desea Eliminar el Usuario?';
    let message = 'Si acepta se borrará toda la información del Usuario';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.USUARIOS_DELETE, 'Eliminar');
  } else if(controller === 'emsefor') {

    let title = '¿Desea Eliminar la Emsefor?';
    let message = 'Si acepta se borrará toda la información del Emsefor';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.EMSEFOR_DELETE, 'Eliminar');
  } else if(controller === 'procedencias') {

    let title = '¿Desea Eliminar la Procedencias?';
    let message = 'Si acepta se borrará toda la información del Procedencias';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.PROCEDENCIAS_DELETE, 'Eliminar');
  } else if(controller === 'sagpyas_files') {

    let title = '¿Desea Eliminar el Archivo?';
    let message = 'Si acepta se borrará toda la información del Procedencias';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.SAGPYAS_FILES_DELETE, 'Eliminar');

  } else if(controller === 'sagpyas') {

    let title = '¿Desea Eliminar el Sagpya?';
    let message = 'Si acepta se borrará toda la información del Sagpya';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.SAGPYAS_DELETE, 'Eliminar');
  } else if(controller === 'maquinas') {

    let title = '¿Desea Eliminar la Máquina?';
    let message = 'Si acepta se borrará toda la información de la Máquina';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.MAQUINAS_DELETE, 'Eliminar');

  } else if(controller === 'usos_rodales') {

    let title = '¿Desea Eliminar el Uso?';
    let message = 'Si acepta se borrará toda la información del Uso';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.USOS_RODALES_DELETE, 'Eliminar');
  } else if(controller === 'intervencion_type') {

    let title = '¿Desea Eliminar el Tipo de Intervención?';
    let message = 'Si acepta se borrará toda la información del Tipo de Intervención';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.INTERVENCIONES_TYPES_DELETE, 'Eliminar');
  } else if(controller === 'plantaciones') {

    let title = '¿Desea Eliminar la Plantación?';
    let message = 'Si acepta se borrará toda la información de la Plantación';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.PLANTACION_DELETE, 'Eliminar');
  } else if(controller === 'poda') {

    let title = '¿Desea Eliminar la Poda?';
    let message = 'Si acepta se borrará toda la información de la Intervención';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.PODA_DELETE, 'Eliminar');
  } else if(controller === 'sobrevivencia') {

    let title = '¿Desea Eliminar la Sobrevivencia?';
    let message = 'Si acepta se borrará toda la información de la Intervención';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.PODA_DELETE, 'Eliminar');
  } else if(controller === 'raleo') {

    let title = '¿Desea Eliminar el Raleo?';
    let message = 'Si acepta se borrará toda la información de la Intervención';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.RALEO_DELETE, 'Eliminar');
  } else if(controller === 'talaraza') {

    let title = '¿Desea Eliminar la Talaraza?';
    let message = 'Si acepta se borrará toda la información de la Intervención';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.RALEO_DELETE, 'Eliminar');
  } else if(controller === 'basemaps') {

    let title = '¿Desea Eliminar la Capa Base?';
    let message = 'Si acepta se borrará toda la información de la Capa Base';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.BASEMAPS_DELETE, 'Eliminar');
  } else if(controller === 'categorias_capas') {

    let title = '¿Desea Eliminar la Categoría?';
    let message = 'Si acepta se borrará toda la información de la Categoría';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.CATEGORIAS_CAPAS_DELETE, 'Eliminar');
  } else if(controller === 'servicios_ide') {

    let title = '¿Desea Eliminar el Servicio?';
    let message = 'Si acepta se borrará toda la información del Servicio';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.SERVICIOS_IDE_DELETE, 'Eliminar');
  } else if(controller === 'layers') {

    let title = '¿Desea Eliminar la Capa?';
    let message = 'Si acepta se borrará toda la información de la Capa';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.LAYERS_DELETE, 'Eliminar');
  }

  else if(controller === 'sagpyas_rodales') {

    let title = '¿Desea Eliminar el Rodal del Sagpya Actual?';
    let message = 'Si acepta se borrará toda la información de la Capa';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.SAGPYAS_RODALES_DELETE, 'Eliminar');
  }

  else if(controller === 'planificacion') {

    let title = '¿Desea Eliminar la Planificacion?';
    let message = 'Si acepta se borrará toda la información de la Capa';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.PLANIFICACION_DELETE, 'Eliminar');
  }

  else if(controller === 'maquinas_emsefor') {

    let title = '¿Desea Eliminar la Máquina?';
    let message = 'Si acepta se borrará toda la información de la Capa';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.MAQUINAS_EMSEFOR_DELETE, 'Eliminar');
  }

  else if(controller === 'movimientos_expe') {

    let title = '¿Desea Eliminar el Movimiento?';
    let message = 'Si acepta se borrará toda la información del mismo';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.MOVIMIENTO_EXPE_DELETE, 'Eliminar');
  }

  else if(controller === 'movimientos_sagpya') {

    let title = '¿Desea Eliminar el Movimiento?';
    let message = 'Si acepta se borrará toda la información del mismo';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.MOVIMIENTO_DELETE, 'Eliminar');
  }

  else if(controller === 'sagpyas_files_delete') {

    let title = '¿Desea Eliminar el Archivo Movimiento?';
    let message = 'Si acepta se borrará toda la información del mismo';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.MOVIMIENTO_SAGPYA_DELETE, 'Eliminar');
  }

  else if(controller === 'catastro_parcela_delete') {

    let title = '¿Desea Eliminar la Parcela?';
    let message = 'Si acepta se borrará toda la información del mismo';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.CATASTRO_PARCELA_DELETE, 'Eliminar');
  }

  else if(controller === 'relevamiento_delete') {

    let title = '¿Desea Eliminar el Relevamiento?';
    let message = 'Si acepta se borrará toda la información del mismo';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.RELEVAMIENTO_DELETE, 'Eliminar');
  }

  else if(controller === 'arbol_poda_delete') {

    let title = '¿Desea Eliminar el Arbol?';
    let message = 'Si acepta se borrará toda la información del mismo';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.ARBOL_PODA_DELETE, 'Eliminar');
  }

  else if(controller === 'arbol_others_delete') {

    let title = '¿Desea Eliminar el Arbol?';
    let message = 'Si acepta se borrará toda la información del mismo';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.ARBOL_OTHERS_DELETE, 'Eliminar');
  }

  else if(controller === 'relevamiento_pre_delete') {

    let title = '¿Desea Eliminar el Relevamiento?';
    let message = 'Si acepta se borrará toda la información del mismo';
    
    dialogDeleteConfirm(element, title, message, URLS_DELETE.RELEVAMIENTO_PREX_DELETE, 'Eliminar');
  }







}


function dialogDeleteConfirm(element, title, message, url, txt_button) {

    
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

    
    let open_icon = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>'



    let info_icon = '<svg xmlns="http://www.w3.org/2000/svg" class="icon text-red" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'+ 
        '<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>'+
        '<path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" stroke-width="0" fill="currentColor"></path>'+
        '</svg>';

    let id = element.getAttribute('attr');
    let id2 = element.getAttribute('attr2');
   


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


    texto_ = (txt_button.toString() == null || txt_button.toString() == undefined) ? ' Eliminar' : txt_button.toString();
    

    btn_aceptar.innerHTML = trash_icon +  texto_ 

    btn_aceptar.addEventListener('click', function(){
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');

        if(id2 == undefined || id2 == null){
          window.location = url + id;
        } else {
          window.location = url + id + '/' + id2;
        }

      
        
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


function modalError(element, title, message, url) {




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



  let info_icon = '<svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-danger icon-lg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">'
         +  '<path stroke="none" d="M0 0h24v24H0z" fill="none" />'
          + '<path d="M12 9v2m0 4v.01" />'
          + '<path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />'
        + '</svg>';



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
  div_title.classList.add("text-center");
  div_title.innerHTML = title;

  let div_info = document.createElement("div");
  div_info.innerHTML = info_icon + ' <h3 class="text-secondary">' + message + '</h3>';
  div_info.classList.add('text-center');

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
  btn_aceptar.innerHTML = 'Aceptar';

  if(url != null){
      btn_aceptar.addEventListener('click', function(){
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        window.location = url;
        
    });
  } else {

    btn_aceptar.addEventListener('click', function(){
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      
  });

  }

  



  div_footer.appendChild(btn_aceptar);

  div2.appendChild(div_footer);


  div1.appendChild(div2);
  modal.appendChild(div1);


  document.body.classList.add('modal-open');
  document.body.appendChild(modal);


}

