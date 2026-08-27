import "./CommitteeCTA.css";
import Reveal from "../../Common/Animations/Reveal";

function CommitteeCTA() {
  const RegisterLink="https://docs.google.com/forms/d/e/1FAIpQLSezSvRv0gPKz5TVbJfwu_RQgsT_8BX3v1q6ZtKjzfbXRKjdig/viewform?usp=header";
  return (
    <section className="committee-cta">
      <div className="committee-cta-content">

        <Reveal direction="up">
          <h2>Found Your Committee?</h2>
           <p>
          Every committee offers a unique experience, but every journey begins
          with one decision. Register for GNIMUN II and turn your ideas into
          meaningful discussions.
        </p>
        </Reveal>

        
<Reveal direction="left">
  <a href={RegisterLink} className="register-btn">Register now</a>
</Reveal>
       

      

      </div>
    </section>
  );
}

export default CommitteeCTA;