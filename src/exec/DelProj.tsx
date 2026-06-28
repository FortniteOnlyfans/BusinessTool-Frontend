import {POST} from "../backend/Backend.tsx";
import {PROJ_STATE} from "../menu/PageManager.tsx";
import HandleStatus from "./HandleStatus.tsx";

export default async function () {
    const res = await POST(`/project/${PROJ_STATE.currentId}/delete`, {});
    HandleStatus(res);
    if (res.status === "success") {
        PROJ_STATE.currentVersionId = 0;
        PROJ_STATE.setCurrentVersion({});
        PROJ_STATE.currentId = 0;
        PROJ_STATE.setCurrent({});
    }
}