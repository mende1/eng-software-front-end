import FormInstituicao from '../components/FormInstituicao'
import Dashboard from '../components/Dashboard'

function CadastroInstituicao() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
                <FormInstituicao />
            </div>
        </div>
    )
}

export default CadastroInstituicao