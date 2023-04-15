const mostraLivro = function(data){

    let dadosHTML ='';
    let dadosLivros = JSON.parse(data.target.response);
    localStorage.setItem('books', data.target.response)
    const imagemPadrao = 'http://books.google.com/books/content?id=-bF2CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api';

    for(let i=0; i<dadosLivros.items.length ; i++){
        let livro = dadosLivros.items[i];
        dadosHTML+=`
        <div class="col-3" id="listaLivros" >
            <div id="books" class="card col-sm-12 "  >
            <a class="cardImg" href="/infoLivro/index.html?id=${livro.id}"> <img class="card-img-top" src="${livro.volumeInfo.imageLinks ? livro.volumeInfo.imageLinks.thumbnail : imagemPadrao}" alt="Card image cap"></a>
                <div class="card-body">
                        <h5 class="card-title">${livro.volumeInfo.title}</h5>
                        <a href="detalhes.html" class="btn btn-dark">+Já li</a>
                    </div>
            </div>
        </div>
        `;

    }
    document.getElementById('container1').innerHTML = dadosHTML;
}
const mostraErro=(data) =>{
    alert('erro na aquisição');
}

const init= function(){
    const param = getParameter('query');
    let xhr=new XMLHttpRequest();
    let url = "https://www.googleapis.com/books/v1/volumes?q=" + param;
    xhr.onload = mostraLivro; 
    xhr.oneerror=
    xhr.open('GET',url, true);
    xhr.send();
}
pesquisar = function(){
    window.location='/pesquisados/index.html?query='+ document.getElementById('campoBuscar').value;
}
document.body.onload= init;

function getParameter(theParameter) {
    var params = window.location.search.substr(1).split('&');

    for (var i = 0; i < params.length; i++) {
        var p = params[i].split('=');
        if (p[0] == theParameter) {
            return decodeURIComponent(p[1]);
        }
    }
    return false;
}
