import Dashboard from '../components/Dashboard'
import Table from '../components/Table'

function Log() {

    // Variaveis do Back-end

    const operacoes = [
        { "Data": "10-10-2022  19:25", "Operação": "Cadastrou usuário"},
        { "Data": "10-10-2022  19:25", "Operação": "Cadastrou usuário"},
        { "Data": "10-10-2022  19:25", "Operação": "Cadastrou usuário"},
    ]

    // ********************************************************************************************

    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
                <div id="main">
                    <p className="h3 title-2">Últimas Modificações</p>
                    <Table rows={operacoes} tableName="" />
                </div>
            </div>
        </div >
    )
}

export default Log