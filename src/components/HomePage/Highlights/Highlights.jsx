import "./Highlights.css";
import logo from "../../../assets/pre-event/1.jpeg";
function Highlights(){
    return (
        <>
        <section className="highlights">
    <h2>Previous Event Highlights</h2>

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
            <h3>500+</h3>
            <p>Delegates</p>
        </div>

        <div className="stat-card">
            <h3>20+</h3>
            <p>Institutions</p>
        </div>

        <div className="stat-card">
            <h3>6</h3>
            <p>Committees</p>
        </div>

        <div className="stat-card">
            <h3>100+</h3>
            <p>Awards</p>
        </div>
    </div>
</section>
        </>
    );
}
export default Highlights;