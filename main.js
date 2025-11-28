document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar um componente HTML (como header ou footer) em um elemento placeholder.
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
    // Como header.html e footer.html estão na mesma pasta, o caminho é direto.
    loadComponent('header-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
});
