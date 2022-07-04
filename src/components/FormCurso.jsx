function FormCurso(props) {
  return (
    <form method="POST" className="container forms shadow mt-3 form">
      <p className="h3 title-2">{props.titulo}</p>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="insira o nome"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="grau" className="form-label">
          Grau
        </label>
        <input
          type="text"
          className="form-control"
          id="grau"
          name="grau"
          placeholder="insira o grau"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eMec" className="form-label">
          e-MEC
        </label>
        <input
          type="text"
          className="form-control"
          id="eMec"
          name="eMec"
          placeholder="insira a eMec"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="atoAutorizacao" className="form-label">
          Ato de Autorização
        </label>
        <input
          type="text"
          className="form-control"
          id="atoAutorizacao"
          name="atoAutorizacao"
          placeholder="insira o Ato de Autorização"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="atoRenovacao" className="form-label">
          Ato de Renovacao
        </label>
        <input
          type="text"
          className="form-control"
          id="atoRenovacao"
          name="atoRenovacao"
          placeholder="insira o atoRenovacao"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="observacao" className="form-label">
          Observação
        </label>
        <input
          type="text"
          className="form-control"
          id="observacao"
          name="observacao"
          placeholder="insira a observação"
        />
      </div>
      <button type="submit" className="btn-1 btn btn-primary mb-3">
        {props.nomeBotao}
      </button>
    </form>
  );
}

export default FormCurso;
