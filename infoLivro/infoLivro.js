const params = new URLSearchParams(location.search)
let id = params.get('id');
dadosLivros = JSON.parse(localStorage.getItem('books'));
let idxFilme = dadosLivros.items.findIndex((elem) => elem.id == id)
const imagemPadrao = 'http://books.google.com/books/content?id=-bF2CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
if (idxFilme > -1) {
    let livro = dadosLivros.items[idxFilme];
    document.getElementById('detalheLivros').innerHTML = `
    <div class="row">
            <div class="col-md-4">
                <img src="${livro.volumeInfo.imageLinks ? livro.volumeInfo.imageLinks.thumbnail : imagemPadrao}" alt="Capa do livro" id="capaLivro" class="img-fluid rounded">
            </div>
            <div class="col-md-8">
                <h2 class="mb-3">${livro.volumeInfo.title}</h2>
                <ul class="list-unstyled">
                    <li class="mb-1"><strong>Autor:</strong> <span>${livro.volumeInfo.authors}</span></li>
                    <li class="mb-1"><strong>Data de publicação:</strong> <span>${livro.volumeInfo.publishedDate}</span></li>
                    <li class="mb-3"><strong>Lingua:</strong> <span>${livro.volumeInfo.language}</span></li>
                    <li class="mb-3"><strong>Total Paginas:</strong> <span>${livro.volumeInfo.pageCount}</span></li>
                    <li id="verifica" class="mb-3"><strong>Avaliação:</strong> <span>${livro.volumeInfo.averageRating}</span></li>
                    <li  class="mb-3"> <a onclick="adicionarLivroLido()" href="" class="btn btn-dark">+ Já lido</a></li>
                    <li class="mb-3"> <a href="/perfil/PaginaPerfil.html?id=${livro.id}" class="btn btn-dark">+ favorito</a></li>
                    
                </ul>
                <h3 class="mb-3">Descrição do livro:</h3>
                <p>${livro.volumeInfo.description}</p>
            </div>
        </div>
`
}
else {
    alert('Livro não encontrado')
}

"Codigo do Livro: " + params.get('id');

alertaAdc = function () {
    let usuarioString = localStorage.getItem('usuario');
    if (usuarioString == undefined || usuarioString == 'undefined') {

        alert("faça login para adicionar livros aos favoritos");
    }
    else {
        document.getElementById('verifica').innerHTML = ` <li  class="mb-3"> <a onclick="alertaAdc()" href="/perfil/PaginaPerfil.html?id=${livro.id}" class="btn btn-dark">+ Já lido</a></li>`
    }

}


const adicionarLivroLido = () => {
    const params = new URLSearchParams(location.search);
    let id = params.get('id');
    const body = {
        volumeId: id,
        reason: "REASON_UNDEFINED"
    };

    // Verificar autenticação usando gapi
    gapi.auth2.getAuthInstance().signIn().then(function () {
        // Autenticação bem-sucedida
        let url = "https://books.googleapis.com/books/v1/mylibrary/bookshelves/4/addVolume";
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log("Livro adicionado à estante de livros lidos");
                } else {
                    console.error("Erro ao adicionar livro à estante de livros lidos");
                }
            }
        };

        xhr.send(JSON.stringify(body));
    }, function () {
        // Autenticação falhou
        console.error("Falha na autenticação");
    });
};


/* gapi.load('client', function () {
    gapi.client.load('books', 'v1', function () {
        const request = gapi.client.request({
            path: "https://www.googleapis.com/books/v1/mylibrary/readingpositions",
            method: "POST",
            body: JSON.stringify(body)
        });

        request.execute(function (response) {
            console.log("Livro adicionado à estante de livros lidos:", response);
        });
    });
}); */

