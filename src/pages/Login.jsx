import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import api from "../services/api";
import { Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState();

    function handleChangeUsername(event) {
        setUsername(event.target.value);
    }

    function handleChangePassword(event) {
        setPassword(event.target.value);
    }

    function handleClearForms() {
        setUsername("");
        setPassword("");
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await api.post("/auth/login", {
                username,
                password,
            });

            login(response.data.access_token);
            navigate("/dashboard");
        } catch (error) {
            if (error.response.status === 404) {
                handleClearForms();
                setErrorMessage("Usuário não encontrado!");
            } else {
                handleClearForms();
                setErrorMessage("Ocorreu um erro inesperado. Tente novamente.");
            }
        }
    }

    return (
        <div className="container">
            <form
                onSubmit={handleSubmit}
                className="container forms shadow form"
                id="login"
            >
                <p className="h3 title-2 mt-3">Login</p>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChangeUsername}
                        className="form-control"
                        id="username"
                        placeholder="Digite o seu usuário"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Senha
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChangePassword}
                        className="form-control"
                        id="password"
                        placeholder="Digite sua senha"
                    />
                </div>
                <div className="pb-3 text-danger font-weight-bold">
                    {errorMessage?.length ? errorMessage : ""}
                </div>
                <div className="mb-3">
                    <Link to="/recuperarsenha">Esqueceu a senha ?</Link>
                </div>
                <div>
                    <button type="submit" className="btn-1 btn btn-primary mb-3">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
