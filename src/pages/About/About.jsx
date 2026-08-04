import Navbar from "../../components/Navbar/Navbar";
import footer from "../../components/Footer/Footer";
import Footer from "../../components/Footer/Footer";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import ShapingLeader from "../../components/ShapingLeaders/ShapingLeaders";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import RegisterCTA from "../../components/RegisterCTA/RegisterCTA";
function About(){
    const irfan="ABOUT";
    return(
        <>
        <Navbar/>
        <AboutBanner/>
        <ShapingLeader/>
        <WhyChoose/>
        <RegisterCTA/>
        <Footer/>
        </>
    );
}
export default About;