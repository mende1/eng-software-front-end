import { useEffect, useState } from "react";
import DashboardComponent from "../components/DashboardComponent";
import Table from "../components/Table";
import TableDiploma from "../components/TableDiploma";
import api from "../services/api";

function ValidarDiploma() {
  const [diplomas, setDiplomas] = useState([]);

  useEffect(() => {
    async function fetchDiplomas() {
      const response = await api.get("/diploma");

      const data = [];

      response.data.map((diploma) => {
        if (diploma.status === "Em Análise") {
          data.push(diploma);
        }
      });

      setDiplomas(data);
    }

    fetchDiplomas();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <div id="main">
          <p className="h3 title-2">Solicitações de Validação de Diploma</p>
          <TableDiploma rows={diplomas} tableName="" />
        </div>
      </div>
    </div>
  );
}

export default ValidarDiploma;
