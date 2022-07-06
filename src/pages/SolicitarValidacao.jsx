import { useEffect, useState } from "react";
import DashboardComponent from "../components/DashboardComponent";
import api from "../services/api";

function SolicitarValidacao() {
  const [courses, setCourses] = useState([]);
  const [courseID, setCourseID] = useState(1);

  const [requerente, setRequerente] = useState("");
  const [file, setFile] = useState(null);

  function handleChangeRequerente(event) {
    event.preventDefault();
    setRequerente(event.target.value);
  }
  function handleChangeCourseId(event) {
    event.preventDefault();
    setCourseID(event.target.value);
  }
  function handleChangeFile(event) {
    event.preventDefault();
    const File = event.target.files[0];
    File.filename = File.name;
    // console.log(File);
    setFile(File);
  }

  useEffect(() => {
    async function fetchCourses() {
      const response = await api.get("/courses");

      setCourses(response.data);
    }

    fetchCourses();
  }, []);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append("file", file, file.filename);
    formData.append("course_id", courseID);
    formData.append("student_name", requerente);

    setErrorMessage("");
    setSuccessMessage("");

    try {
      await api.post("/diploma", formData, {
        headers: {
          "Content-type": "multipart/form-data; ",
        },
      });

      setSuccessMessage("Diploma solicitado com sucesso.");
      clearInputs();
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function clearInputs() {
    setRequerente("");
    setCourseID(1);
    setFile();
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="container forms shadow mt-3 form"
        >
          <p className="h3 title-2">Solicitar Validação</p>
          <div className="mb-3">
            <label htmlFor="requerente" className="form-label">
              Requerente
            </label>
            <input
              type="text"
              className="form-control"
              id="requerente"
              name="requerente"
              value={requerente}
              onChange={handleChangeRequerente}
              placeholder="insira o nome"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user-type" className="form-label">
              Curso
            </label>
            <select
              onChange={handleChangeCourseId}
              className="form-select"
              aria-label="Instituição"
              id="course-institution"
              name="course-institution"
              value={courseID}
            >
              {courses.map((course, index) => (
                <option value={course.id} key={index}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="solicitacao" className="form-label">
              Solicitação
            </label>
            <input
              type="file"
              className="form-control"
              id="solicitacao"
              name="solicitacao"
              onChange={handleChangeFile}
            />
          </div>
          <button type="submit" className="btn-1 btn btn-primary mb-3">
            Solicitar
          </button>
          <div className="pb-3 text-danger font-weight-bold">
            {errorMessage?.length ? errorMessage : ""}
          </div>
          <div className="pb-3 text-success font-weight-bold">
            {successMessage?.length ? successMessage : ""}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SolicitarValidacao;
