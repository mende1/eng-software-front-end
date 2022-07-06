import { format } from "date-fns";
import api from "../services/api";

async function handleAprovar(event) {
  event.preventDefault();

  try {
    await api.patch(`/diploma/${event.target.id}`, {
      status: "Aprovado",
    });
    alert("Diploma aprovado com sucesso.");
    window.location.reload();
  } catch (error) {
    alert("Ocorreu um erro. Tente novamente");
  }
}

async function handleRecusar(event) {
  event.preventDefault();

  try {
    await api.patch(`/diploma/${event.target.id}`, {
      status: "Recusado",
    });
    alert("Diploma recusado com sucesso.");
    window.location.reload();
  } catch (error) {
    alert("Ocorreu um erro. Tente novamente");
  }
}

async function handleBaixar(event) {
  event.preventDefault();

  try {
    const response = await api.get(`/diploma/file/${event.target.id}`, {
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "file.pdf");
    link.click();
  } catch (error) {
    alert("Ocorreu um erro. Tente novamente");
  }
}

function TableDiploma(props) {
  const heads = ["#", "Requerente", "Data", "Ações"];

  const renderHeads = heads.map((head, index) => (
    <th key={index} scope="col">
      {head}
    </th>
  ));

  const renderRows = props.rows.map((diploma, index) => (
    <tr key={index}>
      <th scope="row">{index}</th>

      <td key={0}>{diploma["student_name"]}</td>
      <td key={2}>
        {format(new Date(diploma["created_at"]), "dd'/'MM'/'yyyy")}
      </td>

      <td>
        <button
          className="bi bi-download"
          id={diploma.file}
          onClick={handleBaixar}
          style={{ border: "none", padding: "0" }}
        ></button>
        <button
          className="bi bi-check-lg verde mx-1"
          id={diploma.id}
          onClick={handleAprovar}
          style={{ border: "none", padding: "0" }}
        ></button>
        <button
          className="bi bi-x-lg vermelho"
          id={diploma.id}
          onClick={handleRecusar}
          style={{ border: "none", padding: "0" }}
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

export default TableDiploma;
