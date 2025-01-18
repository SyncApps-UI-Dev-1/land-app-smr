import { useState } from "react";
import ProfileDetails from "./TabsComponents/ProfileDetails";
import PostedProperties from "./TabsComponents/PostedProperties";
import History from "./TabsComponents/History";
import Reviews from "./TabsComponents/Reviews";
import Locations from "./TabsComponents/Locations";

function Tabs() {
  const [activeTab, setActiveTab] = useState("profileDetails");

  return (
    <div className="pb-12 mt-4 flex flex-col gap-4">
      {/* Tab Bar */}
      <div className="flex flex-wrap space-x-2 justify-center md:justify-start md:space-x-6 overflow-x-auto md:px-2 px-1">
        <button
          className={`${
            activeTab === "profileDetails" ? "border-b-4 border-primary" : ""
          } pb-2 text-xs md:text-md font-medium whitespace-nowrap`}
          onClick={() => setActiveTab("profileDetails")}
        >
          Profile Details
        </button>
        <button
          className={`${
            activeTab === "postedProperties" ? "border-b-4 border-primary" : ""
          } pb-2 text-xs md:text-md font-medium whitespace-nowrap`}
          onClick={() => setActiveTab("postedProperties")}
        >
          Posted Properties
        </button>
        <button
          className={`${
            activeTab === "history" ? "border-b-4 border-primary" : ""
          } pb-2 text-xs md:text-md font-medium whitespace-nowrap`}
          onClick={() => setActiveTab("history")}
        >
          History
        </button>
        <button
          className={`${
            activeTab === "reviews" ? "border-b-4 border-primary" : ""
          } pb-2 text-xs md:text-md font-medium whitespace-nowrap`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
        <button
          className={`${
            activeTab === "locations" ? "border-b-4 border-primary" : ""
          } pb-2 text-xs md:text-md font-medium whitespace-nowrap`}
          onClick={() => setActiveTab("locations")}
        >
          Locations
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4 px-2 md:px-0">
        {activeTab === "profileDetails" && <ProfileDetails />}
        {activeTab === "postedProperties" && <PostedProperties />}
        {activeTab === "history" && <History />}
        {activeTab === "reviews" && <Reviews />}
        {activeTab === "locations" && <Locations />}
      </div>
    </div>
  );
}

export default Tabs;
