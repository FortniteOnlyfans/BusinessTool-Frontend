import { useState } from "react";
import "./Auth.css"
import { POST} from "../backend/Backend.tsx";
import HandleStatus from "../exec/HandleStatus.tsx";

export default function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    async function handleRegister(e) {
        e.preventDefault();



        if (password === passwordConfirm) {
            try {
                const data= await POST("/register", {
                    username: username,
                    password: password,
                });
                HandleStatus(data, false);

                if (data.status === "success") {
                    window.location.href = "/login";
                }

            } catch (error) {
                console.error(error);
                alert("Serverfehler");
            }

        }else {
            alert("Passwörter stimmen nicht überein!");
            setPassword("");
            setPasswordConfirm("");
        }
    }

    return (
        <>
            <div className="auth-header">
                <img src="src/images/logo.png" alt="logo" id="logo"/>
            </div>
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-left">

                        <p id="heading">Registrierung</p>

                        <p id="text">Erstellen Sie hier Ihr Konto.</p>

                        <form
                            className="auth-form"
                            onSubmit={handleRegister}
                        >
                            <input
                                type="username"
                                placeholder="Benutzername"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />

                            <span id="spacer"></span>

                            <input
                                type="password"
                                placeholder="Passwort"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <input
                                type="password"
                                placeholder="Passwort bestätigen"
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                required
                            />

                            <button type="submit">
                                Konto erstellen
                            </button>
                        </form>
                        <p>Sie haben bereits ein Konto?
                            <a href={"/login"}><span id="rainbow-text">Anmelden</span></a>
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