const fs = require('fs')

const caminho = __dirname + '/dados.txt'

// Minha solução
function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            if (err) reject(err)
            resolve(conteudo)
        })
    })
}

lerArquivo(caminho)
    .then(console.log)
    .catch(ex => console.log(ex.message))


// Solução professor
function lerArquivoProfessor(caminho){
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

// Professor
lerArquivoProfessor(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)




