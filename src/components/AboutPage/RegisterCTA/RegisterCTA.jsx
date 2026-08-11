import "./RegisterCTA.css";
import Reveal from "../../Common/Animations/Reveal";
function RegisterCTA() {
    return (
        <section className="register-cta">
           <Reveal direction="up">
             <h2>Ready To Make an Impact?</h2>

            <p>
                Step into the world of diplomacy, represent your nation, and be part of GNIMUN II.
            </p>
           </Reveal>
  <Reveal direction="left">
     <button>Register Now</button>
  </Reveal>
           
        </section>
    );
}

export default RegisterCTA;