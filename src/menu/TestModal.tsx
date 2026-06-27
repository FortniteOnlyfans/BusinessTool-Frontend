import type {ModalBlueprintProps} from "../Modal.tsx";
import {useState} from "react";
import {Button, TextField} from "@mui/material";

interface Data {
    username: string,
    password: string
}

export function TestModal({resolve}: ModalBlueprintProps<Data>) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        resolve({
            username,
            password
        })
    };

    return (
        <div>
            <TextField placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <TextField placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={submit}>Open</Button>
        </div>
    )
}