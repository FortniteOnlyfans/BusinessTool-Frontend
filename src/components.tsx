import "./App.css"
import * as React from "react";
import Menu from "./menu/Menu.tsx";
import {PROJ_STATE} from "./menu/PageManager.tsx";
import type {Project, ProjectVersion} from "./menu/PageManager.tsx";
import {InputHTMLAttributes, SelectHTMLAttributes, useEffect, useState} from "react";

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
                <p>{new Date(version ? version.erstellt : "").toDateString()}</p>
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

export function InputNormal({ className, ...props }: InputHTMLAttributes<any>) {
    return (
        <input
            // 3. Spread the props onto the native element
            {...props}
            // Merging classNames cleanly so your default style isn't completely overwritten
            className={`inputNormal ${className || ""}`}
            min={0}
        />
    );
}

interface InputLabelledProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function InputLabelled({ label, className, ...props }: InputLabelledProps) {
    return (
        <div className="input-labelled-container">
            <label>{label}</label>
            <input
                {...props}
                className={`inputNormal ${className || ""}`}
                min={0}
            />
        </div>
    );
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

interface ComboBoxOption {
    value: string | number;
    label: string;
}

export function comboboxOptions(text: string[]): ComboBoxOption[] {
    const arr = new Array<ComboBoxOption>(text.length);
    for (let i = 0; i < text.length; i++){
        const t = text[i];
        arr[i] = {
            value: t,
            label: t
        };
    }
    return arr;
}

interface ComboBoxProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: ComboBoxOption[];
}

export function ComboBox({ label, options, className, ...props }: ComboBoxProps) {
    return (
        <div className="combobox-container" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {label && <label>{label}</label>}

            <select
                {...props}
                className={`selectNormal ${className || ""}`}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', ...props.style }}
            >
                {/* Render the dynamic list of options */}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}