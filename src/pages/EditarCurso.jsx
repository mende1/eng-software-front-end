import FormCurso from '../components/FormCurso'
import Dashboard from '../components/Dashboard'

function EditarCurso() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
                <FormCurso titulo="Editar Curso" nomeBotao="Editar"/>
            </div>
        </div>
    )
}

export default EditarCurso