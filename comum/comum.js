logout = function(){
    localStorage.setItem ('usuario', undefined);
    window.location.href= "/index.html";

}

init = function(){
    let usuarioString = localStorage.getItem('usuario');
    if(usuarioString != undefined && usuarioString != 'undefined'){
        let usuario = JSON.parse(usuarioString);
        if(usuario != null && usuaio != ""){

            document.getElementById('loginUser').innerHTML = usuario.usuario;
        }
        else{
            document.getElementById('loginUser').innerHTML = '  <a style="color :white" class="nav-link" href="/login/login.html">LOGIN</a>';
        }
    }
}