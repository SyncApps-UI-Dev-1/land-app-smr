import { useState } from "react";
import { latestProperties, recentProperties } from "../../../data/data";
// import { latestProperties, recentProperties } from "../TabsComponents/data";

const PostedProperties = () => {
  const [activeTab, setActiveTab] = useState("latest");

  // Rename the internal data variable to avoid conflict
  const displayedData =
    activeTab === "latest" ? latestProperties : recentProperties;

  return (
    <div>
      <div>
        <h1 className="font-semibold">Posted Properties</h1>
        <div className="flex mt-6 gap-4 ml-6">
          <button
            className={`${
              activeTab === "latest" ? "border-b-4 border-primary" : ""
            } pb-2 text-md font-medium`}
            onClick={() => setActiveTab("latest")}
          >
            Latest Properties
          </button>
          <button
            className={`${
              activeTab === "recent" ? "border-b-4 border-primary" : ""
            } pb-2 text-md font-medium`}
            onClick={() => setActiveTab("recent")}
          >
            Recent Properties
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-20 gap-4 mt-6 md:p-0">
        {displayedData.map((item) => (
          <div
            key={item.id}
            className="relative border border-gray-300 rounded-lg shadow-lg"
          >
            <img
              src={item.verified}
              alt="Verified"
              className="w-6 h-6 ml-auto absolute top-5 right-4"
            />
            {/* Logo */}
            <img
              src={item.logo}
              alt={`${item.title} logo`}
              className="w-full object-contain"
            />

            {/* Title and Verified Icon */}
            <div className="flex items-center mt-2 ml-4">
              <h3 className="text-md font-bold">{item.title}</h3>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-1 mb-2 ml-4">
              <img src={item.locationIcon} alt="Location" className="w-4 h-4" />
              <span className="font-medium text-xs">{item.location}</span>
            </div>
            <div className="border-b border-gray-200 mt-2"></div>

            {/* Price, Size, and Rating */}
            <div className="flex items-center text-sm justify-center gap-3 font-bold p-2">
              <p>{item.price}</p>
              <span className="text-black">|</span>
              <p>{item.size}</p>
              <span className="text-black">|</span>
              <p>{item.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostedProperties;
