const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2 
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //ToFixed para definir a quantidade de casas após o ponto.
console.log(media.toFixed(2).toString()) //toString para transformar o number em string
console.log(media.toString(2)) //toString(2) para transformar em binário

console.log(typeof media) //media -> number
console.log(typeof Number) //Number -> function
