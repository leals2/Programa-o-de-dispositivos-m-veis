const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarIdade() {
    // Solicita a idade ao usuário
    readline.question('Digite a idade: ', (idade) => {
        // Converte a entrada para número
        const idadeNumero = parseInt(idade, 10);

        // Verifica se a entrada é um número válido
        if (isNaN(idadeNumero)) {
            console.log('Por favor, digite uma idade válida.');
        } else {
            // 1. Verifica se é menor de idade
            if (idadeNumero < 18) {
                console.log('Menor de idade.');
            }
            // 2. Verifica se é maior de idade
            else if (idadeNumero >= 18 && idadeNumero < 65) {
                console.log('Maior de idade.');
            }
            // 3. Verifica se é idoso (idade >= 65)
            else {
                console.log('Idoso(a).');
            }
        }

        // Fecha a interface readline
        readline.close();
    });
}

verificarIdade();