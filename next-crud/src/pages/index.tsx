import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";


export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Maria', 48, '2'),
    new Cliente('Joao', 21, '3'),
    new Cliente('Pedro', 23, '4'),
    new Cliente('Jose', 65, '5'),
    new Cliente('Leticia', 26, '6')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir ${cliente.nome}`)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white 
    `}>

      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
