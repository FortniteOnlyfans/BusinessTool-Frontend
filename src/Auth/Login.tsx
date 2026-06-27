import { useState } from "react";
import "./Auth.css"

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:4100/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const data = await response.json();

            if (data.status !== "success") {
                alert(data.message);
            }

        } catch (error) {
            console.error(error);
            alert("Serverfehler");
        }
    }

    return (
        <>
            <div className="auth-header">
                <img src="src/images/logo.png" alt="logo" />
            </div>
            <div className="login-container">
                <div className="login-card">
                    <div className="login-left">

                        <p id="heading">Anmeldung</p>

                        <p id="text">Willkommen zurück!</p>

                        <form
                            className="login-form"
                            onSubmit={handleLogin}
                        >
                            <input
                                type="username"
                                placeholder="Benutzername"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}/>

                            <span id="spacer"></span>

                            <input
                                type="password"
                                placeholder="Passwort"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>

                            <button type="submit">
                                Anmelden
                            </button>
                        </form>
                        <p>Noch kein Konto?
                            <span id="rainbow-text">Registrieren</span>
                        </p>
                    </div>
                    <div className="login-image">
                        <img
                            src="src/images/authImage.png"
                            alt="aesthetic"/>
                    </div>
                </div>
            </div>
        </>
    );
}