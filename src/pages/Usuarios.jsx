import { useEffect, useState } from "react";
import Dashboard from "../components/DashboardComponent";
import TableUser from "../components/TableUser";
import api from "../services/api";
import { getRoleOfUser } from "../services/auth";

function Usuarios() {
  const [role, setRole] = useState("");
  const [funcionarios, setFuncionarios] = useState([]);
  const [coordenadores, setCoordenadores] = useState([]);
  const [superintendentes, setSuperintendentes] = useState([]);
  const [diretores, setDiretores] = useState([]);
  const [dirigentes, setDirigentes] = useState([]);

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getRoleOfUser();
      setRole(role);
    };

    fetchRole();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersResponse = await api.get("users");

      usersResponse.data.forEach((user) => {
        const role = user.role;

        switch (role) {
          case "funcionario":
            setFuncionarios((previousState) => [...previousState, user]);
            break;

          case "coordenador":
            setCoordenadores((previousState) => [...previousState, user]);
            break;

          case "superintendente":
            setSuperintendentes((previousState) => [...previousState, user]);
            break;

          case "diretor":
            setDiretores((previousState) => [...previousState, user]);
            break;

          case "dirigente":
            setDirigentes((previousState) => [...previousState, user]);
            break;
        }
      });
    };

    fetchUsers();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Dashboard />
        <div id="main">
          <p className="h3 title-2 mt-3">Usuários</p>

          {role === "diretor" && (
            <>
              <TableUser rows={funcionarios} tableName="Funcionários" />
              <TableUser rows={dirigentes} tableName="Dirigentes" />
              <TableUser rows={diretores} tableName="Diretores" />
            </>
          )}
          {role === "superintendente" && (
            <>
              <TableUser rows={funcionarios} tableName="Funcionários" />
              <TableUser rows={dirigentes} tableName="Dirigentes" />
              <TableUser rows={superintendentes} tableName="Superitendentes" />
              <TableUser rows={coordenadores} tableName="Coordenadores Care" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
