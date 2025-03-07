const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function manipularStrings(array) {
    // 1. Converte todas as strings para maiúsculas
    const arrayMaiusculas = array.map((str) => str.toUpperCase());
    console.log(`Array em maiúsculas: ${arrayMaiusculas.join(', ')}`);

    // 2. Filtra as strings que começam com a letra 'A'
    const arrayFiltrado = array.filter((str) => str.toUpperCase().startsWith('A'));
    console.log(`Strings que começam com 'A': ${arrayFiltrado.join(', ')}`);

    // 3. Cria um novo array com o comprimento de cada string
    const arrayComprimentos = array.map((str) => str.length);
    console.log(`Comprimento de cada string: ${arrayComprimentos.join(', ')}`);

    // Fecha a interface readline
    readline.close();
}

function main() {
    // Array inicial para testes
    const array = ["Maçã", "Banana", "Abacaxi", "Laranja"];
    console.log(`Array inicial: ${array.join(', ')}`);

    // Chama a função para manipular o array de strings
    manipularStrings(array);
}

main();