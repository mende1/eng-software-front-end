import DashboardComponent from "../components/DashboardComponent";

function SolicitarValidacao() {
  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <form method="POST" className="container forms shadow mt-3 form">
          <p className="h3 title-2">Solicitar Validação</p>
          <div className="mb-3">
            <label htmlFor="requerente" className="form-label">
              Requerente
            </label>
            <input
              type="text"
              className="form-control"
              id="requerente"
              name="requerente"
              placeholder="insira o nome"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="data" className="form-label">
              Data
            </label>
            <input type="date" className="form-control" id="data" name="data" />
          </div>
          <div className="mb-3">
            <label htmlFor="solicitacao" className="form-label">
              Solicitação
            </label>
            <input
              type="file"
              className="form-control"
              id="solicitacao"
              name="solicitacao"
            />
          </div>
          <button type="submit" className="btn-1 btn btn-primary mb-3">
            Solicitar
          </button>
        </form>
      </div>
    </div>
  );
}

export default SolicitarValidacao;
