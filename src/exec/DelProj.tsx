import {POST} from "../backend/Backend.tsx";
import {PROJ_STATE} from "../menu/PageManager.tsx";
import HandleStatus from "./HandleStatus.tsx";

export default async function () {
    const res = await POST(`/project/${PROJ_STATE.currentId}/delete`, {});
    HandleStatus(res);
}