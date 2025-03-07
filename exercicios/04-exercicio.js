const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function imprimirNumeros() {
    // Solicita o número final ao usuário
    readline.question('Digite o número final (por exemplo, 100): ', (numeroFinal) => {
        const limite = parseInt(numeroFinal, 10);

        // Verifica se a entrada é um número válido
        if (isNaN(limite) || limite < 1) {
            console.log('Por favor, digite um número válido maior que 0.');
        } else {
            // Usa um laço for para imprimir os números de 1 até o limite
            for (let i = 1; i <= limite; i++) {
                console.log(i);
            }
        }

        // Fecha a interface readline
        readline.close();
    });
}

imprimirNumeros();