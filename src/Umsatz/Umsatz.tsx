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
                ☰
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

function Overview() {
    return (
        <>
            <div className="page">
                {/* Oberer Bereich */}
                <div className="overview">
                    {/* Header */}
                    <div className="table header">
                        <div className="name-column">Name</div>

                        <div className="year-column">
                            Jahr 1
                        </div>

                        <div className="year-column">
                            Jahr 2
                        </div>

                        <div className="year-column">
                            Jahr 3
                        </div>

                        <div className="year-column">
                            Jahr 4
                        </div>
                    </div>

                    {/* Zeile 1 */}
                    <div className="table row">
                        <div className="name-column service">
                            <span className="dot"></span>
                            Dienstleistung 1
                        </div>

                        <div className="value-box">50.885€</div>
                        <div className="value-box">119.077€</div>
                        <div className="value-box">119.077€</div>
                        <div className="value-box">119.077€</div>
                    </div>

                    {/* Zeile 2 */}
                    <div className="table row">
                        <div className="name-column service">
                            <span className="dot"></span>
                            Dienstleistung 2
                        </div>

                        <div className="value-box">26.708€</div>
                        <div className="value-box">69.462€</div>
                        <div className="value-box">69.462€</div>
                        <div className="value-box">69.462€</div>
                    </div>

                    {/* Buttons */}
                    <div className="button-row">
                        <button className="addBtn">+</button>
                        <button className="addBtn">−</button>
                    </div>
                </div>

                {/* Unterer Bereich */}
                <div className="overview">
                    <div className="summary-row">
                        <div className="summary-label">Summe</div>

                        <div className="value-box">77.593€</div>
                        <div className="value-box">188.539€</div>
                        <div className="value-box">188.539€</div>
                        <div className="value-box">188.539€</div>
                    </div>

                    <div className="summary-row">
                        <div className="summary-label">Kosten</div>

                        <div className="value-box">53.678€</div>
                        <div className="value-box">188.539€</div>
                        <div className="value-box">188.539€</div>
                        <div className="value-box">188.539€</div>
                    </div>

                    <div className="summary-row">
                        <div className="summary-label">Rohgewinn</div>

                        <div className="value-box">23.915€</div>
                        <div className="value-box">188.539€</div>
                        <div className="value-box">188.539€</div>
                        <div className="value-box">188.539€</div>
                    </div>

                    <div className="summary-row">
                        <div className="summary-label">Rohgewinn in %</div>

                        <div className="value-box">30,82%</div>
                        <div className="value-box">188.539€</div>
                        <div className="value-box">188.539€</div>
                        <div className="value-box">188.539€</div>
                    </div>
                </div>
            </div>

            <div className="spacer"></div>

            {/* Darstellung als Graph */}
            <div className="page">
                <div className="overview"></div>
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

                    <Overview/>

                <div className={"graph"}>

                </div>
            </div>
            <footer>

            </footer>
        </>
    )
}