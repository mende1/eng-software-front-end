import DashboardComponent from "../components/DashboardComponent";
import FormCurso from "../components/FormCurso";

function EditarCurso() {
  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <FormCurso titulo="Editar Curso" nomeBotao="Editar" />
      </div>
    </div>
  );
}

export default EditarCurso;
