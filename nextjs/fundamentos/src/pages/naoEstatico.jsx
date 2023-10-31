import Layout from "@/components/Layout";

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/clientes')
    const data = await res.json()

    return { props: { data } }
}

export default function NaoEstatico(props) {
    return (
        <Layout titulo="Renderização do lado do servidor">
            <ul>
                <li>Id: {props.data.id}</li>
                <li>Nome: {props.data.nome}</li>
                <li>E-mail: {props.data.idade}</li>
            </ul>
        </Layout>
    )
}