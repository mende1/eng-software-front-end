import { useNavigate } from "react-router-dom";
import api from "../services/api";

function TableUser(props) {
  const navigate = useNavigate();

  if (!props.rows.length) {
    return (
      <>
        <p className="h4 title-2 mt-5"> {props.tableName} </p>

        <table className="table"></table>
      </>
    );
  }

  async function handleDelete(event) {
    event.preventDefault();
    try {
      await api.delete(`/users/${event.target.id}`);
      alert("Usuário deletado com sucesso.");
      window.location.reload();
    } catch (error) {
      alert("Ocorreu um erro ao deletar o usuário. Tente novamente.");
    }
  }

  function handleEdit(event) {
    event.preventDefault();

    navigate(`/editarusuario/${event.target.id}`);
  }

  const heads = ["#", "Nome", "Email", "CPF", "Ações"];

  const renderHeads = heads.map((head, index) => (
    <th key={index} scope="col">
      {head}
    </th>
  ));

  const renderRows = props.rows.map((user, index) => (
    <tr key={index}>
      <th scope="row">{index}</th>

      <td key={0}>{user["name"]}</td>
      <td key={1}>{user["email"]}</td>
      <td key={2}>{user["cpf"]}</td>

      <td>
        <button
          className="bi bi-pencil-square mx-2"
          id={user.id}
          onClick={handleEdit}
          style={{ border: "none", padding: "0", color: "#59836A" }}
        ></button>
        <button
          className="bi bi-x-lg"
          id={user.id}
          onClick={handleDelete}
          style={{ border: "none", padding: "0", color: "#FF0000" }}
        ></button>
      </td>
    </tr>
  ));

  return (
    <>
      <p className="h4 title-2 mt-5"> {props.tableName} </p>

      <table className="table">
        <thead>
          <tr>{renderHeads}</tr>
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
    </>
  );
}

export default TableUser;
