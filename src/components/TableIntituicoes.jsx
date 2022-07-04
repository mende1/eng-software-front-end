function TableInstituicoes(props) {
  const heads = ["#", "Nome", "Credenciamento", "Mantenedora", "Ações"];

  const renderHeads = heads.map((head, index) => (
    <th key={index} scope="col">
      {head}
    </th>
  ));

  const renderRows = props.rows.map((intituicao, index) => (
    <tr key={index}>
      <th scope="row">{index}</th>

      <td key={0}>{intituicao["name"]}</td>
      <td key={1}>{intituicao["MEC"]}</td>
      <td key={2}>{intituicao["maintainer"]}</td>

      <td>{props.actions}</td>
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

export default TableInstituicoes;
