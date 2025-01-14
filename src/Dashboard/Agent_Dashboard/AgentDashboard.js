import Sidebar from "../../Agent_Profile/Components/Sidebar";
import ActivityFeed from "../User_Dashboard/ActivityFeed";
import FilterDashboard from "../User_Dashboard/FilterDashboard";
import Welcome from "../User_Dashboard/Welcome";
import TopRightArrowGreen from "../../Agent_Profile/images/arrow-upper-right-green.svg";
import TopRightArrowRed from "../../Agent_Profile/images/arrow-upper-right-Red.svg";
import LeadMang from "./LeadMang";

function AgentDashboard() {
  const customData = [
    {
      title: "Total Listings",
      count: 33,
      percentage: "10%",
      arrow: TopRightArrowGreen,
    },
    {
      title: "Leads Generated",
      count: 125,
      percentage: "12%",
      arrow: TopRightArrowGreen,
    },
    {
      title: "Closed Deals",
      count: 16,
      percentage: "2%",
      arrow: TopRightArrowRed,
    },
    {
      title: "Revenue Earned",
      count: 300000,
      percentage: "2%",
      arrow: TopRightArrowRed,
    },
  ];

  return (
    <div>
      <div className="flex h-screen px-0">
        <Sidebar />
        <div className="w-full -z-40 relative bg-cover bg-center border-b-0 border border-gray-200">
          <Welcome />
          <FilterDashboard />
          <ActivityFeed data={customData} />
          <LeadMang />
        </div>
      </div>
    </div>
  );
}

export default AgentDashboard;
