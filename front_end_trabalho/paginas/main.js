document.addEventListener("DOMContentLoaded", function() {
    // Determina o caminho base relativo para a pasta 'paginas' onde os componentes estão.
    const path = window.location.pathname;
    let basePath = '';

    if (path.includes('/paginas/crud/')) {
        basePath = '../../paginas/';
    } else if (path.includes('/paginas/')) {
        basePath = ''; // Já está na pasta 'paginas' ou em uma subpasta direta
    } else { // Raiz do projeto (ex: index.html)
        basePath = 'paginas/';
    }
    
    const loadComponent = (selector, url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Não foi possível carregar ${url}. Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const element = document.querySelector(selector);
                if (element) {
                    element.innerHTML = data;
                } else {
                    console.error(`Elemento placeholder "${selector}" não foi encontrado na página.`);
                }
            })
            .catch(error => console.error(`Erro ao carregar ${url}:`, error));
    };

    // Carrega os componentes usando o caminho do diretório do script como base
    loadComponent('header-placeholder', `${basePath}header.html`);
    loadComponent('footer-placeholder', `${basePath}footer.html`);
});
