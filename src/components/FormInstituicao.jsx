function FormInstituicao(props) {
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
        <label htmlFor="endereco" className="form-label">
          Endereço
        </label>
        <input
          type="text"
          className="form-control"
          id="endereco"
          name="endereco"
          placeholder="insira o endereço"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cidade" className="form-label">
          Cidade
        </label>
        <input
          type="text"
          className="form-control"
          id="cidade"
          name="cidade"
          placeholder="insira a cidade"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="estado" className="form-label">
          Estado
        </label>
        <input
          type="text"
          className="form-control"
          id="estado"
          name="estado"
          placeholder="insira o estado"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="credenciamento" className="form-label">
          Credenciamento
        </label>
        <input
          type="text"
          className="form-control"
          id="credenciamento"
          name="credenciamento"
          placeholder="insira o credenciamento"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mantenedora" className="form-label">
          Mantenedora
        </label>
        <input
          type="text"
          className="form-control"
          id="mantenedora"
          name="mantenedora"
          placeholder="insira a mantenedora"
        />
      </div>
      <button type="submit" className="btn-1 btn btn-primary mb-3">
        {props.nomeBotao}
      </button>
    </form>
  );
}

export default FormInstituicao;
