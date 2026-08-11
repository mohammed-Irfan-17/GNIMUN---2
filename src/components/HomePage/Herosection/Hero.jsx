import "./Hero.css";
import logo from  "../../../assets/logos/mun-logo.jpeg";
import Reveal from "../../Common/Animations/Reveal";
function Hero(){
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
            <a href="#" className="btn btn-primary">
                Register Now
            </a>
            <a href="#" className="btn btn-outline">
                Learn More
            </a>
        </div>
       </Reveal>
       
    </div>
</section>
    </>
    );
}
export default Hero;