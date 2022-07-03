import Dashboard from "../components/DashboardComponent";
import Table from "../components/Table";

function Usuarios() {
  // Variaveis do Back-end

  let tipoInstituicao = "validadora";

  const funcionarios = [
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
  ];
  const dirigentes = [
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
  ];
  const diretores = [
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
  ];
  const superitendentes = [
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
  ];
  const coordenadoresCare = [
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
    {
      Nome: "João",
      Email: "diegocarapia@hotmail.com",
      Telefone: "71 3352-1413",
    },
  ];

  // ********************************************************************************************

  return (
    <div className="container-fluid">
      <div className="row">
        <Dashboard />
        <div id="main">
          <p className="h3 title-2">Usuários</p>

          {tipoInstituicao === "validadora" ? (
            <>
              <Table rows={funcionarios} tableName="Funcionários" />
              <Table rows={dirigentes} tableName="Dirigentes" />
              <Table rows={superitendentes} tableName="Superitendentes" />
              <Table rows={coordenadoresCare} tableName="Coordenadores Care" />
            </>
          ) : (
            <>
              <Table rows={funcionarios} tableName="Funcionários" />
              <Table rows={dirigentes} tableName="Dirigentes" />
              <Table rows={diretores} tableName="Diretores" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
