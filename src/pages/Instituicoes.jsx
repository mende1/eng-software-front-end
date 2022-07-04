import DashboardComponent from "../components/DashboardComponent";
import Table from "../components/Table";

function Instituicoes() {
  // Variaveis do Back-end

  const instituicoes = [
    {
      Nome: "Ufba",
      Credenciamento: "xxxxxxxxxxxxx",
      Mantenedora: "xxxxxxxxxxxxxx",
    },
    {
      Nome: "Ufba",
      Credenciamento: "xxxxxxxxxxxxx",
      Mantenedora: "xxxxxxxxxxxxxx",
    },
    {
      Nome: "Ufba",
      Credenciamento: "xxxxxxxxxxxxx",
      Mantenedora: "xxxxxxxxxxxxxx",
    },
    {
      Nome: "Ufba",
      Credenciamento: "xxxxxxxxxxxxx",
      Mantenedora: "xxxxxxxxxxxxxx",
    },
    {
      Nome: "Ufba",
      Credenciamento: "xxxxxxxxxxxxx",
      Mantenedora: "xxxxxxxxxxxxxx",
    },
  ];

  // ********************************************************************************************

  const actionsLock = (
    <div>
      <i className="bi bi-pencil-square verde"></i>{" "}
      <i className="bi bi-lock vermelho"></i>
    </div>
  );
  const actionsUnlock = (
    <div>
      <i className="bi bi-pencil-square verde"></i>{" "}
      <i className="bi bi-unlock verde"></i>
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <div id="main">
          <p className="h3 title-2">Instituições</p>
          <Table rows={instituicoes} tableName="" actions={actionsLock} />
        </div>
      </div>
    </div>
  );
}

export default Instituicoes;
