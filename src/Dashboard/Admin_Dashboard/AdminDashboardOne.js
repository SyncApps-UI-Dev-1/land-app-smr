import Sidebar from "../../Agent_Profile/Components/Sidebar";
import Listing from "../../Agent_Profile/images/Listings.svg";
import Home from "../../Agent_Profile/images/Home.svg";
import Dashboard from "../../Agent_Profile/images/Dashboard.svg";
import ProfileIcon from "../../Agent_Profile/images/Profile.svg";
import Settings from "../../Agent_Profile/images/Settings.svg";
import Transaction from "../../Agent_Profile/images/Transaction.svg";
import AgentManag from "../../Agent_Profile/images/AgentMang.svg";
import Welcome from "../User_Dashboard/Welcome";
import FilterDashboard from "../User_Dashboard/FilterDashboard";
// import ActivityFeed from "../User_Dashboard/ActivityFeed";
import TopRightArrowGreen from "../../Agent_Profile/images/arrow-upper-right-green.svg";
import TopRightArrowRed from "../../Agent_Profile/images/arrow-upper-right-Red.svg";
import ActivityFeed from "../User_Dashboard/ActivityFeed";
import RevenueTrendsOverview from "./RevenueTrendsOverview";
import ActivitySummaryAdmin from "./ActivitySummaryAdmin";
// import RevenueTrendsOverview from "./RevenueTrendsOverview";
// import FilterDashboard from "../User_Dashboard/FilterDashboard";

function AdminDashboardOne() {
  const defaultMenuItems = [
    { icon: Home, label: "Home", path: "/" },
    {
      icon: Dashboard,
      label: "Dashboard",
      dropdown: [
        { label: "User Dashboard", path: "/user-dashboard" },
        { label: "Agent Dashboard", path: "/agent-dashboard" },
        { label: "Admin Dashboard", path: "/admin-dashboard" },
      ],
    },
    { icon: Listing, label: "Listings Management", path: "/listings" },
    { icon: Transaction, label: "Transactions", path: "/Transactions" },
    { icon: AgentManag, label: "Agent Management", path: "/Agent Management" },
    {
      icon: ProfileIcon,
      label: "Profile Management",
      path: "/Profile Management",
    },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const customData = [
    {
      title: "Total Listings",
      count: 33,
      percentage: "10%",
      arrow: TopRightArrowGreen,
    },
    {
      title: "Active Listings",
      count: 1560,
      percentage: "12%",
      arrow: TopRightArrowGreen,
    },
    {
      title: "New User Signups",
      count: 840,
      percentage: "2%",
      arrow: TopRightArrowRed,
    },
    {
      title: "Revenue Generated",
      count: 1800000,
      percentage: "2%",
      arrow: TopRightArrowRed,
    },
  ];

  return (
    <div>
      <div className="flex h-screen">
        <Sidebar menuItems={defaultMenuItems} />
        <div className="w-full">
          <Welcome
            displayHello={false}
            displayMessage={false}
            userName="Admin Dashboard"
            progress="Detail Report"
          />
          <div className="md:px-10 px-4">
            <FilterDashboard />
          </div>
          <ActivityFeed data={customData} />
          <RevenueTrendsOverview />
          <ActivitySummaryAdmin />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardOne;
