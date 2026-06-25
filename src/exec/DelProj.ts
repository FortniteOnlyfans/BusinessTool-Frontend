import {POST} from "../backend/Backend.tsx";
import {PROJ_ID} from "../menu/PageManager.tsx";
import HandleStatus from "./HandleStatus.ts";

export default async function () {
    const res = await POST(`/project/${PROJ_ID}/delete`, {});
    HandleStatus(res);
}