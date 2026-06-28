import { pageData } from "./pageData.tsx";
import {POST} from "../backend/Backend.tsx";
import HandleStatus from "../exec/HandleStatus.tsx";

export interface Geld {
    name?: string;
    wert?: number;
    zinsen?: number;
    laufzeit?: number;
}

export interface FreemiumExtra {
    basisNutzer?: number;
    premiumNutzer?: number;
    preisPremium?: number;
    aboZeit?: number;
    wachstumsrate?: number;
    varKosten?: Geld[];
}

export interface ProjectVersion {
    kosten?: Geld[];
    finanzierung?: Geld[];
    kapital?: Geld[];
    privat?: Geld[];
    ertrag?: Geld[];
    zeitspanne?: number;
    erstellt?: number;
    userName?: string;
    extra?: FreemiumExtra;
}

export interface Project {
    name?: string;
    type?: string;
    latest?: number;
    versions?: number[];
    created?: number;
    startKosten?: Geld[];
}

export interface PageHooks {
    save: (pv: ProjectVersion) => void;
    load: (pv: ProjectVersion) => void;
}

let setUpperColor: (color: string) => void;
let setLowerColor: (color: string) => void;
let setName: (name: string) => void;
let setCurrentPageIdState: (id: string) => void;

export let currentPageId = "ums";

export const PROJ_STATE = {
    currentId: 11,
    current: {} as Project,
    setCurrent: function (p: Project) { this.current = p; },
    currentVersionId: null as number | null,
    currentVersion: {} as ProjectVersion,
    setCurrentVersion: function (v: ProjectVersion) { this.currentVersion = v; }
};

export const pageHookRegistry: Record<string, PageHooks> = {};

export function initStates(stateColorUpper, stateColorLower, stateName, stateCurrentPageId) {
    setUpperColor = stateColorUpper;
    setLowerColor = stateColorLower;
    setName = stateName;
    setCurrentPageIdState = stateCurrentPageId;
    setPage(currentPageId);
}

export function setPage(pageId: string) {
    const pageObj = pageData[pageId];
    if (!pageObj) return;

    if (pageObj.page) {
        currentPageId = pageId;
        setUpperColor(pageObj.upperColor);
        setLowerColor(pageObj.lowerColor);
        setName(pageObj.name);
        setCurrentPageIdState(pageId);
    }
    if (pageObj.exec) {
        pageObj.exec();
    }
}

export async function savePages() {
    const pv = PROJ_STATE.currentVersion;
    for (const id in pageData) {
        const d = pageData[id];
        if (d.page) {
            const hooks = pageHookRegistry[id];
            if (hooks && hooks.save) {
                hooks.save(pv);
            }
        }
    }
    console.log("Global ProjectVersion saved layout:", PROJ_STATE.currentVersion);
    const res = await POST(`/project/version/${PROJ_STATE.currentVersionId}/save`, PROJ_STATE.currentVersion);
    HandleStatus(res);
}

export function loadPages(pv = PROJ_STATE.currentVersion) {
    console.log("load pages: " + JSON.stringify(pv));
    for (const id in pageData) {
        const d = pageData[id];
        console.log(id + ": " + d);
        if (d.page) {
            console.log("inner")
            const hooks = pageHookRegistry[id];
            if (hooks && hooks.load) {
                console.log("hook")
                hooks.load(pv);
            }
        }
    }
}