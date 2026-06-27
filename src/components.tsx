import "./App.css"
import * as React from "react";
import Menu from "./menu/Menu.tsx";
import {PROJ_STATE} from "./menu/PageManager.tsx";
import type {Project, ProjectVersion} from "./menu/PageManager.tsx";
import {useEffect, useState} from "react";

export function PageBackground({upperColor, lowerColor, children}) {
    return (
        <div className="pageBackground"
             style={{"--lowerColor": lowerColor, "--upperColor": upperColor} as React.CSSProperties}
        >
            {children}
        </div>
    )
}

export function PageHeader({ color, name, setPage }) {
    const [project, setProject] = useState({} as Project);
    const [version, setVersion] = useState({} as ProjectVersion);

    PROJ_STATE.setCurrent = setProject;
    PROJ_STATE.setCurrentVersion = setVersion;

    useEffect(() => {
        PROJ_STATE.current = project;
    }, [project]);

    useEffect(() => {
        PROJ_STATE.currentVersion = version;
    }, [version]);

    return (
        <div className="pageHeader" style={{ "--color": color } as React.CSSProperties}>
            <div className="header-left">
                <Menu color={color} setPage={setPage}/>
            </div>

            <div className="header-meta">
                <p>{project.name}</p>
                <p>{new Date(version.erstellt).toDateString()}</p>
            </div>

            <div className="header-title">
                {name}
            </div>

            <div className="header-right">
                <button>Right</button>
            </div>
        </div>
    );
}

export function GreyBackground({children}) {
    return (
        <div className="greyBackground">
            {children}
        </div>
    )
}

export function WhiteBackground({children}) {
    return (
        <div className="whiteBackground">
            {children}
        </div>
    )
}

export function InputHighlight({color, children}) {
    return (
        <input
            style={{"--color": color} as React.CSSProperties}
            className="inputHighlight"
        >
            {children}
        </input>
    )
}

export function InputNormal({children}) {
    return (
        <input className="inputNormal">
            {children}
        </input>
    )
}

export function AddBtn({children}) {
    return (
        <button className="addBtn">
            {children}
        </button>
    )
}

export function Dot({color}) {
    return (
        <div
            style={{"--color": color} as React.CSSProperties}
            className="dot"
        >

        </div>
    )
}

export function Info({color}) {
    return (
        <div
            style={{"--color": color} as React.CSSProperties}
            className="info"
        >
            <label
                style={{"--color": color} as React.CSSProperties}
                className="infoLabel"
            >
                i
            </label>
        </div>
    )
}