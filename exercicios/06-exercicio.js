const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function manipularArray(array) {
    // 1. Adiciona um número ao final do array
    readline.question('Digite um número para adicionar ao final do array: ', (numero) => {
        const novoNumero = parseFloat(numero);

        if (isNaN(novoNumero)) {
            console.log('Por favor, digite um número válido.');
            readline.close();
            return;
        }

        array.push(novoNumero);
        console.log(`Array após adicionar o número: ${array}`);

        // 2. Remove o primeiro número do array
        const primeiroNumeroRemovido = array.shift();
        console.log(`Array após remover o primeiro número: ${array}`);
        console.log(`Número removido: ${primeiroNumeroRemovido}`);

        // 3. Encontra o maior número do array
        const maiorNumero = Math.max(...array);
        console.log(`Maior número do array: ${maiorNumero}`);

        // 4. Encontra o menor número do array
        const menorNumero = Math.min(...array);
        console.log(`Menor número do array: ${menorNumero}`);

        // Fecha a interface readline
        readline.close();
    });
}

function main() {
    // Array inicial para testes
    const array = [10, 20, 30, 40, 50];
    console.log(`Array inicial: ${array}`);

    // Chama a função para manipular o array
    manipularArray(array);
}

main();