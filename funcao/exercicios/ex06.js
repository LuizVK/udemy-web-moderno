/*
06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e 
tempo de aplicação. Aprimeira função retornará o montante da aplicação financeira sob o 
regime de juros simples e a segundaretornará o valor da aplicação sob o regime de juros 
compostos.
*/

//Abstração: 
// capital inicial = valor em reais; 
// taxa de juros = percentual; 
// tempo de aplicação = inteiro (em messes);

const jurosSimples = (valor, juros, meses) => valor + ((valor * (juros/100)) * meses)

//Valor de Investimento: R$ 6.000,00; Juros ao mês: 4%; Tempo de aplicação: 10 meses.
console.log(jurosSimples(6000,4,10))

const jurosCompostos = (valor, juros, meses) => {
    for(let i = 0; i < meses; i++) {
        valor += valor * (juros /100)
        console.log(`${i} - ${valor}`)
    }
    return valor
}

// console.log(6489.6 * 0.04)

console.log(jurosCompostos(6000,4,10))