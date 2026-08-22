import "./RegisterCTA.css";
import Reveal from "../../Common/Animations/Reveal";
function RegisterCTA() {
    const RegisterLink="https://docs.google.com/forms/d/e/1FAIpQLSezSvRv0gPKz5TVbJfwu_RQgsT_8BX3v1q6ZtKjzfbXRKjdig/viewform?usp=header";
    return (
        <section className="register-cta">
           <Reveal direction="up">
             <h2>Ready To Make an Impact?</h2>

            <p>
                Step into the world of diplomacy, represent your nation, and be part of GNIMUN II.
            </p>
           </Reveal>
  <Reveal direction="left">
     <a href={RegisterLink} >Register Now</a>
  </Reveal>
           
        </section>
    );
}

export default RegisterCTA;