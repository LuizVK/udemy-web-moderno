const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


// arquivos json podem ser lidos sem necessidade do fileSystem
const config = require('./arquivo.json')
console.log(config.db)

// ler os arquivos da pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})