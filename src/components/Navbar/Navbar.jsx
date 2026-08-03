import "./Navbar.css";
import logo from "../../assets/logos/mun-logo.jpeg";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <header className="navbar">

            <div className="logo">
                <img src={logo} alt="GNIMUN II" />
                <h2>GNIMUN II</h2>
            </div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/committees">Committees</Link>
                <Link to="/highlights">Highlights</Link>
                <Link to="/contact">Cotact</Link>
            </nav>

            <button>Register</button>

        </header>
    );
}

export default Navbar;