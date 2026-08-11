import "./Sponsers.css";
import image from "../../../assets/pre-event/1.jpeg"
import Reveal from "../../Common/Animations/Reveal";
function Sponsers(){
    return (
        <>
        <section className="sponsors">
     <Reveal direction="left">
       <h2>Our Sponsors</h2>
     </Reveal>

    <Reveal direction="up">
      <div className="sponsor-grid">
       <div className="sponsor-card">
  <img src={image} alt="Sponsor Logo" />
</div>
   <div className="sponsor-card">
  <img src={image} alt="Sponsor Logo" />
</div>
      <div className="sponsor-card">
  <img s src={image}  alt="Sponsor Logo" />
</div>
        <div className="sponsor-card">
  <img  src={image}  alt="Sponsor Logo" />
</div>
        <div className="sponsor-card">
  <img  src={image}  alt="Sponsor Logo" />
</div>
 <div className="sponsor-card">
  <img  src={image}  alt="Sponsor Logo" />
</div>
 <div className="sponsor-card">
  <img  src={image}  alt="Sponsor Logo" />
</div>
 <div className="sponsor-card">
  <img  src={image}  alt="Sponsor Logo" />
</div>
 <div className="sponsor-card">
  <img  src={image}  alt="Sponsor Logo" />
</div>
 <div className="sponsor-card">
  <img  src={image}  alt="Sponsor Logo" />
</div>
    </div>
    </Reveal>
</section>
        </>
    );
}
export default Sponsers;