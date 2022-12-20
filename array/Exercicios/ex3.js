//Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
//num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
//da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
//30%, relativo a impostos.

//O retorno da função deve ser a string "Salário líquido é igual a R$ X", em que X é o salário líquido do funcionário
//no mês.

const salarioDoMes = (hrsTrabalhadas, vlrPorHr) => {
    const salario = (hrsTrabalhadas * vlrPorHr) * 0.7 // 0.7 pois seria 70% do valor total, já que 30% se trata de impostos
    return `Salário líquido é igual a R$ ${salario}`
}

console.log(salarioDoMes(200, 20))

// Outras resoluções que estão no arquivo pdf

function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return `Salário igual a R$ ${salarioLiquido}`
}