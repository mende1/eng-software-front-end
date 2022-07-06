import { useEffect, useState } from "react";
import DashboardComponent from "../components/DashboardComponent";
import TableAuditoria from "../components/TableAuditoria";
import api from "../services/api";

function Auditoria() {
  const [diplomas, setDiplomas] = useState([]);

  useEffect(() => {
    async function fetchDiplomas() {
      const response = await api.get("/diploma");

      const data = [];

      response.data.map((diploma) => {
        if (diploma.status === "Aprovado") {
          data.push(diploma);
        }
      });
      console.log(data);
      setDiplomas(data);
    }

    fetchDiplomas();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <div id="main">
          <p className="h3 title-2 mt-3">Validações de Diploma</p>
          <TableAuditoria rows={diplomas} tableName="" />
        </div>
      </div>
    </div>
  );
}

export default Auditoria;
