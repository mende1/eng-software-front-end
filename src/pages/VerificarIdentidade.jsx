import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function VerificarIdentidade() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/alterarsenha");
  }

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="container forms shadow form mt-3"
        id="login"
      >
        <p className="h3 title-2 mt-3">Verificar Sua Indentidade</p>
        <div className="mb-3">
          <label htmlFor="codigo" className="form-label">
            Digite o código que enviamos para seu email.
          </label>
          <input
            type="text"
            name="codigo"
            className="form-control"
            id="codigo"
            placeholder="Inserir código"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn-1 btn btn-primary me-3">
            Próximo
          </button>
          <Link to="/" className="btn-2 btn btn-primary">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}

export default VerificarIdentidade;
