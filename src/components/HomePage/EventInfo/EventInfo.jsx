import "./EventInfo.css";
import Reveal from "../../Common/Animations/Reveal";
function EventInfo(){
    return (
        <>
        <section className="event">
      <Reveal direction="left">
           <h2>Event Information</h2>
      </Reveal>

    <div className="event-grid">
        <Reveal direction="left">
            <div className="event-card">
            <h3>📅 Date</h3>
            <p>12 - 13 September 2026</p>
        </div>
        </Reveal>

      <Reveal direction="up">
          <div className="event-card">
            <h3>🕒 Time</h3>
            <p>9:00 AM - 5:00 PM</p>
        </div>
      </Reveal>

      <Reveal direction="right">
          <div className="event-card">
            <h3>📍 Venue</h3>
            <p>Guru Nanak Institutions, Hyderabad</p>
        </div>
      </Reveal>
    </div>
</section>
        </>
    );
}
export default EventInfo;