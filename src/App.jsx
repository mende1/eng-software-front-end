import './App.css'
import Login from './pages/Login'
import CadastroUsuario  from './pages/CadastroUsuario'
import CadastroCurso  from './pages/CadastroCurso'
import CadastroInstituicao from './pages/CadastroInstituicao'
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="cadastrousuario" element={<CadastroUsuario />} />
        <Route path="cadastrocurso" element={<CadastroCurso />} />
        <Route path="cadastroinstituicao" element={<CadastroInstituicao />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
