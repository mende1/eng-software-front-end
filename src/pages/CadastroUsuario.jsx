import FormUsuario from '../components/FormUsuario'
import Dashboard from '../components/Dashboard'

function CadastroUsuario() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
                <FormUsuario />
            </div>
        </div>
    )
}

export default CadastroUsuario