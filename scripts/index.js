
var juanPablo = {
    usuario: "juan",
    password: "pablo"
}
var santiago = {
    usuario: "santiago",
    password: "rincon" 
}

var inputNombre = document.getElementById('usuario');
var inputPassword = document.getElementById('password')
var boton = document.getElementById('botonIniciarSesion')

boton.addEventListener('click', validarRegistro);

function validarRegistro(e){
    e.preventDefault();
    var usuario = inputNombre.value;
    var password = inputPassword.value;

    if(usuario == juanPablo.usuario && password == juanPablo.password){
        window.location.replace("./JuanPablo.html");

    }
    else if(usuario == santiago.usuario && password == santiago.password){
    window.location.replace("./Pagina Santiago.html")
    }
    else
    {
        window.location.replace("./Error.html");
    }
}
