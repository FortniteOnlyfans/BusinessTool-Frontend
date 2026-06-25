import {GET, POST} from "../backend/Backend.tsx";
import HandleStatus from "./HandleStatus.ts";
import {requestString} from "../AppPopup.tsx";
import {PROJ_ID} from "../menu/PageManager.tsx";

export default async function OpenProj() {
    const loginRes = await POST("/login", {
        username: "v22",
        password: "1234"
    });

    const res = await GET("/project/list");
    HandleStatus(res);
    if (res.payload) {
        const payload = res.payload;
        const arr = payload.projects;
        const selected = await requestString("Select one: " + arr);
        PROJ_ID = Number(selected);
    }
}