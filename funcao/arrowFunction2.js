//Funções Arrow #02 - Aula 73

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ 
        console.log(this.idade)
    },1000)
}

new Pessoa