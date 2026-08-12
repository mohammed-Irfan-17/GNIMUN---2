import "./Navbar.css";

import logo from "../../../assets/logos/mun-logo.jpeg";

import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <header className="navbar">

            <div className="logo">
                <img src={logo} alt="GNIMUN II" />
                <h2>GNIMUN II</h2>
            </div>


            <div className={`navbar-menu ${menuOpen ? "mobile-open" : ""}`}>

                <nav>

                    <Link to="/" onClick={closeMenu}>Home</Link>

                    <Link to="/about" onClick={closeMenu}>About</Link>

                    <Link to="/committees" onClick={closeMenu}>Committees</Link>

                    <Link to="/team" onClick={closeMenu}>Team</Link>

                    <Link to="/contact" onClick={closeMenu}>Contact</Link>

                    <Link to="/highlights" onClick={closeMenu}>Highlights</Link>

                </nav>

                <button>Register</button>

            </div>


            <button
                className="mobile-menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

        </header>
    );
}

export default Navbar;