import { useState } from "react";
import "./Auth.css"
import {LOGIN, POST} from "../backend/Backend.tsx";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const data= await POST("/login", {
                username: username,
                password: password,
            });

            if (data.status === "success") {
                const tkn = data.headers.authorization;
                LOGIN(tkn);
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
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-left">

                        <p id="heading">Anmeldung</p>

                        <p id="text">Willkommen zurück!</p>

                        <form
                            className="auth-form"
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
                    <div className="auth-image">
                        <img
                            src="src/images/authImage.png"
                            alt="aesthetic"/>
                    </div>
                </div>
            </div>
        </>
    );
}