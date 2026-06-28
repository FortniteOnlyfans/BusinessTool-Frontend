import {GET, POST} from "../backend/Backend.tsx";
import HandleStatus from "./HandleStatus.tsx";
import {PROJ_STATE} from "../menu/PageManager.tsx";
import type {Project} from "../menu/PageManager.tsx";
import type {Geld} from "../menu/PageManager.tsx";
import type {ModalBlueprintProps} from "../Modal.tsx";
import {CostSection} from "../pages/Kosten.tsx";
import type {CostEntry} from "../pages/Kosten.tsx";
import {SelectHTMLAttributes, useState} from "react";
import {openModal} from "../Modal.tsx";
import {ComboBox, comboboxOptions, InputLabelled, InputNormal} from "../components.tsx";

export default async function() {
    const data = await openModal(NewProjModal);

    const startKostenGelder = data.startKosten.map((ce) => {
        return {
            name: ce.name,
            wert: ce.amount,
        } as Geld;
    });

    if (data) {
        const res = await POST("/project/create", {
            name: data.name,
            type: data.type,
            startKosten: startKostenGelder
        });

        HandleStatus(res);

        if (res.payload) {
            const pid = res.payload.projId;
            PROJ_STATE.currentId = Number(pid);
            const p: Project = (await GET(`/project/${pid}/info`)).payload as Project;
            PROJ_STATE.setCurrent(p);
        }
    }
}

interface NewProjData {
    name: string,
    type: string,
    startKosten: CostEntry[]
}

export function NewProjModal({resolve}: ModalBlueprintProps<NewProjData>) {
    const [name, setName] = useState("");
    const [type, setType] = useState("Freemium");
    const [startCosts, setStartCosts] = useState<CostEntry[]>([]);

    const types = [
        "Freemium",
        "Type2",
        "Type3"
    ];

    function handleSubmit() {
        resolve({
            name,
            type,
            startKosten: startCosts
        });
    }

    return <>
        <InputLabelled label="Name: " onChange={(e) => setName(e.target.value)}/>
        <ComboBox options={comboboxOptions(types)} label="Typ: " onChange={(e) => setType(e.target.value)}/>
        <CostSection title="Startkosten" entries={startCosts} setEntries={setStartCosts}/>
        <button className="inputNormal" onClick={handleSubmit}>Erstellen</button>
    </>;
}