function LoginForm() {
    return (
        <div className="container">
            <form method="POST" className="container forms shadow form" id="login">
                <p className="h3 title-2 mt-3">Login</p>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="exemplo@email.com" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Senha</label>
                        <input type="password" name="password" className="form-control" id="password" placeholder="digite sua senha" required/>
                    </div>
                    <div className="mb-3">
                        <a href="recover_password.php">Esqueceu a senha ?</a>
                    </div>
                    <div>
                        <button type="submit" className="btn-1 btn btn-primary mb-3">Login</button>
                    </div>
            </form>
        </div>
    )
}

export default LoginForm