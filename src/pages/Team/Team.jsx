import "./Team.css";
import TeamCard from "../../components/TeamPage/Teamcard";
import Navbar from "../../components/Common/Navbar/Navbar";
import Footer from "../../components/Common/Footer/Footer";
import image from "../../assets/logos/mun-logo.jpeg";

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
        }
    ];

    return (
        <>
        <Navbar/>
        <main className="team-page">

            <section className="team-hero">
                <h1>Our Team</h1>

                <p>
                    Meet the people behind GNIMUN II,
                    working together to create an exceptional
                    Model United Nations experience.
                </p>
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