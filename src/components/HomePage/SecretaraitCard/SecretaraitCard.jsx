import "./SecretaraitCard.css";
import photo from "../../../assets/logos/mun-logo.jpeg";
import Reveal from "../../Common/Animations/Reveal";
function SecretaraitCard(){
    return (
        <>
        <section className="secretariat">
    <Reveal direction="left">
        <h2>Secretariats</h2>
    </Reveal>

    <Reveal direction="left">
        <div className="secretariat-grid">
           <div className="member-card">
         <div className="member-img">
    <img src={photo} alt="Member" />
</div>
              <h3>Abul Hasan Bin Omer</h3>
            <p>Secretary-General</p>
     <p className="message">

Dear Delegates,
<br></br>
Welcome to GNIMUN Season 2.
<br></br>
<br></br>
This year, Borders of Tomorrow invites us to question the borders that shape our world—from migration and conflict to technology and trade—and imagine the ones we can redraw.

GNIMUN has grown from three committees to five—AIPPM, UNGA-DISEC, UNHRC, IPC, and TFI—and now welcomes over 230 delegates. With that growth comes a commitment to make every committee, session, and interaction worthy of you.

Whether you're a first-time delegate or a returning one, come prepared to speak with conviction, listen openly, negotiate boldly, and build something meaningful.

We can't wait to see what you argue, negotiate, and build together on 11th and 12th September.
<br></br>
<br></br>
See you on the floor.

                 </p>
        </div>

            <div className="member-card">
         <div className="member-img">
    <img src={photo} alt="Member" />
</div>
              <h3>Armaan</h3>
            <p>Secretary-General</p>
            <p className="message">

Dear Delegates,
<br></br>
Welcome to GNIMUN Season 2.
<br></br>
<br></br>
This year, Borders of Tomorrow invites us to question the borders that shape our world—from migration and conflict to technology and trade—and imagine the ones we can redraw.

GNIMUN has grown from three committees to five—AIPPM, UNGA-DISEC, UNHRC, IPC, and TFI—and now welcomes over 230 delegates. With that growth comes a commitment to make every committee, session, and interaction worthy of you.

Whether you're a first-time delegate or a returning one, come prepared to speak with conviction, listen openly, negotiate boldly, and build something meaningful.

We can't wait to see what you argue, negotiate, and build together on 11th and 12th September.
<br></br>
<br></br>
See you on the floor.

                 </p>
        </div>
<div className="member-card">
             <div className="member-img">
    <img src={photo} alt="Member" />
</div>
            <h3>Ayaan Ali Khan</h3>
            <p>Director-General</p>
      <p className="message">

Dear Delegates,
<br></br>
Welcome to GNIMUN Season 2.
<br></br>
<br></br>
This year, Borders of Tomorrow invites us to question the borders that shape our world—from migration and conflict to technology and trade—and imagine the ones we can redraw.

GNIMUN has grown from three committees to five—AIPPM, UNGA-DISEC, UNHRC, IPC, and TFI—and now welcomes over 230 delegates. With that growth comes a commitment to make every committee, session, and interaction worthy of you.

Whether you're a first-time delegate or a returning one, come prepared to speak with conviction, listen openly, negotiate boldly, and build something meaningful.

We can't wait to see what you argue, negotiate, and build together on 11th and 12th September.
<br></br>
<br></br>
See you on the floor.

                 </p>
        </div>

       
    </div>
    </Reveal>
</section>
        </>
    );
}
export default SecretaraitCard;