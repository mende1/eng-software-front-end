import "./App.css";
import Login from "./pages/Login";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroCurso from "./pages/CadastroCurso";
import CadastroInstituicao from "./pages/CadastroInstituicao";
import Usuarios from "./pages/Usuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logout } from "./pages/Logout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        <Route path="/cadastrocurso" element={<CadastroCurso />} />
        <Route path="/cadastroinstituicao" element={<CadastroInstituicao />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
