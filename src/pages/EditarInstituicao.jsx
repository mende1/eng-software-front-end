import FormInstituicao from "../components/FormInstituicao";
import DashboardComponent from "../components/DashboardComponent";

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
