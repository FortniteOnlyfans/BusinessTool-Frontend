import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Auth/Login.tsx";
import Register from "./pages/Auth/Register.tsx";
import Umsatz from "./pages/Umsatz/Umsatz.tsx";

function App() {
    const token = localStorage.getItem("token");

    console.log(token);
    return (
        <Routes>
            <Route
                path="/"
                element={
                    token
                        ? <Navigate to="/register" />
                        : <Login />
                }
            />

            <Route path="/register" element={<Register />} />
            <Route path="/umsatz" element={<Umsatz />}/>

        </Routes>
    );

}

export default App;