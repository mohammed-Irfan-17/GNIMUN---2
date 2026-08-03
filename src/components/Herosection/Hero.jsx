import "./Hero.css";
import logo from  "../../assets/logos/mun-logo.jpeg";
function Hero(){
    return(
  <>
  <section className="hero" id="home">
    <div className="container hero-content">
        <div className="hero-logo">
            <img src={logo} alt="GNIMUN II Logo"/>
        </div>  
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
    </div>
</section>
    </>
    );
}
export default Hero;