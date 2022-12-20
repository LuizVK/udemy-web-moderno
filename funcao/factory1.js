//Função Factory #01- Aula 83 

// Factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
console.log(criarPessoa())
