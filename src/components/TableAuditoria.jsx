import { format } from "date-fns";
import api from "../services/api";

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

function TableAuditoria(props) {
  const heads = [
    "Data",
    "Requerente",
    "Funcionário Requerente",
    "Funcionário Validador",
    "Ações",
  ];

  const renderHeads = heads.map((head, index) => (
    <th key={index} scope="col">
      {head}
    </th>
  ));

  const renderRows = props.rows.map((diploma, index) => (
    <tr key={index}>
      <th scope="row">
        {format(new Date(diploma.created_at), "dd'-'MM'-'yyyy' 'hh':'mm")}
      </th>

      <td key={0}>{diploma.student_name}</td>
      <td key={1}>{diploma.applicant.name}</td>
      <td key={1}>{diploma.validator.name}</td>

      <td>
        <button
          className="bi bi-download"
          id={diploma.file}
          onClick={handleBaixar}
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

export default TableAuditoria;
