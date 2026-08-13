import { Link } from "react-router-dom";
import "./CommitteesCard.css";
import Reveal from "../../Common/Animations/Reveal";

import unhrc from "../../../assets/logos/UNHRC-4.png";
import disec from "../../../assets/logos/1.png";
import aippm from "../../../assets/logos/AIPPMLogo-3.png";
import tfi from "../../../assets/logos/TFI-1.png";
import ip from "../../../assets/logos/1-2.png";

const committees = [        
    {
        image: unhrc,
        short: "UNHRC",
        name: "United Nations Human Rights Council"
    },
    {
        image: disec,
        short: "DISEC",
        name: "Disarmament and International Security Committee"
    },
    {
        image: aippm,
        short: "AIPPM",
        name: "All India Political Parties Meet"
    },
    {
        image: tfi,
        short: "TFI",
        name: "Telugu Film Industry"
    },
    {
        image: ip,
        short: "IP",
        name: "International Press"
    }
];

function CommitteesCard() {
    return (
        <section className="committees section">

            <Reveal direction="left">
                <h2 className="section-title">
                Our Committees
            </h2>

            <p className="committees-tagline">
                Explore the committees where diplomacy, leadership and
                global collaboration come together.
            </p>

            </Reveal>
            <div className="committee-grid">

                {committees.map((committee, index) => (
    <Reveal direction="up" key={committee.short}  className="committee-card-reveal">

        <div className="committee-card">

            <div className="committee-logo">
                <img
                    src={committee.image}
                    alt={committee.short}
                />
            </div>

            <div className="committee-content">
                <h3>{committee.short}</h3>
                <p>{committee.name}</p>
            </div>

        </div>

    </Reveal>
))}

            </div>
<Reveal direction="left">
    <Link to="/committees" className="view-btn">
    View All Committees 
</Link>
</Reveal>
        </section>
    );
}

export default CommitteesCard;