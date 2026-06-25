import {pageData} from "./pageData.tsx";

let currentPageId = "ums";

let setUpperColor;
let setLowerColor;
let setName;
let setInner;

export const PROJ_STATE = {
    currentId: 11,
    currentVersionId: null as number | null
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