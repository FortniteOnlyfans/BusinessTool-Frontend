import {useState} from 'react'
import './Umsatz.css'


function NavHead() {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    function menuToggle() {
        if (!isOpen) setIsOpen(true);
        else setIsOpen(false);
    }

    const toggleSubmenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <>
            <div className={"menuBtn"}>
            {/* Button */}
            <button
                className="menu-button"
                onClick={menuToggle}
            >
                ☰ Menü
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <h2>Navigation</h2>

                    <button
                        className="close-button"
                        onClick={() => setIsOpen(false)}
                    >
                        ×
                    </button>
                </div>

                <div className="nav">
                    {/* Startseite */}
                    <button
                        className="nav-item"
                        onClick={() => toggleSubmenu("startseite")}
                    >
                        Startseite
                    </button>

                    {/* Dashboard */}
                    <button
                        className="nav-item"
                        onClick={() => toggleSubmenu("dashboard")}
                    >
                        Dashboard
                    </button>

                    {/* Beispiel für Untermenü */}
                    {openMenu === "dashboard" && (
                        <div className="submenu">
                            <a href="#">Übersicht</a>
                            <a href="#">Statistiken</a>
                            <a href="#">Berichte</a>
                        </div>
                    )}

                    {/* Umsatz */}
                    <button
                        className="nav-item"
                        onClick={() => toggleSubmenu("umsatz")}
                    >
                        Umsatz
                    </button>
                </div>
            </div>
            </div>
            <div className={"heading"}>
                <h1 id={"heading"}>Umsatz</h1>
            </div>
            <div className={"contact"}>
                <button
                >
                    Kontakt
                </button>
            </div>
        </>
    );
}

export default function Umsatz() {


    return (
        <>
            <header>
                <NavHead/>
            </header>
            <div className="content">
                <div className={"money"}>

                </div>
                <div className={"graph"}>

                </div>
            </div>
            <footer>

            </footer>
        </>
    )
}