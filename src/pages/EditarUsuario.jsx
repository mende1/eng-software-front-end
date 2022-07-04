import DashboardComponent from "../components/DashboardComponent";
import FormUsuario from "../components/FormUsuario";

function EditarUsuario() {
  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <FormUsuario />
      </div>
    </div>
  );
}

export default EditarUsuario;
