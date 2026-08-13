import Reveal from "../../Common/Animations/Reveal";
import "./ShapingLeaders.css";
// import Reveal from "../../Common/Animations/Reveal";

function ShapingLeaders() {
    return (
        <section className="leaders">
            <Reveal direction="left">
                <div className="leaders-left">
                <h2>Shaping The Leaders Of Tomorrow</h2>
                <p>
                   GNIMUN II is a premier Model United Nations conference organized by Guru Nanak Institutions, bringing together young minds to engage with global issues through meaningful debate and diplomacy. It provides delegates with an opportunity to develop leadership, strengthen communication, think critically, and experience the art of negotiation through engaging committee sessions.
                   <br></br>
                   <br></br>
                   More than a conference, GNIMUN II is a platform to learn, collaborate, and grow into confident leaders prepared to shape the world of tomorrow.
                </p>
               
            </div>
            </Reveal>

            <div className="leaders-right">
                <Reveal direction="right">
                    <div className="info-card">
                    <h3>Diplomacy</h3>
                    <p>Develop negotiation and conflict resolution skills through meaningful debates.</p>
                </div>
                </Reveal>

                <Reveal direction="right">
                    <div className="info-card">
                    <h3>Leadership</h3>
                    <p>Build confidence, teamwork, and decision-making abilities in every committee.</p>
                </div>
                </Reveal>

                <Reveal direction="right">
                    <div className="info-card">
                    <h3>Global Perspective</h3>
                    <p>Explore international issues while understanding diverse cultures and viewpoints.</p>
                </div>
                </Reveal>
            </div>
        </section>
    );
}

export default ShapingLeaders;