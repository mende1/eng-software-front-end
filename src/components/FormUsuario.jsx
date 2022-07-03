import { useState } from "react";

function FormUsuario() {
  const [tipo, setTipo] = useState("1");

  function handleChange(event) {
    setTipo(event.target.value);
  }

  // Variaveis do Back-end
  let tipoInstituicao = "validadora";

  //******************************************* */

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <form method="POST" className="container forms shadow mt-3 form">
        <p className="h3 title-2">Cadastro de Usuário</p>
        <div className="mb-3">
          <label htmlFor="user-type" className="form-label">
            Tipo de Usuário
          </label>
          <select
            onChange={handleChange}
            className="form-select"
            aria-label="Tipo de Usuário"
            id="user-type"
            name="user-type"
            value={tipo}
          >
            <option value="1">Funcionário</option>
            <option value="2">Dirigente</option>

            {tipoInstituicao === "validadora" ? (
              <>
                <option value="3">Superitendente</option>
                <option value="4">Coordenador CARE</option>
              </>
            ) : (
              <option value="3">Diretor</option>
            )}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome Completo
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
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="exemplo@email.com"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="digite sua senha"
            name="password"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telefone" className="form-label">
            Telefone
          </label>
          <input
            type="text"
            className="form-control"
            id="telefone"
            name="telefone"
            placeholder="insira o telefone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpf" className="form-label">
            CPF
          </label>
          <input
            type="text"
            className="form-control"
            id="cpf"
            name="cpf"
            placeholder="insira o cpf"
          />
        </div>
        <button type="submit" className="btn-1 btn btn-primary mb-3">
          Cadastrar
        </button>
      </form>
    </main>
  );
}

export default FormUsuario;
