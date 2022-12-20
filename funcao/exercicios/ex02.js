/*
02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles:  Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e 
retorne sua classificação quantoao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de umtriângulo).
*/
function tipoTriangulo(lado1,lado2,lado3) {
    let tipo = ''
    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
        if(lado1 == lado2 && lado2 == lado3) {
            tipo = 'Equilátero'
        } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            tipo = 'Isósceles'
        } else {
            tipo = 'Escaleno'
        }
    } else {
        tipo = 'Inválido'
    }
    return tipo
}

console.log(tipoTriangulo(0,0,0)) //Inválido
console.log(tipoTriangulo(1,0,0)) //Inválido
console.log(tipoTriangulo(0,1,0)) //Inválido
console.log(tipoTriangulo(0,0,1)) //Inválido
console.log(tipoTriangulo(1,1,0)) //Inválido
console.log(tipoTriangulo(1,0,1)) //Inválido
console.log(tipoTriangulo(0,1,1)) //Inválido
console.log(tipoTriangulo(1,1,1)) //Equilátero
console.log(tipoTriangulo(1,1,2)) //Isósceles
console.log(tipoTriangulo(1,2,1)) //Isósceles
console.log(tipoTriangulo(2,1,1)) //Isósceles
console.log(tipoTriangulo(1,2,3)) //Escaleno









