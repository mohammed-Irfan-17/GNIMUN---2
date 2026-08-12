import "./CommitteeSection.css";
import Reveal from "../../Common/Animations/Reveal";

function CommitteeSection({
  image,
  logo,
  shortName,
  fullName,
  overview,
  agenda,
  reverse,
}) {
  return (
    <section className="committee-detail-card-section">
      <Reveal direction="left">
        <div className={`committee-detail-card ${reverse ? "reverse" : ""}`}>

        <div className="committee-detail-image">
          <img src={image} alt={shortName} />
        </div>

        <div className="committee-detail-content">

          <div className="committee-detail-title">

            <img
              src={logo}
              alt={`${shortName} Logo`}
              className="committee-detail-logo"
            />

            <div>
              <h2>{shortName}</h2>
              <h3>{fullName}</h3>
            </div>

          </div>

         

          <div className="committee-detail-divider"></div>

          <p className="committee-detail-overview">
            {overview}
          </p>

          <div className="committee-detail-divider"></div>

          <h4>Agenda</h4>

          <p className="committee-detail-agenda">
            {agenda}
          </p>

        </div>

      </div>
      </Reveal>
    </section>
  );
}

export default CommitteeSection;