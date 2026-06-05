import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Auth.module.css';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

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

            if (data.status === "success") {
                navigate("/Umsatz");
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error(error);
            alert("Serverfehler");
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className="login-card">
                <div className="login-left">

                    <h1>Anmeldung</h1>

                    <p>Willkommen zurück!</p>

                    <form onSubmit={handleLogin}>
                        <input
                            type="username"
                            placeholder="Benutzername"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Passwort"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="submit">
                            Einloggen
                        </button>
                    </form>
                </div>
                <div className="login-image">
                    <img
                        src="/images/"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}