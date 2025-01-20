import { useState } from "react";
import ProfileDetails from "./TabsComponents/ProfileDetails";
// import PostedProperties from "./TabsComponents/PostedProperties";
import History from "./TabsComponents/History";
import Reviews from "./TabsComponents/Reviews";
import Locations from "./TabsComponents/Locations";
import PostedProperties from "./TabsComponents/PostedProperties";
import { latestProperties, recentProperties } from "../../data/data";

function Tabs() {
  const [activeTab, setActiveTab] = useState("profileDetails");
  const tabLabels = [
    { key: "latest", label: "Latest Properties" },
    { key: "recent", label: "Recent Properties" },
  ];

  const tabData = [
    { key: "latest", data: latestProperties },
    { key: "recent", data: recentProperties },
  ];

  // Define the tabs with their names and corresponding components
  const tabs = [
    {
      key: "profileDetails",
      label: "Profile Details",
      component: <ProfileDetails />,
    },
    {
      key: "postedProperties",
      label: "Posted Properties",
      component: (
        <PostedProperties
          title="Posted Properties"
          tabLabels={tabLabels}
          tabData={tabData}
        />
      ),
    },

    { key: "history", label: "History", component: <History /> },
    { key: "reviews", label: "Reviews", component: <Reviews /> },
    { key: "locations", label: "Locations", component: <Locations /> },
  ];

  return (
    <div className="pb-12 mt-4 flex flex-col gap-4">
      {/* Tab Bar */}
      <div className="flex flex-wrap space-x-2 justify-center md:justify-start md:space-x-6 overflow-x-auto md:px-2 px-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${
              activeTab === tab.key ? "border-b-4 border-primary" : ""
            } pb-2 text-xs md:text-lg font-medium whitespace-nowrap`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 px-2 md:px-0">
        {tabs.find((tab) => tab.key === activeTab)?.component}
      </div>
    </div>
  );
}

export default Tabs;
