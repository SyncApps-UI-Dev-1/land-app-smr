import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar";
// import Navbar from "../../Components/Navbar";
import Agents from "./Agents";
import Filter from "./Filter";
// import Footer from "./Footer";
import LandsDetails from "./LandsDetails";
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
      <LandsDetails />
      <Footer />
    </div>
  );
}

export default PropertyListing;
