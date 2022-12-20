/*
08)​Pedro joga N jogos de basquete por temporada. Para saber como está ele está 
progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após 
cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu 
melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, 
escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar 
um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos 
e quando fez seu pior jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação 
e a pior pontuação aconteceu no sétimo jogo.)
*/

function ex08(pnts) {
    console.log(pnts)
    let array = pnts.split(' ')
    let record = 0
    let bateuRecord = 0
    let piorJogo = 0
    let piorPontuacao = 0
    let valor = 0
    for(let i in array){
        valor = parseInt(array[i])
        if(i == 0 ){
            record = array[i]
            piorPontuacao = array[i]
        } else {
            if(valor > record){
                record = array[i]
                bateuRecord += 1
            }

            if(valor < piorPontuacao){
                piorPontuacao = array[i]
                piorJogo = parseInt(i) + 1
            }
        }
    }

    var res = []
    res.push(bateuRecord,piorJogo)
    console.log(res)
}

//var pontos = "10 20 20 8 25 3 0 30 1"
var pontos = "39 26 17 14 3 21 9 15"
ex08(pontos)