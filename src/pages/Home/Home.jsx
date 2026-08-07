import Navbar from "../../components/Common/Navbar/Navbar";
import Footer from "../../components/Common/Footer/Footer";

import Hero from "../../components/HomePage/Herosection/Hero";
import About from "../../components/AboutPage/Aboutsection/Aboutsection";
import Committees from "../../components/HomePage/CommitteesCard/CommitteesCard";
import Event from "../../components/HomePage/EventInfo/EventInfo";
import Secretarait from "../../components/HomePage/SecretaraitCard/SecretaraitCard";
import Highlights from "../../components/HomePage/Highlights/Highlights";
import Sponsers from "../../components/HomePage/SponsersCard/Sponsers";
import ContactInfo from "../../components/HomePage/ContactInfo/ContactInfo";

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