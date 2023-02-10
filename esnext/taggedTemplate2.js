// Nesse caso utiliza a funcionalidade tagged para aplicar uma mascará ao aos valores da string interpolada. 
// A função 'real' irá processar as partes e os valores da string interpolada para retornar os valores com a mascará de real

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 1100
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`) // Saída: 1x de R$29.90 ou 3x de R$11.00