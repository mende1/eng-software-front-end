import { useNavigate } from "react-router-dom";
import api from "../services/api";

function TableCurso(props) {
  const navigate = useNavigate();

  const heads = ["#", "Nome", "Grau", "e-Mec", "Ações"];

  function handleEdit(event) {
    event.preventDefault();

    navigate(`/editarcurso/${event.target.id}`);
  }

  async function handleDelete(event) {
    event.preventDefault();

    try {
      await api.delete(`/courses/${event.target.id}`);
      alert("Curso deletado com sucesso.");
      window.location.reload();
    } catch (error) {
      alert("Ocorreu um erro ao deletar o curso. Tente novamente.");
    }
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
          </tr>
        </thead>
        <tbody>
          {props.rows.map((curso, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>

              <td key={0}>{curso["name"]}</td>
              <td key={1}>{curso["degree"]}</td>
              <td key={2}>{curso["emec"]}</td>

              <td>
                <div>
                  <button
                    className="bi bi-pencil-square mx-2"
                    onClick={handleEdit}
                    id={curso.id}
                    style={{ border: "none", padding: "0", color: "#59836A" }}
                  ></button>
                  <button
                    className="bi bi-x-lg"
                    onClick={handleDelete}
                    id={curso.id}
                    style={{ border: "none", padding: "0", color: "#FF0000" }}
                  ></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableCurso;
