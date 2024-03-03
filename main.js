// Array de URLs das páginas
const urls = [
    'textos/conteudo.txt',
    'textos/conteudoprova.txt',
    // Adicione mais URLs conforme necessário
];

// Função para fazer fetch de uma página
async function fetchPagina(url, divId) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        document.getElementById(divId).innerHTML = data;
        // Aqui você pode processar o conteúdo da página como desejar
    } catch (error) {
        console.error(`Erro ao buscar a página ${url}:`, error);
    }
}

fetchPagina('conteudo.txt', 'horario')
fetchPagina('conteudoprova.txt', 'conteudoprova')


