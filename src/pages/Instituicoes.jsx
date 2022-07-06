import { useEffect, useState } from "react";
import DashboardComponent from "../components/DashboardComponent";
import TableInstituicoes from "../components/TableIntituicoes";
import api from "../services/api";

function Instituicoes() {
  const [instituicoes, setInstituicoes] = useState([]);

  useEffect(() => {
    const fetchInstituicoes = async () => {
      const response = await api.get("/institutions?type=PartnerInstitution");
      setInstituicoes(response.data);
    };

    fetchInstituicoes();
  }, []);

  const actionsLock = (
    <div>
      <i className="bi bi-pencil-square verde"></i>{" "}
      <i className="bi bi-lock vermelho"></i>
    </div>
  );
  const actionsUnlock = (
    <div>
      <i className="bi bi-pencil-square verde"></i>{" "}
      <i className="bi bi-unlock verde"></i>
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <div id="main">
          <p className="h3 title-2 mt-3">Instituições</p>
          <TableInstituicoes
            rows={instituicoes}
            tableName=""
            actions={actionsLock}
          />
        </div>
      </div>
    </div>
  );
}

export default Instituicoes;
