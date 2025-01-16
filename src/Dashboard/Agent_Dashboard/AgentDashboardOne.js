import Sidebar from "../../Agent_Profile/Components/Sidebar";
import ActivityFeed from "../User_Dashboard/ActivityFeed";
import Welcome from "../User_Dashboard/Welcome";
import TopRightArrowGreen from "../../Agent_Profile/images/arrow-upper-right-green.svg";
import TopRightArrowRed from "../../Agent_Profile/images/arrow-upper-right-Red.svg";
import LeadMang from "./LeadMang";
import FilterDashboard from "../User_Dashboard/FilterDashboard";
import ActivitySummaryAgent from "./ActivitySummaryAgent";

function AgentDashboardOne() {
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
      <div className="flex h-screen z-40">
        <Sidebar />
        <div className=" w-full">
          <Welcome
            displayHello={false}
            userName="Welcome"
            message="Pradeep Kumar"
            progress="Your current summary and activity."
          />
          <div className="md:px-10 px-4">
            <FilterDashboard />
          </div>
          <ActivityFeed data={customData} />
          <LeadMang />
          <ActivitySummaryAgent />
        </div>
      </div>
    </div>
  );
}

export default AgentDashboardOne;
