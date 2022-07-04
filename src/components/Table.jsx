function Table(props) {
  const attributes = Object.keys(props.rows[0]);
  const heads = ["#", ...attributes, "Ações"];

  const renderHeads = heads.map((head, index) => (
    <th key={index} scope="col">
      {head}
    </th>
  ));

  const renderRows = props.rows.map((user, index) => (
    <tr key={index}>
      <th scope="row">{index}</th>

      {attributes.map((attribute, i) => (
        <td key={i}>{user[attribute]}</td>
      ))}

      <td>
        {props.actions}
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

export default Table;
