// Operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario} // Não gera impacto no objeto "clonado"

console.log(clone) // Saída: { ativo: true, nome: 'Maria', salario: 12348.99 }

// usar spread com array
const grupoA = [ 'João', 'Pedro', 'Gloria' ]
const grupoFinal = [ 'Maria', ...grupoA, 'Rafaela' ]

console.log(grupoFinal) // Saída: [ 'Maria', 'João', 'Pedro', 'Gloria', 'Rafaela' ]