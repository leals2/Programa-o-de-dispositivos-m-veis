const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que recebe o objeto livro e retorna uma string com título e autor
function formatarLivro(livro) {
    const { titulo, autor } = livro; // Desestruturação do objeto
    return `Título: ${titulo}, Autor: ${autor}`;
}

function main() {
    // Objeto para armazenar os dados do livro
    const livro = {};

    // Solicita os dados do livro ao usuário
    readline.question('Digite o título do livro: ', (titulo) => {
        livro.titulo = titulo;

        readline.question('Digite o autor do livro: ', (autor) => {
            livro.autor = autor;

            readline.question('Digite o ano de publicação do livro: ', (ano) => {
                livro.ano = parseInt(ano, 10);

                // Exibe o objeto completo
                console.log('Objeto livro criado:', livro);

                // 1. Desestruturação do título e autor
                const { titulo: tituloDesestruturado, autor: autorDesestruturado } = livro;
                console.log(`Título desestruturado: ${tituloDesestruturado}`);
                console.log(`Autor desestruturado: ${autorDesestruturado}`);

                // 2. Chama a função para formatar o livro
                const livroFormatado = formatarLivro(livro);
                console.log('Livro formatado:', livroFormatado);

                // Fecha a interface readline
                readline.close();
            });
        });
    });
}

main();