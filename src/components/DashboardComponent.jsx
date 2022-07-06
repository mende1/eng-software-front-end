import "../styles/Dashboard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getIsAdmin,
  getTypeOfIntitution,
  getRoleOfUser,
} from "../services/auth";
import { dashboardItems } from "../utils/itemsDashboard";

function DashboardComponent() {
  const [role, setRole] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [typeOfInstitution, setTypeOfInstitution] = useState("");

  useEffect(() => {
    async function fetchRole() {
      const role = await getRoleOfUser();
      setRole(role);
    }

    async function fetchIsAdmin() {
      const responseIsAdmin = await getIsAdmin();
      setIsAdmin(responseIsAdmin);
    }

    async function fetchTypeOfInstitution() {
      const type = await getTypeOfIntitution();
      setTypeOfInstitution(type);
    }

    fetchRole();
    fetchIsAdmin();
    fetchTypeOfInstitution();
  }, []);

  const page = window.location.pathname.split("/").at(-1);

  const renderItens = dashboardItems.map((item, index) => {
    if (!isAdmin) {
      if (
        item.instituicao === "parceira" &&
        !(typeOfInstitution === "PartnerInstitution")
      ) {
        return;
      }

      if (
        item.instituicao === "validadora" &&
        !(typeOfInstitution === "ValidatorInstitution")
      ) {
        return;
      }
    }

    return (
      (item.permissoes.includes(role) ||
        item.permissoes.includes("todos") ||
        isAdmin) && (
        <div key={index}>
          <li
            className={`nav-item ${item.link == page ? "selecionado" : ""} ${
              item.link === "dashboard" && "h4 title-3 pb-4"
            }`}
          >
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
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block sidebar collapse dashboard"
        ></nav>
      </div>
    );
  }

  return (
    <div>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block pt-0 sidebar collapse dashboard"
      >
        <div className="position-sticky">
          <ul className="nav flex-column menu">{renderItens}</ul>
        </div>
      </nav>
    </div>
  );
}

export default DashboardComponent;
