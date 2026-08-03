import "./CommitteesCard.css";
function CommitteesCard(){
    return(
        <>
        <section className="committees" id="committees">

    <div className="container">

        <div className="section-heading">

            <span>COMMITTEES</span>

            <h2>Committees of GNIMUN II</h2>

            <p>
                Engage in meaningful discussions across various committees,
                each focusing on unique global challenges and international affairs.
            </p>

        </div>

        <div className="committee-grid">

            <div className="committee-card">

                <h3>UNGA</h3>

                <p>
                    United Nations General Assembly discussing international peace,
                    security and global cooperation.
                </p>

                <a href="#">Learn More</a>

            </div>

            <div className="committee-card">

                <h3>UNSC</h3>

                <p>
                    Addressing conflicts, global security and international stability
                    through diplomatic negotiations.
                </p>

                <a href="#">Learn More</a>

            </div>
            <div className="committee-card">
                <h3>WHO</h3>
                <p>
                    Focusing on global healthcare policies, disease prevention and
                    international public health cooperation.
                </p>
                <a href="#">Learn More</a>
            </div>
            <div className="committee-card">
                <h3>UNHRC</h3>
                <p>
                    Promoting human rights, equality and justice across nations
                    through collaborative resolutions.
                </p>
                <a href="#">Learn More</a>
            </div>
             <div className="committee-card">
                <h3>UNHRC</h3>
                <p>
                    Promoting human rights, equality and justice across nations
                    through collaborative resolutions.
                </p>
                <a href="#">Learn More</a>
            </div>
        </div>
    </div>
</section>
        </>
    );
}
export default CommitteesCard;