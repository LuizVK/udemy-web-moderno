const tecnologias = new Map()

tecnologias.set('react', { framework: false })
tecnologias.set('angular', {framework: true })

console.log(tecnologias.react) // Saída: undefined -- Neste caso, é a sintaxe errada para obter o valor da chave 'react'
console.log(tecnologias.get('react')) //Saída: { framework: false }

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl) 
    //Saída 1: [Function (anonymous)] Função
    //Saída 2: {} Objeto
    //Saída 3: 123 Número
})

console.log(chavesVariadas.has(123))  // Saída: true
chavesVariadas.delete(123) 
console.log(chavesVariadas.has(123)) // Saída: false
console.log(chavesVariadas.size) // Saída: 2

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // Quando já existe uma chave com o mesmo nome, irá substituir a chave-valor pois ela já existe
chavesVariadas.set(456, 'b')
console.log(chavesVariadas) // Saída: Map(4) { [Function (anonymous)] => 'Função', {} => 'Objeto', 123 => 'b', 456 => 'b' }