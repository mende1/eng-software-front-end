import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

function RecuperarSenha() {
    const navigate = useNavigate()

    function handleSubmit(){
        navigate("/verificaridentidade")
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="container forms shadow form mt-3" id="login">
                <p className="h3 title-2 mt-3">Recuperar Senha</p>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="exemplo@email.com"/>
                    </div>
                    <p>Um código sera enviado ao email cadastrado.</p>
                    <div className="mb-3">
                        <button type="submit" className="btn-1 btn btn-primary me-3">Enviar</button>
                        <Link to="/" className="btn-2 btn btn-primary">Cancelar</Link>
                    </div>
            </form>
        </div>
    )
}

export default RecuperarSenha