function Login() {

    return (
        <div className="login">
            <h1>Login</h1>
            <form action="http://localhost:3300/login" method="POST">
                <input type="username" placeholder="Username" name="username"/>
                <input type="password" placeholder="Mot de Passe" name="password"/>
                <input type="submit" placeholder="Connexion"/>

            </form>

        <br />
        <p>OU</p>
        <br />

        Inscrivez-vous
        </div>
    )
}

export default Login;