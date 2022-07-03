import Dashboard from '../components/Dashboard'
import Table from '../components/Table'

function Usuarios() {

    // Variaveis do Back-end

    let tipoInstituicao = "validadora"

    const funcionarios = [
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
    ]
    const dirigentes = [
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
    ]
    const diretores = [
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
    ]
    const superitendentes = [
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
    ]
    const coordenadoresCare = [
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
    ]
    
    // ********************************************************************************************

    const actions = (<div><i className="bi bi-pencil-square verde"></i> <i className="bi bi-x-lg vermelho"></i></div>)

    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
                <div id="main">
                    <p className="h3 title-2">Usuários</p>

                    {tipoInstituicao === "validadora" ?
                        (<>
                            <Table rows={funcionarios} tableName="Funcionários" actions={actions}/>
                            <Table rows={dirigentes} tableName="Dirigentes" actions={actions}/>
                            <Table rows={superitendentes} tableName="Superitendentes" actions={actions}/>
                            <Table rows={coordenadoresCare} tableName="Coordenadores Care" actions={actions}/>
                        </>) :
                        (<>
                            <Table rows={funcionarios} tableName="Funcionários" actions={actions}/>
                            <Table rows={dirigentes} tableName="Dirigentes" actions={actions}/>
                            <Table rows={diretores} tableName="Diretores" actions={actions}/>
                        </>)
                    }
                </div>
            </div>
        </div >
    )
}

export default Usuarios