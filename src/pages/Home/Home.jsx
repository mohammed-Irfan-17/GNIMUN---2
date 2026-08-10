import Navbar from "../../components/Common/Navbar/Navbar";
import Footer from "../../components/Common/Footer/Footer";

import Hero from "../../components/HomePage/Herosection/Hero";
import About from "../../components/AboutPage/Aboutsection/Aboutsection";
import Committees from "../../components/HomePage/CommitteesCard/CommitteesCard";
import Event from "../../components/HomePage/EventInfo/EventInfo";
import Secretarait from "../../components/HomePage/SecretaraitCard/SecretaraitCard";
import Highlights from "../../components/HomePage/Highlights/Highlights";
import Sponsers from "../../components/HomePage/SponsersCard/Sponsers";


import "./Home.css";

function Home() {

    return (
        <>
            <Navbar />
            <Hero/>
            < About/>
            <Committees/>
            <Event/>
            <Secretarait/>
            <Highlights/>
            <Sponsers/>
    <section className="home-register-cta">
    <div className="home-register-content">

        <h2>Ready To Represent Your Nation?</h2>

        <p>
            Join GNIMUN II and experience diplomacy, leadership, and global collaboration
            <br />
            alongside passionate delegates from across the country.
        </p>

        <button className="home-register-button">
            Register Now
        </button>

    </div>
</section>



            <Footer/>
        </>
    );

}

export default Home;