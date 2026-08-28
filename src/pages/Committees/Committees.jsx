import "./Committees.css";

import Navbar from "../../components/Common/Navbar/Navbar";
import Footer from "../../components/Common/Footer/Footer";
import CommitteeHero from "../../components/CommitteesPage/CommitteeHero/CommitteeHero";
import CommitteeSection from "../../components/CommitteesPage/CommitteeSection/CommitteSection"
import CommitteeCTA from "../../components/CommitteesPage/CommitteeCTA/CommitteeCTA";
// Logos
import UNHRCLogo from "../../assets/logos/unhrc-logo.png";
import DISECLogo from "../../assets/logos/DISECLogo.png";
import AIPPMLogo from "../../assets/logos/AIPPMLogo.jpg";
import TFILogo from "../../assets/logos/TFILogo.png";
import IPLogo from "../../assets/logos/IPLogo.jpg";
//images
import UNHRCImage from "../../assets/images/UNHRC.jpeg";
import DISECImage from "../../assets/images/DISECImage.png";
import AIPPMImage from "../../assets/images/AIPPMImage.png";
import TFIImage from "../../assets/images/TFIImage.png";
import IPImage from "../../assets/images/IPimage.jpg";
const committees = [
  {
    image: UNHRCImage,
    logo: UNHRCLogo,
    shortName: "UNHRC",
    fullName: "United Nations Human Rights Council",
    overview:
      "The United Nations Human Rights Council (UNHRC) is an international body dedicated to promoting and protecting human rights across the world. Delegates discuss major human-rights challenges, examine international concerns, and work toward practical and diplomatic solutions.Through debate, negotiation, and resolution drafting, delegates are expected to represent their assigned countries.",
   agenda: "Committee agendas  will be revealed soon.",
  },

  {
    image: DISECImage,
    logo: DISECLogo,
    shortName: "DISEC",
    fullName: "Disarmament and International Security Committee",
    overview:
      "The Disarmament and International Security Committee (DISEC) addresses issues related to international peace, security, disarmament, and the prevention of armed conflict. Delegates examine threats to global stability and negotiate diplomatic solutions . The committee challenges delegates to balance national security interests with the broader goal of maintaining international peace and stability.",
       agenda: "Committee agendas  will be revealed soon.",

  },

  {
    image: AIPPMImage,
    logo: AIPPMLogo,
    shortName: "AIPPM",
    fullName: "All India Political Parties Meet",
    overview:
      "The All India Political Parties Meet (AIPPM) brings together representatives of major Indian political parties to deliberate on important national issues. Unlike traditional international committees, delegates operate within the political and constitutional framework of India . The committee emphasizes political strategy, negotiation, coalition-building, and realistic policymaking while allowing delegates to represent the perspectives and positions of their assigned political parties.",
        agenda: "Committee agendas  will be revealed soon.",
  },

  {
    image: TFIImage,
    logo: TFILogo,
    shortName: "TFI",
    fullName: "Telugu Film Industry",
    overview:
      "The Telugu Film Industry (TFI) is one of India's major regional film industries, known for its diverse storytelling, influential artists, and significant cultural impact. The committee provides delegates with an opportunity to step into the roles of prominent personalities and stakeholders from the world of Telugu cinema . Delegates will navigate discussions, negotiations, creative differences, and industry challenges while representing the perspectives and interests of their assigned roles.",
    agenda: "Committee agendas  will be revealed soon.",
  },

  {
    image: IPImage,
    logo: IPLogo,
    shortName: "IP",
    fullName: "International Press",
    overview:
      "The International Press provides delegates with the opportunity to take on the role of journalists and media representatives covering the proceedings of the conference. Members of the press observe committee sessions, interact with delegates, and report on important developments . Through articles, interviews, and creative reporting, the International Press plays an essential role in documenting the conference and presenting its events from an independent perspective.",
        agenda: "Committee agendas  will be revealed soon.",
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