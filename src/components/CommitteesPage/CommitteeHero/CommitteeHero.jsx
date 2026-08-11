import "./CommitteeHero.css";
import Reveal from "../../Common/Animations/Reveal";

const CommitteeHero = () => {
  return (
    <section className="committee-hero">
      <div className="committee-hero-content">
    
     
      <Reveal direction="left">
        
        <h1>
          Choose Your Table.
          <br />
          Shape the Conversation.
        </h1>
         
      </Reveal>
  <Reveal direction="up">
    <p>
          Every committee brings a new challenge, a fresh perspective, and an
          opportunity to lead through diplomacy. Explore the agendas, discover
          your interests, and find where your voice belongs.
        </p>
  </Reveal>
       
       

      </div>
    </section>
  );
};

export default CommitteeHero;