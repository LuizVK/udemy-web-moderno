/*
04)​Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultadoe o resto da divisão destes dois valores
*/

function ex04(dividendo,divisor) {
    let vlr = dividendo / divisor
    let resto = dividendo % divisor

    console.log(`Dividendo: ${dividendo} - Divisor: ${divisor}`)
    console.log(`Resultado: ${Math.floor(vlr)}`)
    console.log(`Restante: ${resto}`)
}

ex04(10,5)
ex04(9,3)
ex04(9,5)
ex04(8538.3,886.2)

