import "./Footer.css";
import Reveal from "../Animations/Reveal";
function Footer() {
    return (
       <Reveal direction="up">
         <footer className="footer">

            <div className="footer-left">

                <h2>GNIMUN II</h2>

                <p>Diplomacy Beyond Borders</p>

                <p>Guru Nanak Institutions Model United Nations</p>

            </div>

            <div className="footer-center">

                <h3>Quick Links</h3>

                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Committees</a>
                <a href="#">Secretariat</a>
                <a href="#">Register</a>

            </div>

            <div className="footer-right">

                <h3>Contact</h3>

                <p>Email: gnimun@email.com</p>

                <p>Hyderabad, Telangana</p>

                <p>© 2026 GNIMUN II</p>

            </div>

        </footer>
       </Reveal>
    );
}

export default Footer;