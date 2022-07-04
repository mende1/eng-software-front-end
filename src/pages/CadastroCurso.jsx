import FormCurso from "../components/FormCurso";
import Dashboard from "../components/DashboardComponent";

function CadastroCurso() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Dashboard />
        <FormCurso titulo="Cadastro de Curso" nomeBotao="Cadastrar" />
      </div>
    </div>
  );
}

export default CadastroCurso;
