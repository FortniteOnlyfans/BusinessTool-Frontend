import {type CSSProperties, useState} from "react";
import "./Menu.css";
import {menuData} from "./menuData.tsx";

export default function Menu({color, setPage}) {
    const [open, setOpen] = useState(false);

    return <>
        <>
            {!open && <MenuButton onClick={() => setOpen(true)} color={color}/>}
            {open && <MenuItems color={color} setOpen={setOpen} setPage={setPage} />}
        </>
    </>;
}

function MenuButton({onClick, color}) {
    return <>
        <div className="menu-btn" onClick={onClick}>
            <svg width="50" height="38" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 34.2C0 32.1013 2.23858 30.4 5 30.4H45C47.7614 30.4 50 32.1013 50 34.2C50 36.2987 47.7614 38 45 38H5C2.23858 38 0 36.2987 0 34.2Z" fill={color}/>
                <path d="M0 19C0 16.9013 2.23858 15.2 5 15.2H45C47.7614 15.2 50 16.9013 50 19C50 21.0987 47.7614 22.8 45 22.8H5C2.23858 22.8 0 21.0987 0 19Z" fill={color}/>
                <path d="M0 3.8C0 1.70132 2.23858 0 5 0H45C47.7614 0 50 1.70132 50 3.8C50 5.89868 47.7614 7.6 45 7.6H5C2.23858 7.6 0 5.89868 0 3.8Z" fill={color}/>
            </svg>

        </div>
    </>;
}

function MenuItems({color, setOpen, setPage}) {
    const [menuLevel, setMenuLevel] = useState("$");

    const items = menuData[menuLevel];

    function handleClick(item) {
        if (menuData[item[0]]) {
            setMenuLevel(item[0]);
        } else {
            const id = item[0];
            setPage(id);
            setOpen(false);
        }
    }

    return (
        <div className="menu-items" style={{ "--color": color } as CSSProperties}>
            <div className="menu-item">
                <MenuX onClick={() => setOpen(false)} />
            </div>

            {items.map((item) => (
                <div
                    key={item[0]}
                    className="menu-item"
                    onClick={() => handleClick(item)}
                >
                    {item[1]}
                </div>
            ))}
        </div>
    );
}

function MenuX({onClick}) {
    return <>
        <img src="src/images/menuX.svg" alt="Close Menu" onClick={onClick}/>
    </>;
}