console.log(7/0) //Divisão por zero retorna Infinity

console.log("10" / 2) //Funciona! Divisão de uma string, tenta converter o valor da string
                      //para tentar realizar a operação
                      //Nesse caso não faz sentido dividir a string
                      //Então a string é convertida para tentar realizar a operação de divisão

console.log("3" + 2) //Nesse caso não realiza o cálculo como acima, pois faz sentido concatenar a string com o 2 usando o operador +

console.log("3" - 2) //Nesse caso tbm não faz sentido subtrair da string.
                     //Então é convertido a string para tentar realizar a operação de subtração

console.log("Show!" * 2)
console.log(0.1 + 0.7) //Retorna 0.79999... e não 0.8
//console.log(10.toString()) //Não funciona no literal
console.log((10).toString()) //toString e outras funções funsionam com o literal dentro de um parenteses
