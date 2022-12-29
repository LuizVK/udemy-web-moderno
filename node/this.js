console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

// Em uma function convencional o this aponta para o objeto global
// e não mais para o module.exports, como no contexto de modulos.

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis();