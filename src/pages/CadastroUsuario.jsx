import FormUsuario from "../components/FormUsuario";
import Dashboard from "../components/DashboardComponent";

function CadastroUsuario() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Dashboard />
        <FormUsuario />
      </div>
    </div>
  );
}

export default CadastroUsuario;
