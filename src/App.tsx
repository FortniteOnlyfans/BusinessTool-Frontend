import './App.css'
import './components.tsx'
import {GreyBackground, PageBackground, PageHeader} from "./components.tsx"
import {CSSProperties, useEffect, useState} from "react";
import {currentPageId, initStates, setPage} from "./menu/PageManager.tsx";
import type {ProjectVersion} from "./menu/PageManager.tsx";
import {GlobalModalContainer} from "./Modal.tsx";
import {pageData} from "./menu/pageData.tsx";

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
    }, []);

    return (
        <>
            <PageHeader color={lowerColor} name={name} setPage={(p) => setPage(p)} />
            <PageBackground lowerColor={lowerColor} upperColor={upperColor}>
                <GreyBackground>
                    {Object.entries(pageData).map(([id, pageObj]) => {
                        if (!pageObj.page) return null;
                        const PageComponent = pageObj.page;

                        return (
                            <div
                                key={id}
                                style={{
                                    display: activeId === id ? "block" : "none",
                                    width: "100%",
                                    height: "100%"
                                }}
                            >
                                <PageComponent color={lowerColor} pid={id} />
                            </div>
                        );
                    })}
                </GreyBackground>
            </PageBackground>
            <GlobalModalContainer />
        </>
    );
}