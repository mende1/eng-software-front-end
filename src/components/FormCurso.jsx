import { useEffect, useState } from "react";
import api from "../services/api";

function FormCurso(props) {
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [emec, setEmec] = useState("");
  const [institutionId, setInstitutionId] = useState(-1);

  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeDegree(event) {
    setDegree(event.target.value);
  }
  function handleChangeEmec(event) {
    setEmec(event.target.value);
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
      name,
      degree,
      emec,
      institutionId,
    };

    try {
      const message = props.editar
        ? "Curso editado com sucesso."
        : "Curso cadastrado com sucesso";

      if (props.editar) {
        await api.patch(`/courses/${props.courseID}`, data);
      } else {
        await api.post("/courses", data);
      }

      setSuccessMessage(message);
      clearInputs();
    } catch (error) {
      setErrorMessage("Ocorreu um erro, tente novamente.");
    }
  }

  function clearInputs() {
    setName("");
    setDegree("");
    setEmec("");
    setInstitutionId(institutions[0].id);
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
    <form
      method="POST"
      onSubmit={handleSubmit}
      className="container forms shadow mt-3 form"
    >
      <p className="h3 title-2">
        {props.editar ? "Editar Curso" : "Cadastrar Curso"}
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
        <label htmlFor="grau" className="form-label">
          Grau
        </label>
        <input
          type="text"
          className="form-control"
          id="grau"
          name="grau"
          value={degree}
          onChange={handleChangeDegree}
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
          value={emec}
          onChange={handleChangeEmec}
          placeholder="insira a eMec"
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
  );
}

export default FormCurso;
