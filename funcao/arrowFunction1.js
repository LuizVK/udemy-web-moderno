//Funções Arrow #01 - Aula 72

let dobro = function (a) {
    return a * 2
}

dobro = (a) => { 
    return a * 2 
}

dobro = a => 2 * a //return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro
console.log(ola())