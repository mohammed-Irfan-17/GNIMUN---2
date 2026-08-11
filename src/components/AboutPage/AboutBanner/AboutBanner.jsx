import "./AboutBanner.css";
import Reveal from "../../Common/Animations/Reveal";
function AboutBanner() {
    return (
       <Reveal direction="up">
         <section className="about-banner">
            <h1>ABOUT GNIMUN II</h1>
            <h3>Diplomacy Beyond Borders</h3>
            <p>
                Inspiring the next generation of leaders through diplomacy,
                collaboration, and global dialogue.
            </p>
        </section>
       </Reveal>
    );
}

export default AboutBanner;