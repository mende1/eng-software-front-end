import { useEffect, useState } from "react";
import api from "../services/api";
import { getRoleOfUser } from "../services/auth";

function FormUsuario(props) {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getRoleOfUser();
      setUserRole(role);
    };

    fetchRole();
  }, []);

  const [role, setRole] = useState("funcionario");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCPF] = useState("");
  const [institutionId, setInstitutionId] = useState(1);

  function handleChangeRole(event) {
    setRole(event.target.value);
  }
  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleChangePassword(event) {
    setPassword(event.target.value);
  }
  function handleChangePhone(event) {
    setPhone(event.target.value);
  }
  function handleChangeCPF(event) {
    setCPF(event.target.value);
  }
  function handleChangeInstitutionId(event) {
    setInstitutionId(event.target.value);
  }

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const data = {
      username: username,
      name: name,
      lastname: name,
      email: email,
      password: password,
      phone: phone,
      cpf: cpf,
      role: role,
      institution_id: institutionId,
    };

    try {
      const message = props.editar
        ? "Usuário editado com sucesso."
        : "Usuário cadastrado com sucesso";

      if (props.editar) {
        await api.patch(`/users/${props.userID}`, data);
      } else {
        await api.post("/users", data);
      }

      setSuccessMessage(message);
      clearInputs();
    } catch (error) {
      setErrorMessage("Ocorreu um erro, tente novamente.");
    }
  }

  function clearInputs() {
    setRole("funcionario");
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setPhone("");
    setCPF("");
    setInstitutionId(1);
  }

  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    async function fetchInstitutions() {
      const response = await api.get("institutions");
      setInstitutions(response.data);
    }

    fetchInstitutions();
  }, []);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="container forms shadow mt-3 form"
      >
        <p className="h3 title-2">
          {props.editar ? "Editar Usuário" : "Cadastro de Usuário"}
        </p>
        <div className="mb-3">
          <label htmlFor="user-type" className="form-label">
            Tipo de Usuário
          </label>
          <select
            onChange={handleChangeRole}
            className="form-select"
            aria-label="Tipo de Usuário"
            id="user-type"
            name="user-type"
            value={role}
          >
            <option value={"funcionario"} defaultChecked>
              Funcionário
            </option>
            <option value={"dirigente"}>Dirigente</option>

            {userRole === "superintendente" && (
              <>
                <option value={"superintendente"}>Superitendente</option>
                <option value={"coordenador"}>Coordenador CARE</option>
              </>
            )}
            {userRole === "diretor" && (
              <option value={"diretor"}>Diretor</option>
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
            placeholder="Insira o nome completo"
            value={name}
            onChange={handleChangeName}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Insira o username"
            value={username}
            onChange={handleChangeUsername}
            required
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
            value={email}
            onChange={handleChangeEmail}
            required
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
            placeholder="Digite sua senha"
            name="password"
            value={password}
            onChange={handleChangePassword}
            required
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
            placeholder="Insira o telefone"
            value={phone}
            onChange={handleChangePhone}
            required
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
            placeholder="Insira o CPF"
            value={cpf}
            onChange={handleChangeCPF}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-type" className="form-label">
            Instituição
          </label>
          <select
            onChange={handleChangeInstitutionId}
            className="form-select"
            aria-label="Instituição"
            id="course-institution"
            name="course-institution"
            value={institutionId}
          >
            {institutions.map((institution, index) => (
              <option value={institution.id} key={index}>
                {institution.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn-1 btn btn-primary mb-3">
          {props.editar ? "Editar" : "Cadastrar"}
        </button>
        <div className="pb-3 text-danger font-weight-bold">
          {errorMessage?.length ? errorMessage : ""}
        </div>
        <div className="pb-3 text-success font-weight-bold">
          {successMessage?.length ? successMessage : ""}
        </div>
      </form>
    </main>
  );
}

export default FormUsuario;
