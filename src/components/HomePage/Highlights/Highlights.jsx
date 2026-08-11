import "./Highlights.css";
import logo from "../../../assets/pre-event/1.jpeg";
import Reveal from "../../Common/Animations/Reveal";
import CountUp from "../../Common/Animations/CountUp";
function Highlights(){
    return (
        <>
        <section className="highlights">
    <Reveal direction="up">
        <h2>Previous Event Highlights</h2>
    </Reveal>
 <div className="gallery">
        <div className="gallery-box">
    <img src={logo} alt="GNIMUN Logo" />
</div>
   <div className="gallery-box">
    <img src={logo} alt="GNIMUN Logo" />
</div>
<div className="gallery-box">
    <img src={logo} alt="GNIMUN Logo" />
</div>
<div className="gallery-box">
    <img src={logo} alt="GNIMUN Logo" />
</div>
<div className="gallery-box">
    <img src={logo} alt="GNIMUN Logo" />
</div>
<div className="gallery-box">
    <img src={logo} alt="GNIMUN Logo" />
</div>
    </div>
   

    <div className="stats">
        <div className="stat-card">
           <h3>
            <CountUp end={500} suffix="+" />
        </h3>
            <p>Delegates</p>
        </div>

        <div className="stat-card">
            <h3>
            <CountUp end={50} suffix="+" />
        </h3>
            <p>Institutions</p>
        </div>

        <div className="stat-card">
          <h3>
            <CountUp end={500} suffix="+" />
        </h3>
            <p>Committees</p>
        </div>

        <div className="stat-card">
            <h3>
            <CountUp end={500} suffix="+" />
        </h3>
            <p>Awards</p>
        </div>
    </div>
</section>
        </>
    );
}
export default Highlights;