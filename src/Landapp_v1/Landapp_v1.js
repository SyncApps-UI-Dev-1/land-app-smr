import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import ContactUs from "./ContactUs";
import DigitizeLands from "./DigitizeLands";
import FindYourLand from "./FindYourLand";
import HomeCenterImage from "./HomeCenterImg";
import LandappIntro from "./LandappIntro";
import NavPart from "./Navpart";
import Premium from "./Premium";
import PremiumFeatures from "./PremiumFeatures";
import ReagnionalPartnersCarousel from "./ReagnionalPartnersCarousel";
import WhyChooseLandapp from "./WhyChooseLandapp";

function Landapp_v1() {
  return (
    <div>
      <Navbar>
        <NavPart />
      </Navbar>
      <LandappIntro />
      <FindYourLand />
      <HomeCenterImage />
      <Premium />
      <PremiumFeatures />
      <DigitizeLands />
      <ReagnionalPartnersCarousel />
      <WhyChooseLandapp />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Landapp_v1;
