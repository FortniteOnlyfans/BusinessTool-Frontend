import { useState } from "react";
import {LOGIN} from "../backend/Backend.tsx";

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

            if (response.ok) {
                const tkn = response.headers.get("Authorization");
                if (tkn) {
                    LOGIN(tkn);
                }

                // Beispiel:
                // localStorage.setItem("token", data.token);
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error(error);
            alert("Serverfehler");
        }
    }

    return (
        <div>
            <h1>Login</h1>

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
    );
}