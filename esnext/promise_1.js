let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

const primeiroElemento = valor => valor[0]
const letraMinuscula = letra => letra.toLowerCase()
p
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)