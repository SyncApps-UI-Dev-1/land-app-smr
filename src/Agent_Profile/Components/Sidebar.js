import { useState } from "react";
import PropTypes from "prop-types";
import Home from "../images/Home.svg";
import Dashboard from "../images/Dashboard.svg";
import Listing from "../images/Listings.svg";
import ProfileIcon from "../images/Profile.svg"; // Renamed to avoid conflict
import Settings from "../images/Settings.svg";
import SearchbarImg from "../images/Searchbar.svg";
import SearchbarLastImg from "../images/searchbarlastImg.svg";
import ProfileSidebar from "../images/profileSidebar.svg";
import BtnUtility from "../images/BtnUtility.svg";
import { Link, useNavigate } from "react-router-dom";

function Sidebar({
  children,
  rounded,
  border = "",
  menuItems = [],
  profile = {
    name: "Pradeep Kumar",
    email: "pradeep@landapp.com",
    profileImg: ProfileSidebar,
    utilityImg: BtnUtility,
  },
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // Close the dropdown after navigation
  };

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
    { icon: ProfileIcon, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const itemsToRender = menuItems.length > 0 ? menuItems : defaultMenuItems;

  return (
    <div className={`relative ${border} ${rounded} md:h-full md:w-1/5`}>
      {children}

      {/* Toggle Button */}
      <button
        className="absolute top-4 left-4 text-black md:hidden z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <span className="text-3xl font-bold">×</span>
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
        } fixed top-0 left-0 z-50 h-full bg-white text-black px-4 py-4 flex flex-col gap-4 transition-transform duration-300 md:static md:translate-x-0 md:w-full w-2/3 overflow-y-auto`}
      >
        <Link to="/">
          <div className="flex items-center gap-1 md:ml-0 ml-6 cursor-pointer">
            <h1 className="text-xl font-bold md:mt-4 mt-2">Land</h1>
            <h1 className="text-xl font-bold md:mt-4 mt-2">App</h1>
          </div>
        </Link>
        <div className="flex justify-center items-center relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border pl-8 border-gray-300 rounded-md px-4 py-1"
          />
          <img
            src={SearchbarImg}
            alt="Search Icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
          />
          <img
            src={SearchbarLastImg}
            alt="Search Icon End"
            className="absolute right-2"
          />
        </div>
        <div className="flex flex-col gap-3 z-50 cursor-pointer">
          {itemsToRender.map((item, index) => (
            <div key={index} className="relative">
              <div
                className="flex gap-4 items-center"
                onClick={
                  item.dropdown
                    ? handleToggleDropdown
                    : () => handleNavigation(item.path)
                }
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="cursor-pointer"
                />
                <div>{item.label}</div>
              </div>
              {item.dropdown && isDropdownOpen && (
                <div className="absolute bg-white border z-50 border-gray-300 rounded-lg shadow-lg mt-2 w-48">
                  {item.dropdown.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleNavigation(subItem.path)}
                    >
                      {subItem.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex mt-auto border p-3 w-full border-gray-200 rounded-lg items-center gap-2">
          <div className="w-10 h-10">
            <img src={profile.profileImg} alt="Profile" />
          </div>
          <div>
            <div className="text-sm">{profile.name}</div>
            <div className="text-gray-600 text-xs">{profile.email}</div>
          </div>
          <div className="w-6 h-6 ml-auto">
            <img src={profile.utilityImg} alt="Utility" />
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node,
  rounded: PropTypes.string,
  border: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
      dropdown: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  profile: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    profileImg: PropTypes.string,
    utilityImg: PropTypes.string,
  }),
};

export default Sidebar;
