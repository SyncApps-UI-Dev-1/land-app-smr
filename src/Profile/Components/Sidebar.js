import { useState } from "react";
import Home from "../images/Home.svg";
import Dashboard from "../images/Dashboard.svg";
import Listing from "../images/Listings.svg";
import ProfileIcon from "../images/Profile.svg"; // Renamed to avoid conflict
import Settings from "../images/Settings.svg";
import SearchbarImg from "../images/Searchbar.svg";
import SearchbarLastImg from "../images/searchbarlastImg.svg";
import ProfileSidebar from "../images/profileSidebar.svg";
import BtnUtility from "../images/BtnUtility.svg";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="absolute top-4 left-4 text-black md:hidden z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <span className="text-3xl font-bold fixed">×</span>
        ) : (
          <div className="space-y-1">
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
          </div>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-full w-3/4 bg-white text-black px-7 md:pr-0 pr-10 py-4 flex flex-col gap-4  transition-transform duration-300 md:static md:translate-x-0 md:w-4/5`}
      >
        <div className="flex items-center gap-1 md:ml-0 ml-6">
          <h1 className="text-xl font-bold md:mt-4 mt-2">Land</h1>
          <h1 className="text-xl font-bold md:mt-4 mt-2">App</h1>
        </div>
        <div className="flex justify-center items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="max-w-[180px] md:ml-3 -ml-10 pl-8 border border-gray-300 rounded-md px-2 py-1 relative"
          />
          <img
            src={SearchbarImg}
            alt={SearchbarImg}
            className="absolute md:-left-1 -left-2 top-1/2 transform -translate-y-1/2"
          />
          <img
            src={SearchbarLastImg}
            alt={SearchbarLastImg}
            className="absolute md:-right-12 left-32 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <div className="flex flex-col gap-3 z-50">
          <div className="flex gap-4">
            <img src={Home} alt="Home" className="cursor-pointer" />
            <div>Home</div>
          </div>
          <div className="flex gap-4">
            <img src={Dashboard} alt="Dashboard" className="cursor-pointer" />
            <div>Dashboard</div>
          </div>
          <div className="flex gap-4">
            <img src={Listing} alt="Listings" className="cursor-pointer" />
            <div>Listings</div>
          </div>
          <div className="flex gap-4">
            <img src={ProfileIcon} alt="Profile" className="cursor-pointer" />
            <div>Profile</div>
          </div>
          <div className="flex gap-4">
            <img src={Settings} alt="Settings" className="cursor-pointer" />
            <div>Settings</div>
          </div>
        </div>
        <div className="flex gap-2 mt-auto">
          <img src={ProfileSidebar} alt={ProfileSidebar} />
          <div className="">
            <div>Pradeep Kumar</div>
            <div className="text-gray-600 text-sm">pradeep@landapp.com</div>
          </div>
          <img src={BtnUtility} alt={BtnUtility} className="-mt-4 -ml-3" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
