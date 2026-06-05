import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">&lt;LOGO&gt;</div>

            <nav>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/">HOME</NavLink>
                    </li>

                    <span className="divider blue"></span>

                    <li>
                        <NavLink to="/ueber-uns">ÜBER UNS</NavLink>
                    </li>

                    <span className="divider red"></span>

                    <li>
                        <NavLink to="/leistungen">LEISTUNGEN</NavLink>
                    </li>

                    <span className="divider purple"></span>

                    <li>
                        <NavLink to="/projekte">PROJEKTE</NavLink>
                    </li>

                    <span className="divider gold"></span>

                    <li>
                        <NavLink to="/kontakt">KONTAKT</NavLink>
                    </li>
                </ul>
            </nav>

            <button className="contact-btn">
                Contact us
            </button>
        </header>
    );
}

export default Navbar;