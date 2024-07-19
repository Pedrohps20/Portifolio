function fetchGitHub() {
    fetch('https://api.github.com/users/Pedrohps20',{
        token: 
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector('#perfil').innerHTML = `
            <img src="${data.avatar_url}" alt="${data.name}" class="img-fluid rounded-circle">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>
            <a href="mailto:pedropratessouza@live.com" class="btn btn-primary">Contato</a>
            <a href="https://www.linkedin.com/in/pedro-henrique-55162a162" class="btn btn-primary">LinkedIn</a>
        `;
    });
}

function fetchRepositorios() {
    fetch(`/repositorios`)
    .then(response => response.json())
    .then(data => {
        var reposlist = document.getElementById("reposlist");
        var reposList = "";
        data.forEach(repo => {
            reposList += `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${repo.url_img}" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${repo.nome}</h5>
                            <p class="card-text">${repo.descricao}</p>
                            <p>Data de Criação: ${repo.data_criacao}</p>
                            <p>Linguagens: ${repo.linguagens}</p>
                            <a href="${repo.html_url}" class="btn btn-primary" target="_blank">Ver no GitHub</a>
                        </div>
                    </div>
                </div>
            `;
        });
        reposlist.innerHTML = reposList;
    });
}

function fetchConteudos() {
    fetch(`/conteudos`)
    .then(response => response.json())
    .then(data => {
        let carouselItems = '';
        data.forEach((item, index) => {
            carouselItems += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img class="d-block w-100" src="${item.url_imagem}" alt="${item.titulo}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${item.titulo}</h5>
                        <p>${item.descricao}</p>
                        <a href="${item.url_noticia}" class="btn btn-primary" target="_blank">Ver notícia</a>
                    </div>
                </div>
            `;
        });
        document.querySelector('#conteudo-sugerido').innerHTML = carouselItems;
    });
}

function fetchColegas() {
    fetch(`/colegas`)
    .then(response => response.json())
    .then(data => {
        var colegasList = "";
        data.forEach(colega => {
            colegasList += `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img class="card-img-top" src="${colega.url_imagem}" alt="${colega.nome}">
                        <div class="card-body">
                            <h5 class="card-title">${colega.nome}</h5>
                            <p>${colega.descricao}</p>
                            <a href="${colega.html_url}" class="btn btn-primary" target="_blank">Perfil no GitHub</a>
                        </div>
                    </div>
                </div>
            `;
        });
        document.querySelector('#colegas-list').innerHTML = colegasList;
    });
}

fetchGitHub();
fetchRepositorios();
fetchConteudos();
fetchColegas();
