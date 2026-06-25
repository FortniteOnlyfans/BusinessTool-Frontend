import {POST} from "../backend/Backend.tsx";
import HandleStatus from "./HandleStatus.ts";

export default async function() {
    const name = prompt("Name?");
    const type = prompt("Typ?")

    const res = await POST("/project/create", {
        name: name,
        type: type,
        startKosten: []
    });

    HandleStatus(res);
}