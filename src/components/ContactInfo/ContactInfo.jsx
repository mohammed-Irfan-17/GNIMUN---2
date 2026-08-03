import "./ContactInfo.css";
function ContactInfo(){
    return (
        <>
        <section className="contact">
    <h2>Contact & Location</h2>

    <div className="contact-container">
        <div className="contact-info">
            <h3>Venue</h3>
            <p>Guru Nanak Institutions</p>
            <p>Hyderabad, Telangana</p>

            <h3>Email</h3>
            <p>gnimun@email.com</p>

            <h3>Phone</h3>
            <p>+91 XXXXX XXXXX</p>
        </div>

        <div className="map">
            Google Map
        </div>
    </div>
</section>
        </>
    );
}
export default ContactInfo;