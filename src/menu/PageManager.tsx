import {pageData} from "./pageData.tsx";

let currentPageId = "ums";

let setUpperColor;
let setLowerColor;
let setName;
let setInner;

export interface Project {
    name?: string,
    type?: string,
    latest?: number,
    versions?: [number],
    created?: number,
    startKosten?: [Geld]
}

export interface ProjectVersion {
    kosten?: [Geld],
    finanzierung?: [Geld],
    kapital?: [Geld],
    privat?: [Geld],
    ertrag?: [Geld],
    zeitspanne?: number,
    erstellt?: number,
    userName?: string,
    extra?: object
}

export interface Geld {
    name?: string,
    wert?: number,
    zinsen?: number,
    laufzeit?: number
}


export const PROJ_STATE = {
    currentId: 11,
    current: {} as Project,
    setCurrent: function(p: Project) {},
    currentVersionId: null as number | null,
    currentVersion: {} as ProjectVersion,
    setCurrentVersion: function(v: ProjectVersion) {}
};

export function initStates(stateColorUpper, stateColorLower, stateName, stateInner) {
    setUpperColor = stateColorUpper;
    setLowerColor = stateColorLower;
    setName = stateName;
    setInner = stateInner;
    setPage(currentPageId);
}

export function setPage(pageId) {
    const pageObj = pageData[pageId];
    if (pageObj.page) {
        currentPageId = pageId;
        setUpperColor(pageObj.upperColor);
        setLowerColor(pageObj.lowerColor);
        setName(pageObj.name);
        const p = pageObj.page;
        setInner(() => p);
    }
    if (pageObj.exec) {
        pageObj.exec();
    }
}