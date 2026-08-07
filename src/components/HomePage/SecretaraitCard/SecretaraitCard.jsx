import "./SecretaraitCard.css";
function SecretaraitCard(){
    return (
        <>
        <section className="secretariat">
    <h2>Secretariat</h2>

    <div className="secretariat-grid">
        <div className="member-card">
            <div className="member-img">Photo</div>
            <h3>Name</h3>
            <p>Secretary General</p>
            <p className="message">
"Message or short vision statement goes here..."
</p>
        </div>

        <div className="member-card">
            <div className="member-img">Photo</div>
            <h3>Name</h3>
            <p>Director General</p>
            <p className="message">
"Message or short vision statement goes here..."
</p>
        </div>

        <div className="member-card">
            <div className="member-img">Photo</div>
            <h3>Name</h3>
            <p>USG</p>
            <p className="message">
"Message or short vision statement goes here..."
</p>
        </div>

        <div className="member-card">
            <div className="member-img">Photo</div>
            <h3>Name</h3>
            <p>Faculty Advisor</p>
            <p className="message">
"Message or short vision statement goes here..."
</p>
        </div>
    </div>
</section>
        </>
    );
}
export default SecretaraitCard;