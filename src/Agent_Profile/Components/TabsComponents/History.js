import { useState } from "react";
import ActivitySummary from "../../../Dashboard/User_Dashboard/ActivitySummary";

// Example data for other tabs
const ViewProperties = [
  { title: "Cozy Studio", details: "1 BHK, Affordable, $1200/month" },
  { title: "Spacious Flat", details: "4 BHK, Near metro, $3500/month" },
];

const communicationHistory = [
  {
    title: "Inquiry About Villa",
    details: "Customer asked for more photos of the villa.",
  },
  {
    title: "Follow-up on Apartment",
    details: "Confirmed appointment for viewing.",
  },
];

// Replacing SearchHistory array with JSX
const SearchHistory = (
  <div className="-ml-24 p-4 w-[1000px]">
    <ActivitySummary
      buttons={["All history", "Contacted"]}
      className="mt-1 text-gray-400"
      showReport={false}
      circleColor="bg-green-500"
      isActive={true}
      title="Search History"
      tableHeaders={[
        <div className="flex gap-20 justify-between">
          <span className="text-md text-black">Investor Name</span>
          <span className="text-md text-black">Property Name</span>
          <span className="text-md text-black">Contacted</span>
          <span className="text-md text-black">Location</span>
          <span className="text-md text-black">Status</span>
        </div>,
      ]}
      tableData={[
        {
          propertyName: "Charles T",
          ownerName: "Janapriya Properties",
          inquiryDate: "Dec 9, 2024, 3 PM",
          location: "Shamshabad, Hyd",
          nextAction: "Active",
        },
        {
          propertyName: "Davis Torff",
          ownerName: "Janapriya Properties",
          inquiryDate: "Dec 9, 2024, 3 PM",
          location: "Shamshabad, Hyd",
          nextAction: "Revisit Appointment",
        },
        {
          propertyName: "Zain Korsgaard",
          ownerName: "Janapriya Properties",
          inquiryDate: "Dec 9, 2024, 3 PM",
          location: "Shamshabad, Hyd",
          nextAction: "Revisit Appointment",
        },
        {
          propertyName: "Martin Philips",
          ownerName: "Janapriya Properties",
          inquiryDate: "Dec 9, 2024, 3 PM",
          location: "Shamshabad, Hyd",
          nextAction: "Revisit Appointment",
        },
        {
          propertyName: "Anika Dias",
          ownerName: "Janapriya Properties",
          inquiryDate: "Dec 9, 2024, 3 PM",
          location: "Shamshabad, Hyd",
          nextAction: "Revisit Appointment",
        },
        {
          propertyName: "Miracle Geidt",
          ownerName: "Janapriya Properties",
          inquiryDate: "Dec 9, 2024, 3 PM",
          location: "Shamshabad, Hyd",
          nextAction: "Revisit Appointment",
        },
      ]}
    />
  </div>
);

const History = () => {
  const [activeTab, setActiveTab] = useState("latest");

  const displayedData =
    activeTab === "latest"
      ? SearchHistory
      : activeTab === "recent"
      ? ViewProperties
      : communicationHistory;

  return (
    <div>
      <div>
        <h1 className="font-semibold">Posted Properties</h1>
        <div className="flex mt-6 gap-4 ml-6 px-3 py-2 rounded-md bg-gray-100">
          <button
            className={`${
              activeTab === "latest"
                ? " bg-white px-6 py-3 rounded-md shadow-md"
                : ""
            } pb-2 text-md font-medium`}
            onClick={() => setActiveTab("latest")}
          >
            Search History
          </button>
          <button
            className={`${
              activeTab === "recent"
                ? " bg-white px-6 py-3 rounded-md shadow-md"
                : ""
            } pb-2 text-md font-medium`}
            onClick={() => setActiveTab("recent")}
          >
            Viewed Properties
          </button>
          <button
            className={`${
              activeTab === "communication"
                ? " bg-white px-6 py-3 rounded-md shadow-md"
                : ""
            } pb-2 text-md font-medium`}
            onClick={() => setActiveTab("communication")}
          >
            Communication History
          </button>
        </div>
      </div>

      {/* Display content based on the selected tab */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-20 gap-4 mt-6 md:p-0">
        {activeTab === "latest"
          ? SearchHistory
          : displayedData.map((item, index) => (
              <div
                key={index}
                className="p-4 px-32 w-full border border-gray-300 rounded-md shadow-md"
              >
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.details}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default History;
