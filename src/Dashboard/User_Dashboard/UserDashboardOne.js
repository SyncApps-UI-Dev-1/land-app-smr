import Sidebar from "../../Agent_Profile/Components/Sidebar";
import ActivityFeed from "./ActivityFeed";
import ActivitySummary from "./ActivitySummary";
import FilterDashboard from "./FilterDashboard";
import PersonalizedRecommendations from "./PersonalizedRecommendations";
import Welcome from "./Welcome";

function UserDashboardOne() {
  return (
    <div>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="w-full">
            <Welcome />
          </div>
          <div className="md:px-10 px-4">
            <FilterDashboard />
          </div>
          <ActivityFeed />
          <PersonalizedRecommendations />

          <ActivitySummary />
        </div>
      </div>
    </div>
  );
}

export default UserDashboardOne;
