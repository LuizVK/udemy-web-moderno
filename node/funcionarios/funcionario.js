const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheresChinesas = funcionario => funcionario.genero == 'F' && funcionario.pais == 'China';
const ordenacaoSalario = (funcionarioA, funcionarioB) => {
    if (funcionarioA.salario > funcionarioB.salario)
        return -1
    
    if (funcionarioA.salario < funcionarioB.salario)
        return 1

    return 0;
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const apenasMulheresChinesas = funcionarios
        .filter(mulheresChinesas)
        .sort(ordenacaoSalario)
    
    console.log(apenasMulheresChinesas)
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