document.addEventListener("DOMContentLoaded", function() {
    // Determina o caminho base para os componentes.
    // Se a página atual estiver na pasta 'paginas', o caminho para os componentes é o diretório atual.
    // Se a página atual estiver na raiz (como index.html), o caminho será 'paginas/'.
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const basePath = isIndexPage ? 'paginas/' : '';
    
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
