import FormInstituicao from "../components/FormInstituicao";
import DashboardComponent from "../components/DashboardComponent";
import { useParams } from "react-router-dom";

function EditarInstituicao() {
  const { id } = useParams();

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <FormInstituicao institutionID={id} editar />
      </div>
    </div>
  );
}

export default EditarInstituicao;
