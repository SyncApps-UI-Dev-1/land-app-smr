import { useState } from "react";
import { latestProperties, recentProperties } from "../TabsComponents/data";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 md:p-6">
        {displayedData.map((item) => (
          <div
            key={item.id}
            className="relative border border-gray-300 rounded-lg p-3 shadow-lg w-full"
          >
            {/* Logo */}
            <img
              src={item.logo}
              alt={`${item.title} logo`}
              className="w-full md:w-[300px] h-auto mb-4 object-contain mx-auto"
            />
            <span className="absolute top-6 text-gray-300 left-6 text-xs bg-black rounded-full px-3 py-1">
              Featured
            </span>

            {/* Title and Verified Icon */}
            <div className="flex items-center mb-2">
              <h3 className="font-semibold text-md">{item.title}</h3>
              <img
                src={item.verified}
                alt="Verified"
                className="w-6 h-6 ml-auto"
              />
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mb-2">
              <img src={item.locationIcon} alt="Location" className="w-4 h-4" />
              <span className="font-medium text-xs">{item.location}</span>
            </div>
            <div className="border-b border-gray-200 mt-2"></div>

            {/* Price, Size, and Rating */}
            <div className="flex justify-between items-center mt-2 text-sm">
              <p>Price: {item.price}</p>
              <span className="text-gray-200">|</span>
              <p>Size: {item.size}</p>
              <span className="text-gray-200">|</span>
              <p>Rating: {item.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostedProperties;
