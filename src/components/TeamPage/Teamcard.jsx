import "./TeamCard.css";

function TeamCard({ image, name, role }) {

    return (
        <div className="team-card">

            <div className="team-member-img">
                <img
                    src={image}
                    alt={name}
                />
            </div>

            <div className="team-member-content">

                <h3>{name}</h3>

                <p>{role}</p>

            </div>

        </div>
    );
}

export default TeamCard;