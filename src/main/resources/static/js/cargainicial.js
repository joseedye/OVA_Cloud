window.onload = function () {
 cargarnombre();
    ocultar(2);
    ocultar(3);
    ocultar(4);
    videootexto(12);
cargainicial();
}



async function cargainicial (){

    const request = await fetch('/r', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
     const respuesta = await request.json();

for(let i = 0; i < respuesta.length; i++) {
    if(respuesta[i].visto === "1"){
    actividadvista(respuesta[i].id);
    }

}


}