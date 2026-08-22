import "./Navbar.css";

import logo from "../../../assets/logos/mun-logo.jpeg";

import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const RegisterLink="https://docs.google.com/forms/d/e/1FAIpQLSezSvRv0gPKz5TVbJfwu_RQgsT_8BX3v1q6ZtKjzfbXRKjdig/viewform?usp=headerhttps://docs.google.com/forms/d/e/1FAIpQLSezSvRv0gPKz5TVbJfwu_RQgsT_8BX3v1q6ZtKjzfbXRKjdig/viewform?usp=header";

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

                <a href={RegisterLink} className="register-btn"> Register</a>

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