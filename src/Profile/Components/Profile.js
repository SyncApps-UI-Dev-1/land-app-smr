import React from "react";
import Sidebar from "./Sidebar";
import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
import ProfileNameImg from "./ProfileNameImg";
import Tabs from "./Tabs";

const Profile = () => {
  return (
    <div className="flex h-screen px-0">
      <Sidebar />
      <div className="w-full -z-40 relative bg-cover bg-center border border-gray-200">
        <ProfileNameImg />
        <ContactInfo />
        <Experience />
        <Tabs />
      </div>
    </div>
  );
};

export default Profile;
