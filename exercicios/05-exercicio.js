const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularOperacoes(numero) {
    // 1. Calcula o dobro
    const dobro = numero * 2;

    // 2. Calcula o triplo
    const triplo = numero * 3;

    // 3. Calcula o quadrado
    const quadrado = numero * numero;

    // Retorna os resultados
    return { dobro, triplo, quadrado };
}

function main() {
    // Solicita o número ao usuário
    readline.question('Digite um número: ', (entrada) => {
        const numero = parseFloat(entrada);

        // Verifica se a entrada é um número válido
        if (isNaN(numero)) {
            console.log('Por favor, digite um número válido.');
        } else {
            // Chama a função para calcular as operações
            const resultados = calcularOperacoes(numero);

            // Exibe os resultados
            console.log(`Número digitado: ${numero}`);
            console.log(`Dobro: ${resultados.dobro}`);
            console.log(`Triplo: ${resultados.triplo}`);
            console.log(`Quadrado: ${resultados.quadrado}`);
        }

        // Fecha a interface readline
        readline.close();
    });
}

main();