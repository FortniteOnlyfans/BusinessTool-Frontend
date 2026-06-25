import {GET, POST} from "../backend/Backend.tsx";
import HandleStatus from "./HandleStatus.tsx";
import {requestString} from "../AppPopup.tsx";
import {PROJ_STATE} from "../menu/PageManager.tsx";

export default async function OpenProj() {
    const loginRes = await POST("/login", {
        username: "v22",
        password: "1234"
    });

    const res = await GET("/project/list");
    HandleStatus(res, false);
    if (res.payload) {
        const payload = res.payload;
        const arr = payload.projects;
        const selected = await requestString("Select one: " + JSON.stringify(arr));
        PROJ_STATE.currentId = Number(selected);
        alert("Selected: " + PROJ_STATE.currentId)
    }
}