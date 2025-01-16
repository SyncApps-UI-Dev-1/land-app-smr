import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropertyListing from "./Property_Listing/Components/PropertyListing";
import Profile from "./Agent_Profile/Components/Profile";
import PropertyDescription from "./Property_Description/Components/PropertyDescription";
// import UserDashboard from "./Dashboard/User_Dashboard/UserDashboard";
import AgentDashboardOne from "./Dashboard/Agent_Dashboard/AgentDashboardOne";
import UserDashboardOne from "./Dashboard/User_Dashboard/UserDashboardOne";
import AdminDashboardOne from "./Dashboard/Admin_Dashboard/AdminDashboardOne";
// import AgentDashboard from "./Dashboard/Agent_Dashboard/AgentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertyDescription />} />
        <Route path="/AllLands" element={<PropertyListing />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/user-dashboard" element={<UserDashboardOne />} />
        <Route path="/admin-dashboard" element={<AdminDashboardOne />} />
        <Route path="/agent-dashboard" element={<AgentDashboardOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
