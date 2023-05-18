logout = function(){
    localStorage.setItem ('usuario', undefined);
    window.location.href= "/index.html";

}
const initLogin = function(){
    let usuarioString = localStorage.getItem('usuario'); 
    if(usuarioString == undefined || usuarioString == 'undefined'){
        
        document.getElementById('alinhaLoginCadastro').innerHTML=`     
        <ul class="listaNav"> 
            <li class="nav-item" >
                <a href="/login/login.html"> <button class="btn btn-primary" id="btn">LOGIN</button></a>
            </li>
            <li class="nav-item" >
                <a href="/cadastro/cadastro.html"> <button class="btn btn-primary" id="btn">CADASTRO</button></a>
            </li>
            
        </ul>
        `;
    }else{
        let usuario = JSON.parse(usuarioString);
        if(usuario != null && usuario != "" ){
            document.getElementById('alinhaLoginCadastro').innerHTML=`
            <ul class="listaNav">
                <li class="nav-item" >
                    <span id="loginUser"> ${usuario.usuario}</span>
                </li>
                <li class="nav-item" >
                    <a href="/perfil/PaginaPerfil.html"> <button class="btn btn-primary" id="btn">Perfil</button></a>
                </li>
                <li class="nav-item" >
                    <a href="" onclick="logout()"> <button class="btn btn-primary" id="btn">SAIR</button></a>
                </li>
            </ul>
            `;
        }      
    }
}

document.body.onload= initLogin;


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


  
//NEGOCIO DE LOADING
//<![CDATA[
    $(window).on('load', function () {
        $('#preloader .inner').fadeOut();
        $('#preloader').delay(500).fadeOut('slow'); 
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