import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import useCliente from "@/hooks/useClientes";

export default function Home() {

  const { 
    cliente, 
    clientes,
    novoCliente, 
    selecionarCliente, 
    excluirCliente, 
    salvarCliente,
    tabelaVisivel,
    exibirTabela
  } = useCliente()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-br from-blue-900 via-purple-850 to-purple-950
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4"
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}

      </Layout>
    </div>
  )
}
