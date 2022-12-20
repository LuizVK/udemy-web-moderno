const escola = "Cod3r"

console.log(escola.charAt(4)) //Pegar um caracter dentro da string
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) //Pegar o código do caracter
console.log(escola.indexOf('3')) //Pega index do caracter

console.log(escola.substring(1)) //Pega uma substring a partir do indice inicial
console.log(escola.substring(0,3)) //Pega uma substring entre o indice inicial e final

console.log('Escola '.concat(escola).concat("!")) //Concatenar. Funciona com literal
console.log('Escola ' + escola + "!") //Mesma coisa da linha de cima, porém utilizando operador '+'

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // '/\d/' significa dígitos do texto
console.log(escola.replace(/\d/g, 'e')) // '/\d/g' significa todos os dígitos do texto (g = global)

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/))//Faz a mesma coisa da linha de cima com Regex

