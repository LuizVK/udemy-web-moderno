const http = require('http')
const { reject } = require('lodash')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                } 
            })
        })
    })
}

// Passa todas as promisses de forma para serem executadas de forma assincrona. 
// Quando todas terminarem será realizado a chamada do then() ou catch() caso dê alguma exceção
Promise.all([
    getTurma('A'),
    getTurma('B'),
    getTurma('C')
]).then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))