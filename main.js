// Array de URLs das páginas
const urls = [
    'textos/conteudo.txt',
    'textos/conteudoprova.txt',
    // Adicione mais URLs conforme necessário
];

const divIds = [
    'horario',
    'conteudoprova',
];

// Função para fazer fetch de uma página
async function fetchPagina(url, divId) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        document.getElementById(divId).innerHTML = `<p>${data}</p>`;
        // Aqui você pode processar o conteúdo da página como desejar
    } catch (error) {
        console.error(`Erro ao buscar a página ${url}:`, error);
    }
}

for (let i = 0; i < Math.min(urls.length, divIds.length); i++) {
    fetchPagina(urls[i], divIds[i]);
}
