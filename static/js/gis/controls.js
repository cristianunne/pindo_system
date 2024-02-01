

function openSidebarLeft(button)
{


    if(!button.classList.contains('active')){
        button.classList.add('active');

        sidebar_right = document.getElementById('sidebar-right');
    
       
        sidebar_right.style.width = "0%";
    
    
        mapa = document.getElementById('map');
    
        mapa.style.width = "100%";

        setTimeout(function () {
            map.invalidateSize();

        }, 1200);

      
    } else {

        button.classList.remove('active');

        sidebar_right = document.getElementById('sidebar-right');
    
       
        sidebar_right.style.width = "20%";
    
    
        mapa = document.getElementById('map');
    
        mapa.style.width = "80%";
        setTimeout(function () {
            map.invalidateSize();

        }, 2500);
    }

   


}