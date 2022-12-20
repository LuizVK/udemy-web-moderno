Array.prototype.map2 = function(callback) {
    let arrayRetorno = []
    this.forEach((e, i, a) => arrayRetorno.push(callback(e, i, a)))
    return arrayRetorno
}

Array.prototype.map3 = function(callback) {
    let newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


// Retornar um array paenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

let resultado = carrinho.map3(paraObjeto).map2(apenasPreco)
console.log(resultado)