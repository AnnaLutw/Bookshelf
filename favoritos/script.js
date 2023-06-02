verificaLogin = function(){
    
    let usuarioString = localStorage.getItem('usuario'); 
    if(usuarioString == undefined || usuarioString == 'undefined' || usuarioString == null){
        document.getElementById("conteudoFav").innerHTML =`
        <div class="container" style="display: flex; justify-content: center; align-items: center; height: 50vh;">
        <div class="card" style="width: 24rem;">
            <div class="card-body">
                <h5 class="card-title">Faça Login para continuar</h5>
                <p class="card-text">Você precisa estar logado para acessar seus livros favoritos.</p>
                <div class="centered-button" style="display: flex; justify-content: center; align-items: center;">
                    <a href="../login/login.html" class="btn btn-primary">Login</a>
                </div>
            </div>
        </div>
    </div>`
}
    else{
        document.getElementById("conteudoFav").innerHTML =`
        <div id="container-fluid" style="margin-top: 50px;">
            <div class="otherRow" id="listaLivros">
                <div id="container" style="margin-left: 330px;"></div>
              
            </div>
        </div>
        `
    }
}