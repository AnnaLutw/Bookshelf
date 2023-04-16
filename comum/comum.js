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

/*pesquisar*/ 
pesquisar=function(){
    const campoPesquisa = document.getElementById('campoBuscar').value;
    if(campoPesquisa !== ''){
        window.location='../pesquisados/index.html?query='+ campoPesquisa
    }
    else{
        alert("Preencha o campo")
    }
    
  }
  
  document.body.onload= init;

  
  //<![CDATA[
    $(window).on('load', function () {
        $('#preloader .inner').fadeOut();
        $('#preloader').delay(50).fadeOut('slow'); 
        $('body').delay(100).css({'overflow': 'visible'});
      })
      //]]>
      
//APERTAR ENTER
 document.addEventListener("keypress", function(e) {
   if(e.key === 'Enter') {
        
        var btn = document.querySelector("#btnPesquisa");
          
        btn.click();
        
    }
});