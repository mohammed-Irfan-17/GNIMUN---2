import Navbar from "../../components/Common/Navbar/Navbar";
import Footer from "../../components/Common/Footer/Footer";
import AboutBanner from "../../components/AboutPage/AboutBanner/AboutBanner";
import ShapingLeader from "../../components/AboutPage/ShapingLeaders/ShapingLeaders";
import WhyChoose from "../../components/AboutPage/WhyChoose/WhyChoose";
import RegisterCTA from "../../components/AboutPage/RegisterCTA/RegisterCTA";
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