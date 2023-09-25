function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b = new Barreira(false)
// b.setAltura(200)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreira')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

// const b = new ParDeBarreiras(400, 50, 800)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            if (cruzouOMeio && notificarPonto) notificarPonto()
        })
    }

    this.recarregar = function() {
        this.pares.forEach((par, index) => {
            index == 0 ? par.setX(largura) : par.setX(largura + espaco * index)
            par.sortearAbertura()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)

    this.recarregar = function () {
        this.setY(alturaJogo / 2)
    }
}


// const areaDoJogo = document.querySelector('[wm-flappy]')
// const alturaDoJogo = areaDoJogo.clientHeight
// const larguraDoJogo = areaDoJogo.clientWidth
// const barreira = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)

// areaDoJogo.appendChild(passaro.elemento)
// barreira.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//      barreira.animar()
//      passaro.animar()
//  }, 20)

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

// const areaDoJogo = document.querySelector('[wm-flappy]')
// const alturaDoJogo = areaDoJogo.clientHeight
// const larguraDoJogo = areaDoJogo.clientWidth
// const progresso = new Progresso()
// const barreira = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)

// areaDoJogo.appendChild(passaro.elemento)
// areaDoJogo.appendChild(progresso.elemento)
// barreira.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//      barreira.animar()
//      passaro.animar()
//  }, 20)

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top 

    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false

    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento

            colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior)
        }
    })

    return colidiu
}

function Menu() {
    const score = novoElemento('div', 'score')
    score.innerHTML = `SCORE: 0`
    const start = novoElemento('div', 'start')
    const botaoStart = novoElemento('button', 'botao-start')
    botaoStart.innerHTML = 'START'

    start.appendChild(botaoStart)

    this.elemento = novoElemento('div', 'menu')

    this.elemento.appendChild(score)
    this.elemento.appendChild(start)

    this.setScore = score => document.querySelector('.score').innerHTML = `SCORE: ${score}`
    this.getBotaoStart = () => document.querySelector('.botao-start')

    this.close = () => {
        document.querySelector('.menu').style.display = 'none'
    }

    this.open = (gameOver = false, score = 0) => {
        this.setScore(score)
        gameOver ? document.querySelector('.score').style.display = 'block' : document.querySelector('.score').style.display = 'none'
        document.querySelector('.menu').style.display = 'flex'
    }
}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const menu = new Menu()
    // const botaoStart = menu.getBotaoStart()
    let progresso = new Progresso()
    let barreiras = new Barreiras(altura, largura, 200, 400, 
        () => progresso.atualizarPontos(++pontos))

    let passaro = new Passaro(altura)

    areaDoJogo.appendChild(menu.elemento)
    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    const comecarJogo = () => {
        // loop do jogo

        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
                menu.open(true, pontos)
            }
        }, 20)
    }

    const botaoStart = document.querySelector('.botao-start').onclick = function () {
        pontos = 0
        progresso.atualizarPontos(0)
        passaro.recarregar()
        barreiras.recarregar()
        menu.close()
        comecarJogo()
    }

    this.start = () => {
        menu.open(false, 0)
    }
}

new FlappyBird().start()