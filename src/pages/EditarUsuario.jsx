import { useParams } from "react-router-dom";
import DashboardComponent from "../components/DashboardComponent";
import FormUsuario from "../components/FormUsuario";

function EditarUsuario() {
  const { id } = useParams();

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <FormUsuario userID={id} editar />
      </div>
    </div>
  );
}

export default EditarUsuario;
