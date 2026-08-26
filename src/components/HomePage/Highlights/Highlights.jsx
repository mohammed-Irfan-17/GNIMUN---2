import "./Highlights.css";
// import logo from "../../../assets/pre-event/1.jpeg";
import Reveal from "../../Common/Animations/Reveal";
// import CountUp from "../../Common/Animations/CountUp";
// pre-event photos
import p0 from "../../../assets/pre-event/p0.jpeg";
import p1 from "../../../assets/pre-event/p1.jpeg";
import p2 from "../../../assets/pre-event/p2.jpeg";
import p3 from "../../../assets/pre-event/p3.jpeg";
import p4 from "../../../assets/pre-event/p4.jpeg";
import p5 from "../../../assets/pre-event/p5.jpeg";
import p6 from "../../../assets/pre-event/p6.jpeg";
import p7 from "../../../assets/pre-event/p7.jpeg";
import p8 from "../../../assets/pre-event/p8.jpeg";
import p9 from "../../../assets/pre-event/p9.jpeg";
import p10 from "../../../assets/pre-event/p10.jpeg";
import p11 from "../../../assets/pre-event/p11.jpeg";








function Highlights() {

    return (
        <section className="highlights">

            {/* =========================
                TITLE
            ========================= */}

            <Reveal direction="up">
                <h2>Moments That Defined GNIMUN 2025</h2>
            </Reveal>


            {/* =========================
                IMAGE GALLERY
            ========================= */}

            <div className="gallery">

                <div className="gallery-box">
                    <img src={p0} alt="GNIMUN Event Highlight" />
                </div>

                <div className="gallery-box">
                    <img src={p1} alt="GNIMUN Event Highlight" />
                </div>

                <div className="gallery-box">
                    <img src={p2} alt="GNIMUN Event Highlight" />
                </div>

                <div className="gallery-box">
                    <img src={p3} alt="GNIMUN Event Highlight" />
                </div>

                <div className="gallery-box">
                    <img src={p4} alt="GNIMUN Event Highlight" />
                </div>

                <div className="gallery-box">
                    <img src={p5} alt="GNIMUN Event Highlight" />
                </div>

                <div className="gallery-box">
                    <img src={p6} alt="GNIMUN Event Highlight" />
                </div>

                <div className="gallery-box">
                    <img src={p7} alt="GNIMUN Event Highlight" />
                </div>

                <div className="gallery-box">
                    <img src={p8} alt="GNIMUN Event Highlight" />
                </div>
                  <div className="gallery-box">
                    <img src={p9} alt="GNIMUN Event Highlight" />
                </div>
                 <div className="gallery-box">
                    <img src={p10} alt="GNIMUN Event Highlight" />
                </div>
                 <div className="gallery-box">
                    <img src={p11} alt="GNIMUN Event Highlight" />
                </div>
               

            </div>


            {/* =========================
                STATISTICS
            ========================= */}

            {/* <div className="stats">

                <div className="stat-card">

                    <h3>
                        <CountUp end={500} suffix="+" />
                    </h3>

                    <p>Delegates</p>

                </div>


                <div className="stat-card">

                    <h3>
                        <CountUp end={50} suffix="+" />
                    </h3>

                    <p>Institutions</p>

                </div>


                <div className="stat-card">

                    <h3>
                        <CountUp end={500} suffix="+" />
                    </h3>

                    <p>Committees</p>

                </div>


                <div className="stat-card">

                    <h3>
                        <CountUp end={500} suffix="+" />
                    </h3>

                    <p>Awards</p>

                </div>

            </div> */}

        </section>
    );
}

export default Highlights;