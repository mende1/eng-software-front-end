import '../styles/Dashboard.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { getRoleOfUser } from '../services/auth';

function Dashboard() {
    const itens = [
        { "nome": "Usuários", "link": "usuarios", "icon": "bi-person" },
        { "nome": "Cadastrar Usuário", "link": "cadastrousuario", "icon": "bi-person-plus" },
        { "nome": "Cursos", "link": "cursos", "icon": "bi-book" },
        { "nome": "Cadastrar Curso", "link": "cadastrocurso", "icon": "bi-book" },
        { "nome": "Intituições", "link": "instituicoes", "icon": "bi-building" },
        { "nome": "Cadastrar Instituição", "link": "cadastroinstituicao", "icon": "bi-building" },
        { "nome": "Validar Diploma", "link": "validarDiploma", "icon": "bi-journal-bookmark-fill" },
        { "nome": "Log Superitendente", "link": "logsuperitendente", "icon": "bi-card-text" },
        { "nome": "Logout", "link": "logout", "icon": "bi-power" },
    ]

    useEffect(() => {
        getRoleOfUser();
    },[])

    const renderItens = itens.map((item, index) =>
        <div key={index}>
            <li className='nav-item'>
                <Link to={`/${item.link}`} className="nav-link p-3">
                    <i className={`bi ${item.icon}`}></i> {item.nome}
                </Link>
            </li>
        </div>
    )


    return (
        <div>
            <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0">
                <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to="/usuarios">DASHBOARD</Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed btn-1" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </header>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse  dashboard">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column menu" >
                        {renderItens}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Dashboard
