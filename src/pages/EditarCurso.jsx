import { useParams } from "react-router-dom";
import DashboardComponent from "../components/DashboardComponent";
import FormCurso from "../components/FormCurso";

function EditarCurso() {
  const { id } = useParams();

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <FormCurso courseID={id} editar />
      </div>
    </div>
  );
}

export default EditarCurso;
