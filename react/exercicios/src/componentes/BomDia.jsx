import React from 'react'


// export default props => // -> Professor escreveu assim, mas gera um Warning 
const saudacao = props =>
<React.Fragment>
    <h1 key='h1'>Bom dia {props.nome}!</h1>
    <h2 key='h2'>Até breve!</h2>
</React.Fragment>

export { saudacao }
export default saudacao

// Para retornar mais de um elemento no componente, pode-se retornar um array com os elementos, porém é necessário retornar os elementos contendo um parâmetro key unico
// Outra opção é retornar os elementos encapsulados por um elemento div, porém o mesmo será interpretado...
// Caso não deseje um elemento encapsulando os outros, pode-se usar <React.Fragment></React.Fragment> para encapsular os elementos. Este será ignorado ao renderizar os elementos na tela.

// Exemplos abaixo:
// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

// export default props => 
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>