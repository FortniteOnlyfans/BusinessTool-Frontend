import { GET } from "../backend/Backend.tsx";
import HandleStatus from "./HandleStatus.tsx";
import { requestString } from "../AppPopup.tsx";
import {PROJ_STATE} from "../menu/PageManager.tsx";


export default async function OpenProjVersion() {
    if (!PROJ_STATE.currentId) {
        console.error("No project selected! Please run OpenProj first.");
        return;
    }

    const projRes = await GET(`/project/${PROJ_STATE.currentId}/info`);
    HandleStatus(projRes, false);

    if (projRes.payload) {
        const versions: number[] = projRes.payload.versions || [];

        if (versions.length === 0) {
            await requestString("No versions found for this project.");
            return;
        }

        const versionDetailsPromises = versions.map(async (id) => {
            const verRes = await GET(`/project/version/${id}/info`);
            return {
                id: id,
                details: verRes.payload ? verRes.payload : "Failed to load info"
            };
        });

        const rawVersionsMeta = await Promise.all(versionDetailsPromises);

        const selected = await requestString(
            "Select a Version ID:\n" + JSON.stringify(rawVersionsMeta, null, 2)
        );

        PROJ_STATE.currentVersionId = Number(selected);
    }
}