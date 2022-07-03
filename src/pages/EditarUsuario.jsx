import FormUsuario from '../components/FormUsuario'
import Dashboard from '../components/Dashboard'

function EditarUsuario() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
                <FormUsuario titulo="Editar Usuário" nomeBotao="Editar"/>
            </div>
        </div>
    )
}

export default EditarUsuario