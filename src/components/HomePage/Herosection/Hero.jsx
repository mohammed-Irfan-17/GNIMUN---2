import "./Hero.css";
import logo from  "../../../assets/logos/mun-logo.jpeg";
import Reveal from "../../Common/Animations/Reveal";
import { Link } from "react-router-dom";
function Hero(){
    const RegisterLink="https://docs.google.com/forms/d/e/1FAIpQLSezSvRv0gPKz5TVbJfwu_RQgsT_8BX3v1q6ZtKjzfbXRKjdig/viewform?usp=header";
    return(
  <>
  <section className="hero" id="home">
    <div className="container hero-content">
       <Reveal direction="up">
         <div className="hero-logo">
            <img src={logo} alt="GNIMUN II Logo"/>
        </div>  
       </Reveal>
       
       <Reveal direction="up">
        <h1>GNIMUN II</h1>
        
         <h2>Season 2</h2>
        <p>
            Diplomacy • Dialogue • Leadership
        </p>
         <div className="hero-buttons">
            <a href={RegisterLink} className="btn btn-primary">
                Register Now
            </a>
             <Link to="/committees" className="nav-button">
    View Committees
</Link>

        </div>
       </Reveal>
       
    </div>
</section>
    </>
    );
}
export default Hero;