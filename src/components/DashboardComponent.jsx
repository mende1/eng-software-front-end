import "../styles/Dashboard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRoleOfUser } from "../services/auth";

function DashboardComponent() {
  const itens = [
    {
      nome: "Usuários",
      link: "usuarios",
      icon: "bi-person",
      permissoes: ["diretor", "superintendente"],
    },
    {
      nome: "Cadastrar Usuário",
      link: "cadastrousuario",
      icon: "bi-person-plus",
      permissoes: ["diretor", "superintendente"],
    },
    {
      nome: "Cursos",
      link: "cursos",
      icon: "bi-book",
      permissoes: ["funcionario"],
    },
    {
      nome: "Cadastrar Curso",
      link: "cadastrocurso",
      icon: "bi-book",
      permissoes: ["funcionario"],
    },
    {
      nome: "Intituições",
      link: "instituicoes",
      icon: "bi-building",
      permissoes: ["todos"],
    },
    {
      nome: "Cadastrar Instituição",
      link: "cadastroinstituicao",
      icon: "bi-building",
      permissoes: ["dirigente"],
    },
    {
      nome: "Diplomas",
      link: "validarDiploma",
      icon: "bi-journal-bookmark-fill",
      permissoes: ["todos"],
    },
    {
      nome: "Validar Diploma",
      link: "validarDiploma",
      icon: "bi-journal-bookmark-fill",
      permissoes: ["funcionario"],
    },
    {
      nome: "Logs do Sistema",
      link: "logs",
      icon: "bi-card-text",
      permissoes: ["coordenador"],
    },
    { nome: "Logout", link: "logout", icon: "bi-power", permissoes: ["todos"] },
  ];

  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getRoleOfUser();
      setRole(role);
    };

    fetchRole();
  }, []);

  const renderItens = itens.map((item, index) => {
    return (
      (item.permissoes.includes(role) || item.permissoes.includes("todos")) && (
        <div key={index}>
          <li className="nav-item">
            <Link to={`/${item.link}`} className="nav-link p-3">
              <i className={`bi ${item.icon}`}></i> {item.nome}
            </Link>
          </li>
        </div>
      )
    );
  });

  if (!role) {
    return (
      <div>
        <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0">
          <Link
            className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"
            to="/dashboard"
          >
            DASHBOARD
          </Link>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed btn-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </header>
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block sidebar collapse  dashboard"
        ></nav>
      </div>
    );
  }

  return (
    <div>
      <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0">
        <Link
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"
          to="/dashboard"
        >
          DASHBOARD
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed btn-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </header>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block sidebar collapse  dashboard"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column menu">{renderItens}</ul>
        </div>
      </nav>
    </div>
  );
}

export default DashboardComponent;
