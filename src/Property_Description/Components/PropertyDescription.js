import React from "react";
import Lands from "./lands";
import PathInfo from "./PathInfo";
import VentureDetails from "./ventureDetails";
import VentureFacilities from "./VentureFacilities";
import Map from "./Map";
import MoreDetails from "./MoreDetails";
import PremiumProperties from "./PremiumProperties";
import Testimonial from "./Testimonial";
// import Footer from "../Common/Footer";
// import Navbar from "../Common/Navbar";
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar";

const PropertyDescription = () => {
  return (
    <div className="">
      <Navbar />
      <PathInfo />
      <Lands />
      <VentureDetails />
      <VentureFacilities />
      <Map />
      <MoreDetails />
      <PremiumProperties />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default PropertyDescription;
