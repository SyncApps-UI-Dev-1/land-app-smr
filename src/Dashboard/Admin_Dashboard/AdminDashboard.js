import Sidebar from "../../Agent_Profile/Components/Sidebar";

function AdminDashboard() {
  return (
    <div>
      <div className="flex h-screen px-0">
        <Sidebar />
        <div className="w-full -z-40 relative bg-cover bg-center border-b-0 border border-gray-200">
          Mujeeb
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
