import "./CommitteeCTA.css";
import Reveal from "../../Common/Animations/Reveal";

function CommitteeCTA() {
  return (
    <section className="committee-cta">
      <div className="committee-cta-content">

        <Reveal direction="right">
          <h2>Found Your Committee?</h2>
           <p>
          Every committee offers a unique experience, but every journey begins
          with one decision. Register for GNIMUN II and turn your ideas into
          meaningful discussions.
        </p>
        </Reveal>

        
<Reveal direction="up">
  <button>Rgister now</button>
</Reveal>
       

      

      </div>
    </section>
  );
}

export default CommitteeCTA;