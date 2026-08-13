import "./Footer.css";
import Reveal from "../Animations/Reveal";
import { Link } from "react-router-dom";
function Footer() {
    return (
       <Reveal direction="up">
         <footer className="footer">
               <div className="footer-right">

                <h3>Contact</h3>

                <p>Email: gnimun@email.com</p>

                <p>Hyderabad, Telangana</p>

                <p>© 2026 GNIMUN II</p>

            </div>

           

            <div className="footer-center">

                <h3>Quick Links</h3>

             <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                 <Link to="/committees">Committees</Link>
                  <Link to="/team">Team</Link>
                   <Link to="/contact">Contact</Link>
                   

            </div>

            <div className="footer-left">

                <h2>GNIMUN II</h2>

                <p>Diplomacy Beyond Borders</p>

                <p>Guru Nanak Institutions Model United Nations</p>

            </div>

        </footer>
       </Reveal>
    );
}

export default Footer;