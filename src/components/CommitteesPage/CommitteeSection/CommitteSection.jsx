import "./CommitteeSection.css";

function CommitteeSection({
  image,
  logo,
  shortName,
  fullName,
  tagline,
  overview,
  agenda,
  reverse,
}) {
  return (
    <section className="committee-card-section">
      <div className={`committee-card ${reverse ? "reverse" : ""}`}>

        <div className="committee-image">
          <img src={image} alt={shortName} />
        </div>

        <div className="committee-content">

          <div className="committee-title">

            <img
              src={logo}
              alt={`${shortName} Logo`}
              className="committee-logo"
            />

            <div>
              <h2>{shortName}</h2>
              <h3>{fullName}</h3>
            </div>

          </div>

          <p className="committee-tagline">
            {tagline}
          </p>

          <div className="committee-divider"></div>

          <p className="committee-overview">
            {overview}
          </p>

          <div className="committee-divider"></div>

          <h4>Agenda</h4>

          <p className="committee-agenda">
            {agenda}
          </p>

        </div>

      </div>
    </section>
  );
}

export default CommitteeSection;