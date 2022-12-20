//Desafio Função Construtora - 86

function Pessoa(nome) {
    this.nome = nome

    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const p1 = new Pessoa('João')
p1.falar()