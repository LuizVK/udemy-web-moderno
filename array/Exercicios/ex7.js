//Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o
//parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre"
//como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não
//seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero
//é igual a minimo ou a maximo.

// Minha resposta

const entreMinMax = (numero, minimo, maximo, inclusivo = false) => {
    return ((numero > minimo && numero < maximo && !inclusivo) || (numero >= minimo && numero <= maximo && inclusivo)) 
}

console.log(entreMinMax(1, 1, 10, true)) //true
console.log(entreMinMax(5, 1, 10, true)) //true
console.log(entreMinMax(1, 1, 10, false)) //false
console.log(entreMinMax(5, 1, 10, false)) //true
console.log(entreMinMax(1, 1, 10)) //false
console.log(entreMinMax(5, 1, 10)) //true

// Outras resoluções que estão no arquivo pdf

//Resolução 1
function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}

//Resolução 2
function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}