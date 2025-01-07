import { useState } from "react";
import smr from "./images/AvatarFive.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white z-50 relative px-4 md:px-16 w-full mt-4 md:shadow-lg text-black">
      {/* Left Section - Logo and Menu */}
      <div className="flex items-center gap-6">
        <div className="font-bold">Land App</div>
        {/* Menu */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex gap-6 py-6 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col font-semibold justify-center items-center md:flex-row md:items-center gap-5 cursor-pointer">
            <li>Home</li>
            <li>Bookings</li>
            <li>Projects</li>
            <li>Tasks</li>
            <li>Reporting</li>
            <li>Users</li>
          </ul>
        </div>
      </div>

      {/* Right Section - Notifications and Avatar (Hidden in Mobile View) */}
      <div className="flex items-center gap-2">
        <img
          src={smr}
          alt="avatar"
          className="rounded-full w-8 h-8 ml-2 border border-gray-300"
        />
        {/* Hamburger Menu - Visible on Small Screens */}
        <button
          className="md:hidden text-gray-700 focus:outline-none ml-6"
          onClick={handleToggleMenu}
        >
          {/* Hamburger Icon */}
          {menuOpen ? (
            <span className="text-2xl">&times;</span> // Close Icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger Icon
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
