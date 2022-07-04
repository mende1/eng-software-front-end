import DashboardComponent from "../components/DashboardComponent";
import Table from "../components/Table";

function Cursos() {
  // Variaveis do Back-end

  const cursos = [
    { Nome: "Ufba", Grau: "sei lá", "e-Mec": "sei lá" },
    { Nome: "Ufba", Grau: "sei lá", "e-Mec": "sei lá" },
    { Nome: "Ufba", Grau: "sei lá", "e-Mec": "sei lá" },
    { Nome: "Ufba", Grau: "sei lá", "e-Mec": "sei lá" },
    { Nome: "Ufba", Grau: "sei lá", "e-Mec": "sei lá" },
  ];

  // ********************************************************************************************

  const actions = (
    <div>
      <i className="bi bi-pencil-square verde"></i>{" "}
      <i className="bi bi-x-lg vermelho"></i>
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <div id="main">
          <p className="h3 title-2">Cursos</p>
          <Table rows={cursos} tableName="" actions={actions} />
        </div>
      </div>
    </div>
  );
}

export default Cursos;
