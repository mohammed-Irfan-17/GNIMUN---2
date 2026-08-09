import "./Contact.css";
import Navbar from "../../components/Common/Navbar/Navbar";
import Footer from "../../components/Common/Footer/Footer";

function Contact() {
    const googleMapsUrl =
        "https://www.google.com/maps/search/?api=1&query=17.1606,78.6591";

    return (
        <>
            <Navbar />

            <main className="contact-page">

                {/* ================= HERO ================= */}

                <section className="contact-hero">

                    <h1>Get In Touch</h1>

                    <p>
                        Connect with the GNIMUN II Secretariat
                        for queries, collaborations and event
                        related information.
                    </p>

                </section>


                {/* ================= CONTACT ================= */}

                <section className="contact-section">

                    <div className="contact-container">

                        {/* LEFT — CONTACT INFORMATION */}

                        <div className="contact-info">

                            <h2>Contact Information</h2>

                            <div className="contact-item">

                                <span className="contact-label">
                                    Secretariat
                                </span>

                                <p>
                                    Secretary General
                                    <br />
                                    <span>+91 XXXXX XXXXX</span>
                                </p>

                                <p>
                                    Deputy Secretary General
                                    <br />
                                    <span>+91 XXXXX XXXXX</span>
                                </p>

                            </div>


                            <div className="contact-item">

                                <span className="contact-label">
                                    Email
                                </span>

                                <a href="mailto:official@gnimun.com">
                                    official@gnimun.com
                                </a>

                            </div>


                            <div className="contact-item">

                                <span className="contact-label">
                                    Connect With Us
                                </span>

                                <div className="social-links">

                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram
                                    </a>

                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        LinkedIn
                                    </a>

                                </div>

                            </div>

                        </div>


                        {/* RIGHT — LOCATION */}

                        <div className="contact-location">

                            <div className="location-icon">
                                📍
                            </div>

                            <span className="contact-label">
                                Our Location
                            </span>

                            <h2>
                                Guru Nanak Institutions
                            </h2>

                            <p>
                                Ibrahimpatnam,
                                <br />
                                R. R. District,
                                <br />
                                Telangana - 501506
                            </p>

                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="location-btn"
                            >
                                View on Google Maps
                            </a>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Contact;