import DashboardComponent from "../components/DashboardComponent";
import Table from "../components/Table";

function ValidarDiploma() {
  // Variaveis do Back-end

  const solicitacoesDiploma = [
    { Requerente: "João Gabriel", Data: "11/02/2021" },
    { Requerente: "João Gabriel", Data: "11/02/2021" },
    { Requerente: "João Gabriel", Data: "11/02/2021" },
    { Requerente: "João Gabriel", Data: "11/02/2021" },
    { Requerente: "João Gabriel", Data: "11/02/2021" },
  ];

  // ********************************************************************************************

  const actions = (
    <div>
      <i className="bi bi-download"> </i>
      <i className="bi bi-check-lg verde"></i>{" "}
      <i className="bi bi-x-lg vermelho"></i>
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <div id="main">
          <p className="h3 title-2">Solicitações de Validação de Diploma</p>
          <Table rows={solicitacoesDiploma} tableName="" actions={actions} />
        </div>
      </div>
    </div>
  );
}

export default ValidarDiploma;
