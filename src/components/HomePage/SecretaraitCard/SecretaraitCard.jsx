import "./SecretaraitCard.css";
// import photo from "../../../assets/logos/mun-logo.jpeg";
import sec1 from "../../../assets/TeamMembers/sec1.png";
import sec2 from "../../../assets/TeamMembers/sec2.png";
import sec3 from "../../../assets/TeamMembers/sec3.jpeg";
import Reveal from "../../Common/Animations/Reveal";
function SecretaraitCard(){
    return (
        <>
        <section className="secretariat">
    <Reveal direction="left">
        <h2>Secretariats</h2>
    </Reveal>

    {/* <Reveal direction="left"> */}
        <div className="secretariat-grid">
        <div className="member-card">
         <div className="member-img">
    <img src={sec1} alt="Member" />
</div>
              <h3>Abul Hasan Bin Omer</h3>
            <p>Secretary-General</p>
     <p className="message">

Dear Delegates,
<br></br>

Welcome to GNIMUN Season 2.
<br></br>
<br></br>
Borders have always meant more than lines on a map — they define access, identity, and opportunity. This year, under the theme Borders of Tomorrow, we ask you to look beyond the borders we inherit and debate the ones we can still redraw.

This is our most ambitious edition yet — five committees, over two hundred and thirty delegates, and a standard we've worked hard to match. Whether you're new to committee or a seasoned veteran, come ready to argue with conviction, listen with an open mind, and leave having built something that outlasts the two days.
<br></br>
<br></br>
See you on the floor.
<br></br>
Abul Hasan Bin Omer<br></br>
Secretary-General, GNIMUN Season 2
                 </p>
        </div>

        <div className="member-card">
         <div className="member-img">
    <img src={sec2} alt="Member" />
</div>
              <h3>Armaan Singh</h3>
            <p>Secretary-General</p>
            <p className="message">


<br></br>
Dear Delegates,

<br></br>
Welcome to GNI MUN 2026.
<br></br><br></br>
Whether this is your first committee or your tenth, come ready to speak, argue, listen, and enjoy the chaos. Veterans, you know the drill , let the newer delegates cook  too. And if you’re new, take the floor and don’t overthink it.

We’ve put a lot into this. Now bring the energy, challenge the routine, defend what you believe, and don’t be afraid to see things differently. After all, as a certain Sorcerer Supreme has said, the impossibilities are endless.
<br></br><br></br>
See you on the floor.<br></br>
<br></br>
Armaan Singh<br></br>
Secretary General, GNIMUN 2026

                 </p>
        </div>
        <div className="member-card">
             <div className="member-img">
    <img src={sec3} alt="Member" />
</div>
            <h3>Ayaan Ali Khan</h3>
            <p>Director-General</p>
      <p className="message">

<br></br>
Dear Delegates,
<br></br>
Welcome to GNI MUN 2026.
<br></br>
<br></br>
Two days. Five committees. Hundreds of opinions — and probably a few arguments that will last longer than they should.

Come with an open mind, a sharp tongue, and enough preparation to survive when someone decides to challenge everything you just said. Whether you walk in as a first-timer or someone who practically lives in committee, make these two days count.

And if all else fails, remember: with great power comes great responsibility.
<br></br>
<br></br>See you on the floor.
<br></br>
<br></br>
Ayaan Ali Khan
Director General, GNIMUN 2026 — Season 2

                 </p>
        </div>

       
    </div>
    {/* </Reveal> */}
</section>
        </>
    );
}
export default SecretaraitCard;