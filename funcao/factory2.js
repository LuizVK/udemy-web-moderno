//Função Factory #02- Aula 84 

function criarProduto(nome = 'Prod', preco = 0) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto())
console.log(criarProduto('Caneta', 0.5))
