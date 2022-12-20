Array.prototype.filter2 = function (callback, thisArg) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if (callback(this[i], i, thisArg != undefined ? thisArg : this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plástico", preco: 18.99, fragil: false }
]

const produtosCaros = produto => produto.preco >= 500
const produtosFrageis = produto => produto.fragil

console.log(produtos.filter2(produtosCaros).filter2(produtosFrageis))

const contem = function (array, elemento) {
    for(let i = 0; i < array.length; i++){
        if (array[i] == elemento)
            return true
    }
    return false
} 
console.log([1,2,3].filter2((e, i, a) => contem(a, e), [3, 4, 5, 6, 1]))