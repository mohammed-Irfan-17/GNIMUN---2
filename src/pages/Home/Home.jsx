import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Herosection/Hero";
import About from "../../components/Aboutsection/Aboutsection";
import Committees from "../../components/CommitteesCard/CommitteesCard";
import Event from "../../components/EventInfo/EventInfo";
import Secretarait from "../../components/SecretaraitCard/SecretaraitCard";
import Highlights from "../../components/Highlights/Highlights";
import Sponsers from "../../components/SponsersCard/Sponsers";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
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
            <ContactInfo/>
            <Footer/>
        </>
    );

}

export default Home;