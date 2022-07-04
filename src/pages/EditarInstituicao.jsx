import FormInstituicao from "../components/FormInstituicao";
import DashboardComponent from "../components/DashboardComponent";

function EditarInstituicao() {
  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <FormInstituicao titulo="Editar Instituição" nomeBotao="Editar" />
      </div>
    </div>
  );
}

export default EditarInstituicao;
