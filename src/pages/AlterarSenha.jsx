import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

function AlterarSenha() {
    const navigate = useNavigate()

    function handleSubmit(){
        navigate("/instituicoes")
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="container forms shadow form mt-3" id="login">
                <p className="h3 title-2 mt-3">Alterar Senha</p>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Senha</label>
                        <input type="password" name="password" className="form-control" id="password" placeholder="digite sua senha"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password2" className="form-label">Repetir Senha</label>
                        <input type="password" name="password2" className="form-control" id="password2" placeholder="repita a senha"/>
                    </div>
                    <div>
                        <button type="submit" className="btn-1 btn btn-primary mb-3">Alterar</button>
                    </div>
            </form>
        </div>
    )
}

export default AlterarSenha