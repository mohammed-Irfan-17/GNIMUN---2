import "./EventInfo.css";
import Reveal from "../../Common/Animations/Reveal";
import { useEffect, useState } from "react";

function EventInfo() {

    // Event starts on 11 September 2026 at 9:00 AM
    const eventDate = new Date("2026-09-11T09:00:00");

    const calculateTimeLeft = () => {
        const difference = eventDate - new Date();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        return {
            days: Math.floor(
                difference / (1000 * 60 * 60 * 24)
            ),

            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),

            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),

            seconds: Math.floor(
                (difference / 1000) % 60
            )
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);

    }, []);

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
                            <p>11 - 12 September 2026</p>
                        </div>
                    </Reveal>


                    <Reveal direction="left">
                        <div className="event-card">
                            <h3>🕒 Time</h3>
                            <p>9:00 AM - 5:00 PM</p>
                        </div>
                    </Reveal>


                    <Reveal direction="left">
                        <div className="event-card">
                            <h3>📍 Venue</h3>
                            <p>Guru Nanak Institutions, Hyd</p>
                        </div>
                    </Reveal>

                </div>


                {/* COUNTDOWN */}

                <Reveal direction="left">
    <div className="countdown">

        <div className="countdown-ornament">
            <span></span>
            <i>✦</i>
            <span></span>
        </div>

        <p className="countdown-eyebrow">
            GNIMUN II
        </p>

        <h3 className="countdown-title">
            Join Us In
        </h3>

        <div className="countdown-grid">

            <div className="countdown-item">
                <span className="countdown-number">
                    {String(timeLeft.days).padStart(2, "0")}
                </span>
                <small>DAYS</small>
            </div>

            <div className="countdown-divider"></div>

            <div className="countdown-item">
                <span className="countdown-number">
                    {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <small>HOURS</small>
            </div>

            <div className="countdown-divider"></div>

            <div className="countdown-item">
                <span className="countdown-number">
                    {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <small>MINUTES</small>
            </div>

            <div className="countdown-divider"></div>

            <div className="countdown-item">
                <span className="countdown-number">
                    {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <small>SECONDS</small>
            </div>

        </div>

        <div className="countdown-bottom-ornament">
            <span></span>
            <i>✦</i>
            <span></span>
        </div>

    </div>
</Reveal>

            </section>
        </>
    );
}

export default EventInfo;