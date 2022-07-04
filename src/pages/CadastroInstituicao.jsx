import FormInstituicao from "../components/FormInstituicao";
import Dashboard from "../components/DashboardComponent";

function CadastroInstituicao() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Dashboard />
        <FormInstituicao
          titulo="Cadastro de Instituição"
          nomeBotao="Cadastrar"
        />
      </div>
    </div>
  );
}

export default CadastroInstituicao;
