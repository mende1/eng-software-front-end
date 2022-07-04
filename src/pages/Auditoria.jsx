import DashboardComponent from "../components/DashboardComponent";
import Table from "../components/Table";

// Somente para futuros auditores
function Auditoria() {
  // Variaveis do Back-end

  const validacoesDiploma = [
    { Data: "11/02/2021", Requerente: "João Gabriel", Funcionario: "Pedro" },
    { Data: "11/02/2021", Requerente: "João Gabriel", Funcionario: "Pedro" },
    { Data: "11/02/2021", Requerente: "João Gabriel", Funcionario: "Pedro" },
    { Data: "11/02/2021", Requerente: "João Gabriel", Funcionario: "Pedro" },
  ];

  // ********************************************************************************************

  const actions = <i className="bi bi-download"> </i>;

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <div id="main">
          <p className="h3 title-2">Validações de Diploma</p>
          <Table rows={validacoesDiploma} tableName="" actions={actions} />
        </div>
      </div>
    </div>
  );
}

export default Auditoria;
