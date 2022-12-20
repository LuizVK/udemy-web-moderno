// Exercício 1 - Crie uma função que retorna a string "Olá," concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

// Minhas respostas
const comprimentar = nome => `Olá, ${nome}!`

console.log(comprimentar('Luiz'))

// Outras respostas que estão no arquivo pdf
//Resolução 1
function cumprimentar(nome) {  
    const saudacao = "Olá"  
    return [saudacao, nome].join(', ').concat("!")
}

//Resolução 2
function cumprimentar(nome) {  
    return "Olá, " + nome + "!"
}

//Resolução 3
function cumprimentar(nome) {  
    return `Olá, ${nome}!`
}
