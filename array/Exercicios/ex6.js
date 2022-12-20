//Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
//retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
//numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro de
//entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo
//...".

// Minha resposta

const retornarValorInverso = valor => {
    if (typeof valor == typeof true )
        return !valor
    else if (typeof valor == typeof 0)
        return valor * -1
    else 
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
}

console.log(retornarValorInverso(-20)) //20
console.log(retornarValorInverso(true)) //false
console.log(retornarValorInverso("1")) // booleano ou número esperados, mas o parâmetro é do tipo string

// Outras resoluções que estão no arquivo pdf

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}