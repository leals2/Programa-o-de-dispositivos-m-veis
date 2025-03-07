const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function manipularObjeto(pessoa) {
    // 1. Adiciona uma nova propriedade ao objeto
    readline.question('Digite o nome da nova propriedade: ', (propriedade) => {
        readline.question(`Digite o valor para a propriedade "${propriedade}": `, (valor) => {
            pessoa[propriedade] = valor;
            console.log(`Objeto após adicionar a propriedade "${propriedade}":`, pessoa);

            // 2. Remove uma propriedade do objeto
            readline.question('Digite o nome da propriedade que deseja remover: ', (propriedadeRemover) => {
                if (pessoa.hasOwnProperty(propriedadeRemover)) {
                    delete pessoa[propriedadeRemover];
                    console.log(`Objeto após remover a propriedade "${propriedadeRemover}":`, pessoa);
                } else {
                    console.log(`A propriedade "${propriedadeRemover}" não existe no objeto.`);
                }

                // 3. Lista todas as propriedades do objeto
                console.log('Propriedades do objeto:');
                for (const key in pessoa) {
                    console.log(`${key}: ${pessoa[key]}`);
                }

                // Fecha a interface readline
                readline.close();
            });
        });
    });
}

function main() {
    // Objeto inicial para testes
    const pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" };
    console.log('Objeto inicial:', pessoa);

    // Chama a função para manipular o objeto
    manipularObjeto(pessoa);
}

main();