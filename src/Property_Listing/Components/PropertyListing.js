import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar";
import { AllLandsDetails } from "../../data/data";
import Agents from "./Agents";
import Filter from "./Filter";
import LandDetails from "./LandDetails";
import PathInfo from "./PathInfo";
import SearchBar from "./SearchBar";

function PropertyListing() {
  return (
    <div>
      <Navbar />
      <PathInfo />
      <Filter />
      <SearchBar />
      <Agents />
      <LandDetails
        title="3895 Lands - Shamshabad Region"
        landsData={AllLandsDetails}
        link="/PropertyDescription"
      />
      <Footer />
    </div>
  );
}

export default PropertyListing;
