const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function manipularString() {
    readline.question('Digite uma string: ', (string) => {
        // 1. Converte a string para maiúsculas
        const maiusculas = string.toUpperCase();
        console.log(`String em maiúsculas: ${maiusculas}`);

        // 2. Converte a string para minúsculas
        const minusculas = string.toLowerCase();
        console.log(`String em minúsculas: ${minusculas}`);

        // 3. Inverte a string
        const invertida = string.split('').reverse().join('');
        console.log(`String invertida: ${invertida}`);

        // 4. Substitui todas as ocorrências de uma letra específica por outra
        readline.question('Digite a letra que deseja substituir: ', (letraAntiga) => {
            readline.question('Digite a nova letra: ', (letraNova) => {
                const substituida = string.split(letraAntiga).join(letraNova);
                console.log(`String com substituição: ${substituida}`);
                readline.close(); // Fecha a interface readline
            });
        });
    });
}

manipularString();