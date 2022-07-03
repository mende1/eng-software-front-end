import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    function handleSubmit(){
        navigate("/instituicoes")
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="container forms shadow form mt-3" id="login">
                <p className="h3 title-2 mt-3">Login</p>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="exemplo@email.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Senha</label>
                        <input type="password" name="password" className="form-control" id="password" placeholder="digite sua senha"/>
                    </div>
                    <div className="mb-3">
                        <Link to="/recuperarsenha">Esqueceu a senha ?</Link>
                    </div>
                    <div>
                        <button type="submit" className="btn-1 btn btn-primary mb-3">Login</button>
                    </div>
            </form>
        </div>
    )
}

export default Login