import { useState } from "react";

export default function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister(e) {
        e.preventDefault();

        try {

            console.log(
                JSON.stringify({
                    username,
                    password
                })
            );

            const response = await fetch(
                "http://localhost:4100/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                }
            );

            const data = await response.json();

            console.log(data);

            if (response.ok) {

                alert("Registrierung erfolgreich");

                setUsername("");
                setPassword("");

            } else {

                alert(data.message || "Fehler");

            }

        } catch (error) {

            console.error(error);

            alert("Backend nicht erreichbar");

        }
    }

    return (
        <div className="register-container">

            <h1>Registrieren</h1>

            <form onSubmit={handleRegister}>

                <input
                    type="text"
                    placeholder="Benutzername"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Passwort"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <button type="submit">
                    Konto erstellen
                </button>

            </form>
        </div>
    );
}