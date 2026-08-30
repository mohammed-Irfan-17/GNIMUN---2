
import "./Contact.css";
import Navbar from "../../components/Common/Navbar/Navbar";
import Footer from "../../components/Common/Footer/Footer";

import Reveal from "../../components/Common/Animations/Reveal";

function Contact() {
    const googleMapsUrl =
        "https://www.google.com/maps/search/?api=1&query=17.1606,78.6591";
 const InstaUrl="https://www.instagram.com/gnimunhyd2026/";
//  const LinkedinURL="";
    return (
        <>
            <Navbar />

            <main className="contact-page">

                {/* ================= HERO ================= */}

                <section className="contact-hero">

                    <Reveal direction="up">
                        <h1>Get In Touch</h1>

                        <p>
                            Connect with the GNIMUN II Secretariat
                            for queries, collaborations and event
                            related information.
                        </p>
                    </Reveal>

                </section>


                {/* ================= CONTACT ================= */}

                <section className="contact-section">

                    <div className="contact-container">

                        {/* LEFT — CONTACT INFORMATION */}

                        <Reveal
                            direction="left"
                            className="contact-left"
                        >
                            <div className="contact-info">

                                <h2>Contact Information</h2>

                                <div className="contact-item">

                                    <span className="contact-label">
                                        Secretariat
                                    </span>

                                    <p>
                                        Abul Hasan Bin Omer<br></br>
                                        Secretary General
                                        <br />
                                        <span>+91 8074 007 280</span>
                                    </p><br></br>


                                     <p>
                                        Armaan Singh<br></br>
                                        Secretary General
                                        <br />
                                        <span>+91 93927 22788</span>
                                    </p><br></br>

                                    <p>
                                        Ayaan Ali Khan <br></br>
                                        Director  General
                                        <br />
                                        <span>+91 79978 18727</span>
                                    </p>

                                </div>


                                <div className="contact-item">

                                    <span className="contact-label">
                                        Email
                                    </span>

                                    <a href="mailto:gnimunhyd2026@gmail.com">
                                         gnimunhyd2026@gmail.com
                                      </a>

                                </div>


                                <div className="contact-item">

                                    <span className="contact-label">
                                        Connect With Us
                                    </span>

                                    <div className="social-links">

                                        <a
                                            href={InstaUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-btn"
                                        >
                                            Instagram
                                        </a>

                                        {/* <a
                                            href={LinkedinURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-btn"
                                        >
                                            LinkedIn
                                        </a> */}

                                    </div>

                                </div>

                            </div>

                        </Reveal>


                        {/* RIGHT — LOCATION */}

                        <Reveal
                            direction="right"
                            className="contact-right"
                        >

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

                        </Reveal>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Contact;

