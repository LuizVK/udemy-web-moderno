/*
07)​Uma das vantagens da programação é a automatização de tarefas que não gostamos 
de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de 
Bhaskara. Para isso, sua função deve receber trêsparâmetros, “ax2”, “bx” e “c”, 
de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. 
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, 
mesmoque os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do 
vetor, um string com a frase:“Delta é negativo”.
*/

function bhaskara(a,b,c) {
    let ret = []
    const delta = Math.pow(b,2) - 4 * a * c 
    let x1 = (-b + Math.sqrt(delta)) / 2 * a
    let x2 = (-b - Math.sqrt(delta)) / 2 * a
    
    if(delta < 0 ) {
        console.log(delta, x1, x2)
        const MDC = calculaMdcR(x1,x2) //Procura pelo Máximo divisor comum do x' e x"

        //Aqui compara verifica se o MDC é maior que 1 pq se for 1 não precisa dividir 
        if (Math.abs(MDC) > 1) { //Qq coisa dividida por 1 é ela memsma
            x1 = x1 / Math.abs(MDC)
            x2 = x2 / Math.abs(MDC)
        } 
        
        ret.push(x1,x2)
        return ret
    } else {
        return 'Delta é negativo'
    }
}

/* ****************ALGORITIMO DE EUCLIDES**************** */
//Cálcula MDC de forma recursiva
function calculaMdcR(n1, n2) {
    if(n2 == 0 ) {
        return n1
    } else {
        return calculaMdcR(n2, n1 % n2)
    }
  };

//Cálcula MDC de forma iterativa
function calculaMdcI(n1,n2) {
    let resto
    do {
        resto = a % b
        a = b
        b = resto
    } while (resto != 0)
    return a
}

function imprimeResultadoBhaskara(vetor) {
    console.log(typeof vetor)
    if (typeof vetor == 'string') {
        console.log(vetor)
    } else { 
        console.log(`X' = ${vetor[0]}`)
        console.log(`X" = ${vetor[1]}`)
    }
}   

let vetor = bhaskara(1,12,-13)

imprimeResultadoBhaskara(vetor)


vetor = bhaskara(2,-16,-18)

imprimeResultadoBhaskara(vetor)

vetor = bhaskara(2,-4,0)

imprimeResultadoBhaskara(vetor)