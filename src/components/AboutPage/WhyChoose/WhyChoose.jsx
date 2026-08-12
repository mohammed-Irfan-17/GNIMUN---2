import "./WhyChoose.css";
import Reveal from "../../Common/Animations/Reveal";
function WhyChoose() {
    return (
        <section className="why">
            <Reveal>
                <h2>Why GNIMUN?</h2>
            <p>
                Discover the skills and experiences that make GNIMUN II
                an enriching platform for every delegate.
            </p>
            </Reveal>

            <div className="why-grid">

                <Reveal direction="left"  className="why-card-reveal">
                    <div className="why-card">
                    <h3>🎤 Public Speaking</h3>
                    <p>Express ideas confidently through committee debates.</p>
                </div>
                </Reveal>

                <Reveal direction="up"  className="why-card-reveal">
                    <div className="why-card">
                    <h3>🌍 Diplomacy</h3>
                    <p>Learn negotiation and collaborative problem-solving.</p>
                </div>
                </Reveal>

                <Reveal direction="right"  className="why-card-reveal">
                    <div className="why-card">
                    <h3>🤝 Networking</h3>
                    <p>Connect with students from diverse institutions.</p>
                </div>
                </Reveal>

                <Reveal direction="left" className="why-card-reveal">
                    <div className="why-card">
                    <h3>📚 Research</h3>
                    <p>Strengthen analytical and policy research skills.</p>
                </div>
                </Reveal>

               <Reveal direction="up"  className="why-card-reveal">
                 <div className="why-card">
                    <h3>👑 Leadership</h3>
                    <p>Develop confidence and decision-making abilities.</p>
                </div>
               </Reveal>

               <Reveal direction='right'  className="why-card-reveal">
                 <div className="why-card">
                    <h3>💡 Critical Thinking</h3>
                    <p>Analyze global challenges from multiple perspectives.</p>
                </div>
               </Reveal>

            </div>
        </section>
    );
}

export default WhyChoose;