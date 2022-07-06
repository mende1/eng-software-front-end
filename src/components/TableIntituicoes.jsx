import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { getRoleOfUser } from "../services/auth";

function TableInstituicoes(props) {
  const [role, setRole] = useState("");

  useEffect(() => {
    async function fetchRole() {
      setRole(await getRoleOfUser());
    }

    fetchRole();
  }, []);

  const navigate = useNavigate();

  const heads = ["#", "Nome", "Credenciamento", "Mantenedora"];

  function handleEdit(event) {
    event.preventDefault();

    navigate(`/editarinstituicao/${event.target.id}`);
  }

  return (
    <>
      <p className="h4 title-2 mt-5"> {props.tableName} </p>

      <table className="table">
        <thead>
          <tr>
            {heads.map((head, index) => (
              <th key={index} scope="col">
                {head}
              </th>
            ))}
            {(role === "dirigente" || role === "superintendente") && (
              <th scope="col">Ações</th>
            )}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((intituicao, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>

              <td key={0}>{intituicao["name"]}</td>
              <td key={1}>{intituicao["MEC"]}</td>
              <td key={2}>{intituicao["maintainer"]}</td>

              <td>
                {(role === "dirigente" || role === "superintendente") && (
                  <div>
                    <button
                      className="bi bi-pencil-square mx-2"
                      onClick={handleEdit}
                      id={intituicao.id}
                      style={{ border: "none", padding: "0", color: "#59836A" }}
                    ></button>
                    <button
                      className="bi bi-lock"
                      style={{ border: "none", padding: "0", color: "#FF0000" }}
                    ></button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableInstituicoes;
