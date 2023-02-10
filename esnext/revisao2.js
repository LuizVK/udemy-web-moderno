// Arrow Function

const soma = (a, b) => a + b 
// Quando não tiver o corpo da função explicito, o return será chamado implicitamente
// Se definir um corpo para a função, será necessário definir explicitamente o return
// Quando tiver apenas um parâmetro não é necessário informar os parenteses dos parametros
//

console.log(soma(2, 3))


// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // O this de uma arrow é associado ao local onde a função foi escrita
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametros default
function log(texto = 'Node') {
    console.log(texto)
}

log() // Saída: 'Node'
log(undefined) // Saída: 'Node'
log(null) // Saída: null
log('Sou mais forte') // Saída: 'Sou mais forte'

// Operador rest/spread
// Junta todos os n parâmetros passados para a função e adiciona a um array de parâmetros (neste caso 'numeros')
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))