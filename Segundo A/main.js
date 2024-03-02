// Função para buscar o conteúdo do arquivo de texto
function buscarConteudoArquivo() {
    fetch('conteudo.txt')
        .then(response => response.text())
        .then(data => {
            // Atualiza o conteúdo da div com id "conteudo" com o texto do arquivo
            document.getElementById('conteudo').textContent = data;
        })
        .catch(error => {
            console.error('Ocorreu um erro ao buscar o arquivo de texto:', error);
        });
}

// Chamada inicial para buscar o conteúdo do arquivo de texto
buscarConteudoArquivo();
