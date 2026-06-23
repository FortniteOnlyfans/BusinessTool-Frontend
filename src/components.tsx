import "./App.css"
import * as React from "react";

export function PageBackground({upperColor, lowerColor, children}) {
    return (
        <div className="pageBackground"
             style={{"--lowerColor": lowerColor, "--upperColor": upperColor} as React.CSSProperties}
        >
            {children}
        </div>
    )
}

export function PageHeader({color, name, projectname, imgName}) {
    return (
        <div className="pageHeader"
             style={{"--color": color} as React.CSSProperties}
        >
            <label
                style={{"--color": color} as React.CSSProperties}
                id="navBtn"
            >☰</label>
            <label id="projectname">{projectname}</label>
            <label>{name}</label>
            <img id="saveImg" src={imgName} alt="Speichern" />
        </div>
    )
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

export function InputHighlight({color}) {
    return (
        <input
            style={{"--color": color} as React.CSSProperties}
            className="inputHighlight"
            min={0}
        ></input>
    )
}

export function InputNormal() {
    return (
        <input
            className="inputNormal"
            min={0}
        ></input>
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