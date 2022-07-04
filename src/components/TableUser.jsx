function TableUser(props) {
  if (!props.rows.length) {
    return (
      <>
        <p className="h4 title-2 mt-5"> {props.tableName} </p>

        <table className="table"></table>
      </>
    );
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
        <i className="bi bi-pencil-square mx-2"></i>
        <i className="bi bi-x-lg"></i>
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
