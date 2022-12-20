//"this" e a Função bind #02 - Aula 71

function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { 
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)


    //Assim funciona sem precisar do 'const self = this'
    // setInterval( () => { 
    //     this.idade++ 
    //     console.log(this.idade)
    // },1000)
}

new Pessoa