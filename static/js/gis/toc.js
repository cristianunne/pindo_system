function filterRodalesTOC(input)
{
    resetRodalesTOC();

    let textFilter = input.value.toString();

    let rodalesTOC = document.getElementById('list-rodales');

    if(textFilter != ''){
        if (rodalesTOC.hasChildNodes){

            for(let i = 0; i < rodalesTOC.childNodes.length; i++){
      
              if(rodalesTOC.childNodes[i].nodeType == Node.ELEMENT_NODE){
      
                  if(rodalesTOC.childNodes[i].nodeName === 'A'){
      
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
      
                  if(rodalesTOC.childNodes[i].nodeName === 'A'){
      
                    rodalesTOC.childNodes[i].style.display = 'block';
      
                  }
      
              }
      
            }
          }

    }

   

}

function resetRodalesTOC()
{
    let rodalesTOC = document.getElementById('list-rodales');
    if (rodalesTOC.hasChildNodes){

        for(let i = 0; i < rodalesTOC.childNodes.length; i++){
  
          if(rodalesTOC.childNodes[i].nodeType == Node.ELEMENT_NODE){
  
              if(rodalesTOC.childNodes[i].nodeName === 'A'){
  
                rodalesTOC.childNodes[i].style.display = 'block';
  
              }
  
          }
  
        }
      }
}

function activeRodal(element)
{
    
    let cod_sap = element.getAttribute('attr');
    let rodal_id = element.getAttribute('rodal_id');

    //recorro la lista de rodales y agrego al mapa
    if (element.classList.contains('item-active')) {
      element.classList.remove('item-active')

      removeLayerOverlay(rodal_id, TYPE_LAYERS.RODALES);
      removeItemSidebarRight(cod_sap);

    
    } else {
      element.classList.add('item-active')

      //agrego la capa al mapa
      loadRodalesToMap(element, rodal_id);

      createItemRodalesSidebar(rodal_id, cod_sap);

    }
  

}

function deactiveRodal(element)
{

}

function setErrorItemRodal(element)
{
  element.classList.remove('item-active')
  element.classList.add('item-error')

}