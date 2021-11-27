

var seccion = document.getElementById("videoactividad");


window.onload = function (){
videootexto(11);
ocultar(1);
ocultar(2);
ocultar(3);
ocultar(4);

}



function videootexto (ultima){




    switch (ultima){



        case 11 : {
            
            document.getElementById('videomother').className += ' ocultar';                 
               
                break;
            }

        case 12 : {
            document.getElementById('videomother').className += ' ocultar';       
          
                break; 
            }
           
       

        case 13 : {
            document.getElementById('videomother').classList.remove("ocultar");  
            var video = '<iframe width="840" height="400"\n' +
                'src="https://www.youtube.com/embed/JhCZabY2lpk"\n' +
                'title="YouTube video player"\n' +
                'frameborder="0"\n' +
                'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n' +
                'allowfullscreen></iframe>';             

                seccion.innerHTML= video;
           
            break;

        }
        case 14 : {
            document.getElementById('videomother').classList.remove("ocultar");  
            var video = '<iframe width="840" height="400"\n' +
                'src="https://www.youtube.com/embed/qedHi1tqNBg"\n' +
                'title="YouTube video player"\n' +
                'frameborder="0"\n' +
                'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n' +
                'allowfullscreen></iframe>';             

                seccion.innerHTML= video;
           
            break;

        }
    }



}


function salir(){
    localStorage.token = undefined;
    localStorage.email = undefined;
    seccion.innerText= 'cree una cuenta para ver las actividades';
    window.location.href = '/';
}



//funcionalidades acordeon


var activo = 12;
function activar (id){

    if(id===activo){return}
    var elemento = document.getElementById(id+'');
    elemento.classList.remove("curriculum-item-link--curriculum-item--KX9MD");
    elemento.className= "curriculum-item-link--curriculum-item--KX9MD curriculum-item-link--is-current--31BPo";
videootexto(id);
    
    desactivar(id);
}

function desactivar (activ){

    var elemento = document.getElementById(activo+'');
    elemento.classList.remove("curriculum-item-link--is-current--31BPo");
    activo=activ;

} 

var contenido = [[],[12,13,14,15,16],[22,23,24,25,26,27,28,29,291,292],[32,33,34],[42,43,44,45]];

function ocultar(id){
var oculta = false;
    if ( document.getElementById(id+'2').classList.contains('ocultar') ){oculta =true}

    var elemento;

    for (let index = 0; index < contenido[id].length; index++) {   
    elemento = document.getElementById(contenido[id][index]+''); 
    oculta===true ?   elemento.classList.remove("ocultar") : elemento.className += ' ocultar';
   

    }   
    oculta===false ?  document.getElementById('svg'+ id).classList.remove('rotar'):document.getElementById('svg'+ id).className = 'rotar';
}



