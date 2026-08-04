import { Link } from "react-router-dom";
import "./CommitteesCard.css";

import unhrc from "../../assets/logos/mun-logo.jpeg";
import unsc from "../../assets/logos/mun-logo.jpeg";
import disec from "../../assets/logos/mun-logo.jpeg";
import who from "../../assets/logos/mun-logo.jpeg";
import loksabha from "../../assets/logos/mun-logo.jpeg";

const committees = [        
    {
        image: unhrc,
        short: "UNHRC",
        name: "United Nations Human Rights Council"
    },
    {
        image: unsc,
        short: "UNSC",
        name: "United Nations Security Council"
    },
    {
        image: disec,
        short: "DISEC",
        name: "Disarmament & International Security"
    },
    {
        image: who,
        short: "WHO",
        name: "World Health Organization"
    },
    {
        image: loksabha,
        short: "LOK SABHA",
        name: "Indian Parliament"
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