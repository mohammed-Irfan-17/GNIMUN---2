import "./EventInfo.css";
function EventInfo(){
    return (
        <>
        <section className="event">
    <h2>Event Information</h2>

    <div className="event-grid">
        <div className="event-card">
            <h3>📅 Date</h3>
            <p>12 - 13 September 2026</p>
        </div>

        <div className="event-card">
            <h3>🕒 Time</h3>
            <p>9:00 AM - 5:00 PM</p>
        </div>

        <div className="event-card">
            <h3>📍 Venue</h3>
            <p>Guru Nanak Institutions, Hyderabad</p>
        </div>
    </div>
</section>
        </>
    );
}
export default EventInfo;