import Box from "../Common/box";
import { properties } from "../data/data";

function PremiumProperties() {
  return (
    <div className="px-20 mt-6">
      <h2 className="md:text-xl text-[14px] font-bold mb-4">
        Related Premium Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        {properties.map((property, index) => (
          <Box
            key={index}
            title={property.location}
            className="border-none"
            content={
              <div className="relative">
                {/* Property Image */}
                <img
                  src={property.img}
                  alt={property.location}
                  className="w-full h-[200px] object-cover rounded-md"
                />

                {/* Heart and Share Icons */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <img
                    src={property.imgheart}
                    alt="Heart Icon"
                    className="w-8 h-8 bg-white rounded-full p-1 shadow-md"
                  />
                  <img
                    src={property.imgshare}
                    alt="Share Icon"
                    className="w-8 h-8 bg-white rounded-full p-1 shadow-md"
                  />
                </div>

                {/* Property Details */}
                <div className="flex items-center mt-6 text-gray-400 text-sm">
                  <p className="">{property.location}</p>
                  <span className="ml-1">.</span>
                  <p>{property.date}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 text-sm sm:text-lg">
                  <p>{property.price}</p>
                  <span className="hidden sm:inline">-</span>{" "}
                  {/* Show only on medium screens or larger */}
                  <p>{property.size}</p>
                </div>

                <p className="text-sm font-medium text-gray-700">
                  {property.area}
                </p>
              </div>
            }
          />
        ))}
      </div>
      <div className="border-b border-gray-300 mt-4"></div>
    </div>
  );
}
export default PremiumProperties;
