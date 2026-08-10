import { Link } from "react-router-dom";
import "./CommitteesCard.css";

import unhrc from "../../../assets/logos/unhrc-logo.png";
import disec from "../../../assets/logos/DISECLogo.png";
import aippm from "../../../assets/logos/AIPPMLogo.jpg";
import tfi from "../../../assets/logos/TFILogo.png";
import ip from "../../../assets/logos/IPLogo.jpg";

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

            <h2 className="section-title">
                Our Committees
            </h2>

            <p className="committees-tagline">
                Explore the committees where diplomacy, leadership and
                global collaboration come together.
            </p>

            <div className="committee-grid">

                {committees.map((committee,index)=>(
    <div className="committee-card" key={index}>

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
))}

            </div>
<Link to="/committees" className="view-btn">
    View All Committees 
</Link>
        </section>
    );
}

export default CommitteesCard;