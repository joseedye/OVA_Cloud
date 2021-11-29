
var seccion = document.getElementById("videoactividad");
var texto = document.getElementById('texto');
var video = document.getElementById('videomother');
var idimg ="35";

//iniciar página
window.onload = function () {
    cargarnombre();
    ocultar(2);
    ocultar(3);
    ocultar(4);
    videootexto(12);
}

//cargar nombre
function cargarnombre (){

    var nombre = localStorage.nombre;
    var apellido = localStorage.apellido;
    document.getElementById("nombres").innerText = nombre +" "+apellido;
}

function videootexto(ultima) {
    if (!document.getElementById('imagenes' + idimg).classList.contains('ocultar')) {  borrarimg(); }

   
    switch (ultima) {

       

        case 12: {aparecevideo(); aparecetexto(); ponervideo("8jYM6BKYh5g",12); ponertexto(ultima); break; }

        case 13: {aparecetexto(); aparecevideo();  ponervideo("UY7u2tlf8cQ",13); ponertexto(ultima); break;  }

        case 14: {aparecevideo(); aparecetexto();  ponervideo("ebNbF3rP7Oo",14); ponertexto(ultima);break; }

        case 15: {aparecevideo(); ocultartexto();  ponervideo("HtwAPdU0RT0",15); break;  }

        case 16: {aparecevideo(); ocultartexto();  ponervideo("ZwDaipDCqHk",16); break;  }

        case 17: {ocultartexto(); ocultarvideo();  ponersopa(ultima,"sopa1.htm"); break;  }

        case 22: {aparecevideo(); aparecetexto(); ponervideo("8jYM6BKYh5g",22); ponertexto(); break; }

        case 23: {ocultartexto(); aparecevideo();  ponervideo("qedHi1tqNBg",23);  break;  }

        case 24: {aparecevideo(); ocultartexto();  ponervideo("qedHisgfd1tqNBg",24); break; }

        case 25: {aparecevideo(); ocultartexto();  ponervideo("qedHisgfd1tqNBg",25); break;  }

        case 26: {aparecevideo(); aparecetexto();  ponervideo("qedHisgfd1tqNBg",26); break;  }

        case 27: {ocultartexto(); aparecevideo();  ponervideo("qedHi1tqNBg",27);  break;  }

        case 28: {aparecevideo(); ocultartexto();  ponervideo("qedHisgfd1tqNBg",28); break; }

        case 29: {aparecevideo(); ocultartexto();  ponervideo("qedHisgfd1tqNBg",29); break;  }

        case 291: {aparecevideo(); aparecetexto();  ponervideo("qedHisgfd1tqNBg",291); break;  }

        case 292: {aparecevideo(); aparecetexto();  ponervideo("qedHisgfd1tqNBg",292); break;  }

        case 32: {aparecevideo(); ponertexto(32);  ponervideo("8jYM6BKYh5g",32); break; }
        case 33: {aparecevideo(); ponertexto(33);  ponervideo("8jYM6BKYh5g",33); break; } 
        case 34: {aparecevideo(); ponertexto(34);  ponervideo("lCR7rA3BMLI",34); break; }

    }

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

var contenido = [[], [12, 13, 14, 15, 16,17], [22, 23, 24, 25, 26, 27, 28, 29, 291, 292], [32, 33, 34], [42, 43, 44, 45]];

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
function ponertexto(id){    
    
    var titul = 'Acerca de este ova';
    var parrafo = ' <p>La computación en la nube cada vez toma más fuerza en casi todas las plataformas tecnológicas de la actualidad, en muchos sistemas de la información hacemos uso'+
        ' de la computación en la nube y probablemente no nos hemos dado cuenta. Las grandes industrias están a la vanguardia de la computación en la nube, Amazon Web Service (AWS) Wittig, M., & Wittig, A. (2018). Amazon web services in'+
        'action. Simon and Schuster., Microsoft Azure, Oracle Cloud y Google Cloud, son un ejemplo de estas empresas que ofrecen servicios informáticos en la nube en todo el mundo. </p>';
    var descripcio = 'Descripción';

var parrafo1 = '<br><p>Hoy en día la tecnología, inmersa en la red de redes; el internet. Está involucrando cada vez más las actividades humanas; vivimos en una era de transformación digital de forma acelerada, y cada vez es un reto para los expertos poder controlar todo lo que esta sucediendo.'+
'La informática no es la misma de hace 30 años, y la computación en la nube ha marcado una diferencia radical, que hasta ahora se ha posicionado fuertemente y sigue creciendo  a una velocidad exponencial.'+
'</p><br><p>Definición de computación en la nube'+
'</p><br><p>Significa almacenar y acceder a datos y programas a través de Internet de forma remota en lugar del disco duro local.</p>';

parrafo1+= '<br><div class="udlite-heading-xl">Definición por parte de NIST</div>';
parrafo1+= '<br><p>Modelo que permite el acceso a la red a pedido, conveniente y ubicuo a un grupo compartido de recursos de computación configurables (por ejemplo, redes , servidores, almacenamiento, aplicaciones y servicios) que se pueden aprovisionar y liberar rápidamente con un mínimo esfuerzo de gestión o interacción del proveedor de servicios.</p>';
   // var titulodom = document.getElementById('titulo').innerText = titul;
    //var parrafo1 = document.getElementById('parrafo1').innerHTML = parrafo;
    //var descripcion1 = document.getElementById('descripcion').innerText = descripcio;

    if(id==12){
        document.getElementById('titulo').innerText = titul;
        document.getElementById('parrafo1').innerHTML = parrafo;
    }

if(id==13){

    document.getElementById('parrafo1').innerHTML = parrafo1;
}

if(id==14){
    document.getElementById('titulo').innerHTML = '<br><br><div class="udlite-heading-xl">Caracteristicas</div>';
 document.getElementById('parrafo1').innerHTML = '<img src="./img/caracteristicas.png">';
}

    if (id>=32&&id<=34){
       // document.getElementById('imagenesimport').innerHTML = hibrida;
       document.getElementById('imagenes'+id).classList.remove('ocultar');
       idimg=id;
    }


}

//poner sopa
function ponersopa(id,url){
document.getElementById('sopas').classList.remove('ocultar');
idimg=id;
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
    }
  }


  //actividades vistas

  
  function actividadvista(id){
    var visto = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"'+
    'class="bi bi-check-square-fill" viewBox="0 0 16 16"> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>'+
    '</svg>';
document.getElementById('visto'+id).innerHTML = visto;
  }


