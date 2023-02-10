const obj = { a: 1, b: 2, c: 3 }

// Essa funcionalidade já existia antes das novidades do ES8
console.log(Object.keys(obj)) //Retorna as cheves do objeto passado por parâmetro  -- Saída: [ 'a', 'b', 'c' ]

// ES8: Object.values/Object.entries
console.log(Object.values(obj)) // Retorna os valoes das keys do objeto passado por parâmetro  -- Saída: [ 1, 2, 3 ]
console.log(Object.entries(obj)) // Retorna o par chave-valor do objeto passado por parâmetro  -- Saída: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias na Notação Literal
let nome = 'Carla'
const pessoa = {
    nome, // Ao passar uma variavel/constante para o atributo, caso seja omitido o nome do atributo, será definido o nome da variável como nome do atributo
    // Novo método de incluir funções dentro de objetos
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa) //Saída: { nome: 'Carla', ola: [Function: ola] }
console.log(pessoa.nome, pessoa.ola()) // Saída: Carla Oi gente!

// Class

class Animal {} // Notação para criar "classes" no js. Será uma function no final das contas
class Cachorro extends Animal { // Notação para eranças. Será definido por prototipos no final das contas
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar()) // Saída: Au au!