import {POST} from "../backend/Backend.tsx";
import HandleStatus from "./HandleStatus.tsx";
import {PROJ_STATE} from "../menu/PageManager.tsx";

export default async function() {
    const name = prompt("Name?");
    const type = prompt("Typ?")

    const res = await POST("/project/create", {
        name: name,
        type: type,
        startKosten: []
    });

    HandleStatus(res);

    if (res.payload) {
        PROJ_STATE.currentId = Number(res.payload.projId);
    }
}

export function NewProjModal({color}) {


    return <>

    </>;
}