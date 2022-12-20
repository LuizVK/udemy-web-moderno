const alunos = [ 
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
];


// Desafio 1: Todos os alunos sao bolsista?

const todosBolsista = alunos.map(a => a.bolsista).reduce(function(resultado, atual) {
    // console.log(resultado);
    return resultado ? atual : false; 
}, true);

console.log("Todos os alunos são bolsisteas?", todosBolsista);

// Desafio 1: Resposta professor

const todosBolsistas1 = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas1))


// Desafio 2: Algum aluno é bolsista?

const algumBolsista = alunos.map(a => a.bolsista).reduce(function(resultado, atual) {
    // console.log(resultado);
    return atual || resultado;
}, false);

console.log("Algum aluno é bolsista?", algumBolsista);

// Desafio 2: Resposta professor

const algumBolsista1 = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista1));