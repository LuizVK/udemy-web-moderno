//Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
//OBS: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) 
// e desconsidere também dias decorridos desde o último aniversário.

// Minha resposta

const idadeEmDias = idadeEmAnos => {
    return idadeEmAnos * 365
}

console.log(`${idadeEmDias(22)} dias.`)

// Outras resoluções que estão no arquivo pdf

function converterIdadeEmAnosParaDias(idadeEmAnos) {  
    const diasDoAno = 365  
    return diasDoAno * idadeEmAnos
}