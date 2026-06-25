import "./App.css"
import * as React from "react";
import Menu from "./menu/Menu.tsx";

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
    return (
        <div className="pageHeader" style={{ "--color": color } as React.CSSProperties}>
            <div className="header-left">
                <Menu color={color} setPage={setPage}/>
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

export function GreyBackground({children, direction}) {
    return (
        <div
            style={{"--direction": direction} as React.CSSProperties}
            className="greyBackground"
        >
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

export function SumHighlight({color, children}) {
    return (
        <label
            style={{"--color": color} as React.CSSProperties}
            className="inputHighlight"
        >
            {children}
        </label>
    )
}

export function SumNormal({children}) {
    return (
        <label
            className="inputNormal"
        >
            {children}
        </label>
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