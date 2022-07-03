import Dashboard from '../components/Dashboard'
import Table from '../components/Table'
import { Link } from "react-router-dom";

function LogSuperitendente() {

    // Variaveis do Back-end

    const superitendentes = [
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
    ]

    // ********************************************************************************************

    const actions = (<Link to="/log">LOG</Link>)

    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
                <div id="main">
                    <p className="h3 title-2">Log de Superitendentes</p>
                    <Table rows={superitendentes} tableName="" actions={actions} />
                </div>
            </div>
        </div >
    )
}

export default LogSuperitendente