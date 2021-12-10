async function entrar() {

    let datos = {};

    datos.pasword = document.getElementById("password").value;
    datos.email = document.getElementById("username").value;

    const request = await fetch('api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
   const respuesta = await request.json();



    if(respuesta.nombre!="no"){
        localStorage.token = respuesta;
        localStorage.email = datos.email;
        localStorage.nombre = respuesta.nombre;
        localStorage.apellido = respuesta.apellido;
        localStorage.id = respuesta.id;
        window.location.href = 'inicio.html';

    }else{
var crecencialesinco = '<div style="color:#FF0000">credenciales o usuario incorrecto</div>';
       document.getElementById("incorrecto").innerHTML = crecencialesinco;

    }

}