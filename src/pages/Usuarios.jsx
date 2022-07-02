import Dashboard from '../components/Dashboard'
import Table from '../components/Table'

function Usuarios() {

    // Variaveis do Back-end
    const funcionarios = [
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
    ]
    const dirigentes = [
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
    ]
    const diretores = [
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
    ]
    // ********************************************************************************************

    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
                <div id="main">
                    <p className="h3 title-2">Usuários</p>
                    <Table rows={funcionarios} tableName="Funcionários"/>
                    <Table rows={dirigentes} tableName="Dirigentes"/>
                    <Table rows={diretores} tableName="Diretores"/>
                </div>
            </div>
        </div >
    )
}

export default Usuarios