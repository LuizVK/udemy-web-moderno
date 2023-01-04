const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheresChinesas = funcionario => funcionario.genero == 'F' && funcionario.pais == 'China';
const ordenacaoSalario = (funcionarioA, funcionarioB) => {
    if (funcionarioA.salario > funcionarioB.salario)
        return 1
    
    if (funcionarioA.salario < funcionarioB.salario)
        return -1

    return 0;
}

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    // Desafio, pegar o funcionario que seja uma mulher chinesa com menor salário

    // Minha resolução
    const resposta1 = funcionarios
        .filter(mulheresChinesas)
        .sort(ordenacaoSalario)
        .slice(0, 1)
        
    console.log(resposta1)


    // Resolução do professor
    const resposta2 = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(resposta2)
})

// {
//     id: 100,
//     nome: 'Uriel',
//     sobrenome: 'Congreve',
//     email: 'ucongreve2r@sina.com.cn',
//     genero: 'M',
//     cidade: 'Salmi',
//     pais: 'Russia',
//     empresa: 'Devpoint',
//     salario: 22895.45
// }





/* Sobre o arquivo package.json 
 * Para rodar o projeto (funcionario.js) pelo script 'start', basta dar 'npm start'
 * No caso de scripts criados como 'dev', deve se usar 'npm run dev'
 */