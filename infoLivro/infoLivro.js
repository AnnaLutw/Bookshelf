const params = new URLSearchParams(location.search)
let id = params.get('id');
dadosLivros = JSON.parse (localStorage.getItem('books'));
let idxFilme = dadosLivros.items.findIndex((elem) => elem.id == id)

if(idxFilme>-1){
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
                    <li class="mb-3"><strong>Avaliação:</strong> <span>${livro.volumeInfo.averageRating}</span></li>

                </ul>
                <h3 class="mb-3">Descrição do livro:</h3>
                <p>${livro.volumeInfo.description}</p>
            </div>
        </div>
`
}
else{
    alert('Livro não encontrado')
}

"Codigo do Livro: " + params.get('id');