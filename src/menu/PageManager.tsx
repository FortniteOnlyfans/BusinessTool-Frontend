import {pageData} from "./pageData.tsx";

let currentPageId = "ums";

let setUpperColor;
let setLowerColor;
let setName;

export function initStates(stateColorUpper, stateColorLower, stateName) {
    setUpperColor = stateColorUpper;
    setLowerColor = stateColorLower;
    setName = stateName;
    setPage(currentPageId);
}

export function setPage(pageId) {
    currentPageId = pageId;
    const pageObj = pageData[pageId];
    console.log(pageId, pageObj);
    setUpperColor(pageObj.upperColor);
    setLowerColor(pageObj.lowerColor);
    setName(pageObj.name);
}