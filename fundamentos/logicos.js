function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaldavel = !comprarSorvete //operador unário
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaldavel} 
    //quando omitido a chave é definido o nome da var/const como chave para os pares chave/valor
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))


