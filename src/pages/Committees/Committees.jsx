import "./Committees.css";

import Navbar from "../../components/Common/Navbar/Navbar";
import Footer from "../../components/Common/Footer/Footer";
import CommitteeHero from "../../components/CommitteesPage/CommitteeHero/CommitteeHero";
import CommitteeSection from "../../components/CommitteesPage/CommitteeSection/CommitteSection"
import CommitteeCTA from "../../components/CommitteesPage/CommitteeCTA/CommitteeCTA";
// Logos
import unscLogo from "../../assets/logos/mun-logo.jpeg";
import unhrcLogo from "../../assets/logos/mun-logo.jpeg";
import whoLogo from "../../assets/logos/mun-logo.jpeg";
import disecLogo from "../../assets/logos/mun-logo.jpeg";
import ecosocLogo from "../../assets/logos/mun-logo.jpeg";

const committees = [
  {
    image: unscLogo,
    logo: unscLogo,
    shortName: "UNSC",
    fullName: "United Nations Security Council",
    tagline: "Where diplomacy meets decisive action.",
    overview:
      "The United Nations Security Council is responsible for maintaining international peace and security through diplomacy, negotiation, and collective decision-making among member states.",
    agenda: "Addressing Maritime Security in the Indo-Pacific Region",
  },

  {
    image: unhrcLogo,
    logo: unhrcLogo,
    shortName: "UNHRC",
    fullName: "United Nations Human Rights Council",
    tagline: "Championing dignity, justice, and equality.",
    overview:
      "The Human Rights Council promotes and protects human rights worldwide by addressing violations, encouraging equality, and strengthening international cooperation.",
    agenda: "Strengthening International Protection of Refugees",
  },

  {
    image: whoLogo,
    logo: whoLogo,
    shortName: "WHO",
    fullName: "World Health Organization",
    tagline: "Building a healthier world together.",
    overview:
      "The World Health Organization focuses on improving global public health by addressing diseases, coordinating international responses, and strengthening healthcare systems.",
    agenda: "Preparing for Future Global Health Emergencies",
  },

  {
    image: disecLogo,
    logo: disecLogo,
    shortName: "DISEC",
    fullName: "Disarmament and International Security Committee",
    tagline: "Securing peace through cooperation.",
    overview:
      "DISEC discusses international security, arms control, and peacekeeping by encouraging diplomatic dialogue and collaborative solutions among nations.",
    agenda: "Regulating Autonomous Weapons Systems",
  },

  {
    image: ecosocLogo,
    logo: ecosocLogo,
    shortName: "ECOSOC",
    fullName: "Economic and Social Council",
    tagline: "Driving sustainable global development.",
    overview:
      "ECOSOC promotes sustainable development, economic growth, and international cooperation to address global social and economic challenges.",
    agenda: "Promoting Inclusive Economic Recovery",
  },
];

function Committees() {
  return (
    <>
      <Navbar />

      <CommitteeHero />

      {committees.map((committee, index) => (
        <CommitteeSection
          key={committee.shortName}
          {...committee}
          reverse={index % 2 !== 0}
        />
      ))}

      <CommitteeCTA />

      <Footer />
    </>
  );
}

export default Committees;