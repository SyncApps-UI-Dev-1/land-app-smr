import React from "react";
import Navbar from "./Navbar";
import Lands from "./lands";
import PathInfo from "./PathInfo";
import VentureDetails from "./ventureDetails";
import VentureFacilities from "./VentureFacilities";
import Map from "./Map";
import MoreDetails from "./MoreDetails";
import PremiumProperties from "./PremiumProperties";
import Testimonial from "./Testimonial";
import Footer from "../Common/Footer";

const MainContent = () => {
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
      <div className="border-b border-gray-300 mt-4"></div>
      <div className="border-b border-gray-300 mt-8"></div>
      <Footer />
    </div>
  );
};

export default MainContent;
