console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

// Ao contrario de uma função convencional, dentro de uma arrow function
// o this continua apontando para o module.exports, assim como no escopo de modulos.


const logThisArrowFunction = () => {
    console.log('Dentro de uma arrow function...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThisArrowFunction();