

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

        }

        case 1 : alert('caso1');



    }



}


function salir(){
    localStorage.token = undefined;
    localStorage.email = undefined;
    seccion.innerText= 'cree una cuenta para ver las actividades';
    window.location.href = '/';
}


