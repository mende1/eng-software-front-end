import Dashboard from '../components/Dashboard'

function Usuarios() {

    // Variaveis do Back-end
    const rows = [
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
        { "Nome": "João", "Email": "diegocarapia@hotmail.com", "Telefone": "71 3352-1413" },
    ]
    // ********************************************************************************************

    const heads = ["#", ...Object.keys(rows[0]), "Ações"]

    const renderHeads = heads.map((head, index) =>
        <th key={index} scope="col">{head}</th>
    )

    const renderRows = rows.map((user, index) =>
        <tr key={index}>
            <th scope='row'>{index}</th>
            <td>{user.Nome}</td>
            <td>{user.Email}</td>
            <td>{user.Telefone}</td>
            <td>
                <i className="bi bi-pencil-square"></i> <i className="bi bi-x-lg"></i>
            </td>
        </tr>
    )

    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
                <div id="main">
                    <p className="h3 title-2">Usuários</p>
                    <p className="h4 title-2 mt-5"> Funcionários </p>

                    <table className="table">
                        <thead>
                            <tr>
                                {renderHeads}
                            </tr>

                        </thead>
                        <tbody>
                            {renderRows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Usuarios