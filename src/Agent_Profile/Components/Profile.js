import React from "react";
import Sidebar from "./Sidebar";
import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
// import ProfileNameImg from "./ProfileNameImg";
import Tabs from "./Tabs";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="w-full relative bg-cover bg-center border-b-0 border border-gray-200">
        <ProfileDetails />
        <ContactInfo />
        <Experience />
        <Tabs />
      </div>
    </div>
  );
};

export default Profile;
