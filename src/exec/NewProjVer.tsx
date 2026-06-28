import type {ModalBlueprintProps} from "../Modal.tsx";
import {openModal} from "../Modal.tsx";
import {GET, POST} from "../backend/Backend.tsx";
import {loadPages, PROJ_STATE} from "../menu/PageManager.tsx";
import HandleStatus from "./HandleStatus.tsx";

export default async function() {
    const data = await openModal(NewProjVerModal);

    if (data) {
        const data = await POST(`/project/${PROJ_STATE.currentId}/version/create`, {});
        HandleStatus(data);
        if (data && data.status === "success") {
            const verId = data.payload.projVerId;
            PROJ_STATE.currentVersionId = verId;
            const v = (await GET(`/project/version/${verId}/info`)).payload;
            PROJ_STATE.setCurrentVersion(v);
            loadPages();
        }
    }
}

interface NewProjVerData {

}

export function NewProjVerModal({resolve}: ModalBlueprintProps<NewProjVerData>) {
    return <>
        <button className="inputNormal" onClick={() => resolve({})}>Ja</button>
    </>;
}