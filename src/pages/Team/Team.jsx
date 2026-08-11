import "./Team.css";
import TeamCard from "../../components/TeamPage/Teamcard";
import Navbar from "../../components/Common/Navbar/Navbar";
import Footer from "../../components/Common/Footer/Footer";
import image from "../../assets/icons/photo edit.jpeg";
// import image from "../../assets/images/DISECImage.png";
import Reveal from "../../components/Common/Animations/Reveal";

function Team() {

     const teamMembers = [
        {
            name: "Member Name",
            role: "Secretary General",
            image: image
        },
        {
            name: "Member Name",
            role: "Deputy Secretary General",
            image: image
        },
        {
            name: "Member Name",
            role: "Director General",
            image: image
        },
        {
            name: "Member Name",
            role: "Director General",
            image: image
        },
        {
            name: "Member Name",
            role: "Director General",
            image: image
        },
        {
            name: "Member Name",
            role: "Director General",
            image: image
        },
        {
            name: "Member Name",
            role: "Director General",
            image: image
        },
        {
            name: "Member Name",
            role: "Director General",
            image: image
        },
        {
            name: "Member Name",
            role: "Director General",
            image: image
        },
        {
            name: "Member Name",
            role: "Director General",
            image: image
        },
        
    ];

    return (
        <>
        <Navbar/>
        <main className="team-page">

            <section className="team-hero">
                <Reveal direction="up">
    <h1>Our Team</h1>
</Reveal>

              <Reveal direction="up">
                  <p>
                    Meet the people behind GNIMUN II,
                    working together to create an exceptional
                    Model United Nations experience.
                </p>
              </Reveal>
            </section>


            <section className="team-section">

                <div className="team-grid">

                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            image={member.image}
                            name={member.name}
                            role={member.role}
                        />
                    ))}

                </div>

            </section>

        </main>
    
        <Footer/>
        </>
    );
}

export default Team;