import FormInstituicao from '../components/FormInstituicao'
import Dashboard from '../components/Dashboard'

function EditarInstituicao() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
                <FormInstituicao titulo="Editar Instituição" nomeBotao="Editar"/>
            </div>
        </div>
    )
}

export default EditarInstituicao