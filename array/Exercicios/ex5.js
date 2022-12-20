//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
//números de strings.

// Minha resposta

const primeiroMaiorQueSegundo = (primeiro, segundo) => {
    return typeof primeiro != typeof segundo ? false : primeiro >= segundo
}

console.log(primeiroMaiorQueSegundo(0, 0)) //true
console.log(primeiroMaiorQueSegundo(0, 1)) //false
console.log(primeiroMaiorQueSegundo(1, 0)) //true
console.log(primeiroMaiorQueSegundo(0, "0")) //false

// Outras resoluções que estão no arquivo pdf

function maiorOuIgual(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}
