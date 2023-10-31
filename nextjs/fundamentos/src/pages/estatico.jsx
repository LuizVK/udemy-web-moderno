import Layout from "../components/Layout"

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        },
        revalidate: 10 // quando o tempo (em segundos) tiver acabado, será gerado a página novamente na próxima solicitação
    }
}

export default function Estatico(props) {
    return(
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}