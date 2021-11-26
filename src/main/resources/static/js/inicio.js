

var seccion = document.getElementById("videoactividad");


window.onload = function (){
ultima(0);


}

function ultima (ultima){

    switch (ultima){

        case 0 : {
            var video = '<iframe width="840" height="400"\n' +
                'src="https://www.youtube.com/embed/qedHi1tqNBg"\n' +
                'title="YouTube video player"\n' +
                'frameborder="0"\n' +
                'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n' +
                'allowfullscreen></iframe>';

            if( typeof  localStorage.token === undefined){
                seccion.innerText= 'cree una cuenta para ver las actividades';
            }else{
                seccion.innerHTML= video;
            }
            break;
        }

        case 1 : alert('caso1');
            break;


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
    
    desactivar(id);
}

function desactivar (activ){

    var elemento = document.getElementById(activo+'');
    elemento.classList.remove("curriculum-item-link--is-current--31BPo");
    activo=activ;

} 

var contenido = [[],[12,13,14],[22,23,24]];

function ocultar(id){
var oculta = false;
    if ( document.getElementById(id+'2').classList.contains('ocultar') ){oculta =true}

    var elemento;

    for (let index = 0; index < contenido[id].length; index++) {   
   console.log(id+'2');
   console.log(oculta);
    elemento = document.getElementById(contenido[id][index]+''); 
    oculta===true ? elemento.classList.remove("ocultar") : elemento.className += ' ocultar';
    }   
}



