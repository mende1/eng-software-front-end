import { useEffect, useState } from "react";
import DashboardComponent from "../components/DashboardComponent";
import Table from "../components/Table";
import TableCurso from "../components/TableCurso";
import api from "../services/api";

function Cursos() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const response = await api.get("courses");
      setCourses(response.data);
    }

    fetchCourses();
  }, []);

  const actions = (
    <div>
      <i className="bi bi-pencil-square verde"></i>{" "}
      <i className="bi bi-x-lg vermelho"></i>
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardComponent />
        <div id="main">
          <p className="h3 title-2">Cursos</p>
          <TableCurso rows={courses} tableName="" />
        </div>
      </div>
    </div>
  );
}

export default Cursos;
