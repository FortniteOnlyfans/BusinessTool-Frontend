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

export function PageHeader({color, name}) {
    return (
        <div className="pageHeader"
             style={{"--color": color} as React.CSSProperties}
        >
            {name}
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