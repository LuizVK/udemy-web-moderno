// Exercício: Criar meu próprio reduce

Array.prototype.reduce2 = function(callback, valorInicial) {
    let acumulador = this[0];
    let i = 1;

    if (valorInicial != undefined){
        acumulador = valorInicial;
        i = 0;
    } 

    for( i; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this);
    }

    return acumulador; 
};

// Exercício: Resposta do professor
Array.prototype.reduce3 = function(callback, valorInicial){
    let indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}


const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))
