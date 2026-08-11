import "./SecretaraitCard.css";
import photo from "../../../assets/logos/mun-logo.jpeg";
import Reveal from "../../Common/Animations/Reveal";
function SecretaraitCard(){
    return (
        <>
        <section className="secretariat">
    <Reveal direction="left">
        <h2>Secretariats</h2>
    </Reveal>

    <Reveal direction="left">
        <div className="secretariat-grid">
           <div className="member-card">
         <div className="member-img">
    <img src={photo} alt="Member" />
</div>
            <h3>Name</h3>
            <p>Director General</p>
            <p className="message">
"Message or short vision statement goes here..."
</p>
        </div>

            <div className="member-card">
         <div className="member-img">
    <img src={photo} alt="Member" />
</div>
            <h3>Name</h3>
            <p>Director General</p>
            <p className="message">
"Message or short vision statement goes here..."
</p>
        </div>
<div className="member-card">
             <div className="member-img">
    <img src={photo} alt="Member" />
</div>
            <h3>Name</h3>
            <p>USG</p>
            <p className="message">
"Message or short vision statement goes here..."
</p>
        </div>

       
    </div>
    </Reveal>
</section>
        </>
    );
}
export default SecretaraitCard;