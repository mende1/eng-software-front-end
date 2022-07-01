function LoginForm() {
    return (
        <div class="container">
            <form method="POST" class="container forms shadow" id="login">
                <p class="h3 title-2 mt-3">Login</p>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="exemplo@email.com" required/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Senha</label>
                        <input type="password" name="password" class="form-control" id="password" placeholder="digite sua senha" required/>
                    </div>
                    <div class="mb-3">
                        <a href="recover_password.php">Esqueceu a senha ?</a>
                    </div>
                    <div>
                        <button type="submit" class="btn-1 btn btn-primary mb-3">Login</button>
                    </div>
            </form>
        </div>
    )
}

export default LoginForm