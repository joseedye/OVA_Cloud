
var seccion = document.getElementById("videoactividad");
var texto = document.getElementById('texto');
var video = document.getElementById('videomother');
var idimg ="35";

//cargar nombre
function cargarnombre (){
    var nombre = localStorage.nombre;
    var apellido = localStorage.apellido;
    document.getElementById("nombres").innerText = nombre +" "+apellido;
}

function videootexto(ultima) {
   // if (!document.getElementById('imagenes' + idimg).classList.contains('ocultar')) {  borrarimg(); }

   
    switch (ultima) {

        case 12:
        case 13:
        case 14:
        case 15:
        case 16: {aparecevideo();  aparecetexto();   url(ultima); ponertexto(ultima); ocultarsopa(); break;  }
        case 17: {ocultartexto(); ocultarvideo();  ponersopa(ultima); break;  }


        case 22:  {aparecevideo(); aparecetexto();  url(ultima); ponertexto(ultima); ocultarsopa(); break; }
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:{aparecevideo(); aparecetexto();  url(ultima); ponertexto(ultima); ocultarsopa();  break;  }
        case 281: {ocultartexto(); ocultarvideo();  ponersopa(ultima); break;  }
        case 29:
        case 291:
        case 292: {aparecevideo(); aparecetexto();  url(ultima); ponertexto(ultima); ocultarsopa();  break;  }
        case 293: {ocultartexto(); ocultarvideo();  ponersopa(ultima); break;  }



        case 32:
        case 33:
        case 34:

        case 42:
        case 43:
        case 44:
        case 45: {aparecevideo(); aparecetexto();  url(ultima); ponertexto(ultima); ocultarsopa(); break; }

    }

}

async function url(id){
 const request = await fetch('/respecial/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

 const respuesta = await request.text();
 ponervideo(respuesta,id);
}

function borrarimg(){
    document.getElementById('imagenes'+idimg).className += ' ocultar';

}
function ocultarvideo() {
    if (!video.classList.contains('ocultar')) {
        video.className += 'ocultar';
    }
}
function ocultartexto() {
    if (!texto.classList.contains('ocultar')) {
        texto.className += 'ocultar';
        }
}
function aparecevideo() {
    if (video.classList.contains('ocultar')) {
        video.classList.remove('ocultar');
    }  }
function aparecetexto() {
    if (texto.classList.contains('ocultar')) {
        texto.classList.remove('ocultar');
    }
}

function salir() {
    localStorage.token = undefined;
    localStorage.email = undefined;
    seccion.innerText = 'cree una cuenta para ver las actividades';
    window.location.href = '/';
}

//funcionalidades acordeon

var activo = 12;
function activar(id) {

    if (id === activo) { return }
    var elemento = document.getElementById(id + '');
    elemento.classList.remove("curriculum-item-link--curriculum-item--KX9MD");
    elemento.className = "curriculum-item-link--curriculum-item--KX9MD curriculum-item-link--is-current--31BPo";
    videootexto(id);
    desactivar(id);
}

function desactivar(activ) {

    var elemento = document.getElementById(activo + '');
    elemento.classList.remove("curriculum-item-link--is-current--31BPo");
    activo = activ;

}

var contenido = [[], [12, 13, 14, 15, 16,17], [22, 23, 24, 25, 26, 27, 28, 281, 29, 291, 292, 293], [32, 33, 34], [42, 43, 44, 45]];

function ocultar(id) {
    var oculta = false;
    if (document.getElementById(id + '2').classList.contains('ocultar')) { oculta = true }

    var elemento;

    for (let index = 0; index < contenido[id].length; index++) {
        elemento = document.getElementById(contenido[id][index] + '');
        oculta === true ? elemento.classList.remove("ocultar") : elemento.className += ' ocultar';


    }
    oculta === false ? document.getElementById('svg' + id).classList.remove('rotar') : document.getElementById('svg' + id).className = 'rotar';
}

//poner texto
 async function ponertexto(id){

 const request = await fetch('/respecialt/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

 const respuesta = await request.text();

   document.getElementById('textos').innerHTML = respuesta;

}

//poner sopa
async function ponersopa(id){

 const request = await fetch('/respecialt/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

 const respuesta = await request.text();

var sopp = document.getElementById('sopas');
var ifrem =  '<iframe src="'+respuesta+'" width="840" height="720"></iframe>' ;
sopp.innerHTML = ifrem;
if (sopp.classList.contains('ocultar')) {
        sopp.classList.remove('ocultar');
    }
idimg=id;
}

function ocultarsopa(){
var sopp = document.getElementById('sopas');
if (!sopp.classList.contains('ocultar')) {
        sopp.className += 'ocultar';
        }
}

  // create youtube player
var videoreproducido = "";
  function ponervideo(url,id)  {

      player = null;
      videoreproducido=id;
document.getElementById("videoactividadexterno").innerHTML = '<div id="videoactividad"></div>';

      player = new YT.Player("videoactividad", {
          width: "840",
          height: "400",
          videoId: url,
          events: {
              // onReady: onPlayerReady,
              onStateChange: onPlayerStateChange,
          },
      });
  }


  // autoplay video
  //function onPlayerReady(event) {
  //event.target.playVideo();
  //}

  // when video ends
  function onPlayerStateChange(event) {
    if (event.data === 0) {
        actividadvista(videoreproducido);
        guardaractividadvista(videoreproducido);
    }
  }


  //actividades vistas

  
  function actividadvista(id){
    var visto = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"'+
    'class="bi bi-check-square-fill" viewBox="0 0 16 16"> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>'+
    '</svg>';
document.getElementById('visto'+id).innerHTML = visto;
  }


async function guardaractividadvista (iddeactividad){

    const request = await fetch('ruv/'+localStorage.id+'/'+iddeactividad, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

}

