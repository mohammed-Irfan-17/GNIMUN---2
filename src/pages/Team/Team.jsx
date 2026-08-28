import "./Team.css";
import TeamCard from "../../components/TeamPage/Teamcard";
import Navbar from "../../components/Common/Navbar/Navbar";
import Footer from "../../components/Common/Footer/Footer";
import sec1 from "../../assets/TeamMembers/hasan bhai.jpeg";
import sec2 from "../../assets/TeamMembers/Armaan bhai.jpeg";
import sec3 from "../../assets/TeamMembers/sec3.jpeg";
import irfan from "../../assets/TeamMembers/irfan.png";
import harish from "../../assets/TeamMembers/harish.png";
import Reveal from "../../components/Common/Animations/Reveal";

function Team() {

     const teamMembers = [
        {
            name: "Abul Hasan Bin Omer",
            role: "Secretary General",
            image: sec1
        },
        {
            name: "Armaan Singh",
            role: "Secretary General",
            image: sec2
        },
        {
            name: "Ayaan Ali Khan",
            role: "Director General",
            image: sec3
        },
        {
           name: "Harish Kandi",
            role: "Tech Team Lead",
            image: harish
        },
        {
            name: "Mohammed Irfan",
            role: "Frontend Developer",
            image: irfan
        },
       
       
        
    ];

    return (
        <>
        <Navbar/>
        <main className="team-page">

            <section className="team-hero">
                <Reveal direction="up">
    <h1>The People Behind the Vision</h1>
</Reveal>

              <Reveal direction="up">
                  <p>
                    Meet the team turning ideas, ambition, and diplomacy into an unforgettable experience.
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