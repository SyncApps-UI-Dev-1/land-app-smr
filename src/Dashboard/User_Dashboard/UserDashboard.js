// UserDashboard Component
import Sidebar from "../../Agent_Profile/Components/Sidebar";
import ActivityFeed from "./ActivityFeed";
import ActivitySummary from "./ActivitySummary";
import FilterDashboard from "./FilterDashboard";
import PersonalizedRecommendations from "./PersonalizedRecommendations";
import Welcome from "./Welcome";

function UserDashboard() {
  return (
    <div>
      <div className="flex h-screen">
        <Sidebar rounded="rounded-md border border-gray-300">
          {/* Add any child components for the Sidebar here */}
        </Sidebar>
        <div className="w-full mt-1 -z-40 relative">
          <Welcome />
          <FilterDashboard />
          <ActivityFeed />
          <PersonalizedRecommendations />
          <ActivitySummary />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
