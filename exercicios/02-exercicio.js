const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularOperacoes() {
    // Solicita os dois números ao usuário
    readline.question('Digite o primeiro número: ', (numero1) => {
        readline.question('Digite o segundo número: ', (numero2) => {
            // Converte as entradas para números
            const num1 = parseFloat(numero1);
            const num2 = parseFloat(numero2);

            // 1. Soma dos dois números
            const soma = num1 + num2;
            console.log(`Soma: ${num1} + ${num2} = ${soma}`);

            // 2. Subtração do segundo número do primeiro
            const subtracao = num1 - num2;
            console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);

            // 3. Multiplicação dos dois números
            const multiplicacao = num1 * num2;
            console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);

            // 4. Divisão do primeiro número pelo segundo
            if (num2 !== 0) {
                const divisao = num1 / num2;
                console.log(`Divisão: ${num1} / ${num2} = ${divisao}`);
            } else {
                console.log('Divisão: Não é possível dividir por zero.');
            }

            // 5. Verifica se o primeiro número é maior que o segundo
            const ehMaior = num1 > num2;
            console.log(`O primeiro número (${num1}) é maior que o segundo (${num2})? ${ehMaior}`);

            // Fecha a interface readline
            readline.close();
        });
    });
}

calcularOperacoes();