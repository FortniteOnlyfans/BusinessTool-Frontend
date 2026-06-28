import './App.css'
import './components.tsx'
import {GreyBackground, PageBackground, PageHeader} from "./components.tsx"
import {CSSProperties, useEffect, useState} from "react";
import {currentPageId, initStates, loadPages, PROJ_STATE, setPage} from "./menu/PageManager.tsx";
import type {Project} from "./menu/PageManager.tsx";
import type {ProjectVersion} from "./menu/PageManager.tsx";
import {GlobalModalContainer} from "./Modal.tsx";
import {pageData} from "./menu/pageData.tsx";
import {GET} from "./backend/Backend.tsx";

export interface InnerProps {
    color: string;
    registerHooks: (hooks: {
        save: (data: ProjectVersion) => void;
        load: (data: ProjectVersion) => void;
    }) => void;
}

export default function App() {
    const [upperColor, setUpperColor] = useState("#e7d2d8");
    const [lowerColor, setLowerColor] = useState("#bf3f60");
    const [name, setName] = useState("Umsatz");

    const [activeId, setActiveId] = useState(currentPageId);

    useEffect(() => {
        initStates(setUpperColor, setLowerColor, setName, setActiveId);

        PROJ_STATE.currentId = 11;
        GET(`/project/${11}/info`).then(d => {
            const p: Project = d.payload as Project;
            PROJ_STATE.setCurrent(p);
        })

     /*   PROJ_STATE.currentId = 15;
        GET(`/project/${15}/info`).then(d => {
            const p: Project = d.payload as Project;
            PROJ_STATE.setCurrent(p);
        });

        PROJ_STATE.currentVersionId = 9;
        GET(`/project/version/${9}/info`).then(d => {
            const v = d.payload;
            console.log(v);
            PROJ_STATE.setCurrentVersion(v);
            loadPages();
        })*/

    }, []);

    return (
        <>
            <PageHeader color={lowerColor} name={name} setPage={(p) => setPage(p)} />
            <PageBackground lowerColor={lowerColor} upperColor={upperColor}>
                    {Object.entries(pageData).map(([id, pageObj]) => {
                        if (!pageObj.page) return null;
                        const PageComponent = pageObj.page;

                        return (
                            <div
                                key={id}
                                style={{
                                    display: activeId === id ? "flex" : "none",
                                    width: "100%",
                                    height: "100%",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <PageComponent color={lowerColor} pid={id} />
                            </div>
                        );
                    })}
            </PageBackground>
            <GlobalModalContainer />
        </>
    );
}