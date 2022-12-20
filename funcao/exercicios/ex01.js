/*
01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no
 console a soma, subtração,multiplicação e divisão desses valores.
*/
function calc(x = 0, y = 0) {
    console.log(`${x} + ${y} =  ${x+y}`)
    console.log(`${x} - ${y} =  ${x-y}`)
    console.log(`${x} * ${y} =  ${x*y}`)
    console.log(`${x} / ${y} =  ${x/y}`)
}

calc(2, 3)