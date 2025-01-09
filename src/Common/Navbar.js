import { useState } from "react";
import Avatar from "../Components/images/AvatarFive.svg";
import { Link } from "react-router-dom";
import {
  BrowserRouter as router,
  Routes,
  Route,
  Links,
} from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white z-50 relative px-4 md:px-16 w-full mt-4 md:shadow-lg text-black">
      {/* Left Section - Logo and Menu */}
      <div className="flex items-center gap-6">
        <Link to="/">
          <div className="font-bold cursor-pointer">Land App</div>
        </Link>
        {/* Menu */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex gap-6 py-6 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col font-semibold justify-center items-center md:flex-row md:items-center gap-5 cursor-pointer">
            {/* <Link to="/">Home</Link> */}
            <Link to="/AllLands">All Lands</Link>
            <li>Developers</li>
            <li>Lakes</li>
            <li>Premium</li>
            <li>Services</li>
          </ul>
        </div>
      </div>

      {/* Right Section - Notifications and Avatar (Hidden in Mobile View) */}
      <div className="flex items-center gap-2">
        <Link to="/Profile">
          <img
            src={Avatar}
            alt="avatar"
            className="rounded-full w-8 h-8 ml-2 border border-gray-300 cursor-pointer"
          />
        </Link>
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
