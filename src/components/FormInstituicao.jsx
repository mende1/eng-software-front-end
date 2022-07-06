import { useEffect, useState } from "react";
import api from "../services/api";

function FormInstituicao(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [MEC, setMEC] = useState("");
  const [maintainer, setMaintainer] = useState("");
  const [validatorID, setValidatorID] = useState(0);

  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeAddress(event) {
    setAddress(event.target.value);
  }
  function handleChangeCity(event) {
    setCity(event.target.value);
  }
  function handleChangeState(event) {
    setState(event.target.value);
  }
  function handleChangeMEC(event) {
    setMEC(event.target.value);
  }
  function handleChangeMaintainer(event) {
    setMaintainer(event.target.value);
  }

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const data = {
      name,
      address,
      city,
      state,
      MEC,
      maintainer,
      type: "PartnerInstitution",
    };

    try {
      const message = props.editar
        ? "Usuário editado com sucesso."
        : "Usuário cadastrado com sucesso";

      if (props.editar) {
        await api.patch(`/institutions/${props.institutionID}`, data);
      } else {
        await api.post("/institutions/${id}/partner", data);
      }

      setSuccessMessage(message);
      clearInputs();
    } catch (error) {
      console.log(error);
      setErrorMessage("Ocorreu um erro, tente novamente.");
    }
  }

  function clearInputs() {
    setName("");
    setAddress("");
    setCity("");
    setState("");
    setMEC("");
    setMaintainer("");
  }

  useEffect(() => {
    async function fetchValidorID() {
      const response = await api.get("/auth/profile");

      setValidatorID(response.data.institution_id);
    }

    fetchValidorID();
  }, []);

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      className="container forms shadow mt-3 form"
    >
      <p className="h3 title-2">
        {props.editar ? "Edição de Instituição" : "Cadastro de Instituição"}
      </p>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={handleChangeName}
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
          value={address}
          onChange={handleChangeAddress}
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
          value={city}
          onChange={handleChangeCity}
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
          value={state}
          onChange={handleChangeState}
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
          value={MEC}
          onChange={handleChangeMEC}
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
          value={maintainer}
          onChange={handleChangeMaintainer}
          placeholder="insira a mantenedora"
        />
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
  );
}

export default FormInstituicao;
