import data from "../data/data";

function LandsDetails() {
  return (
    <div className="px-4 md:mx-10">
      <div className="mt-6 md:mb-0 mb-3 font-semibold md:text-lg md:ml-6">
        3895 Lands - Shamshabad Region
      </div>
      <div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:p-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative border  border-gray-300 rounded-lg p-3 shadow-lg w-full md:max-w-[300px]" // Slightly increased container size
            >
              {/* Logo */}
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className=" w-full md:w-[300px] h-auto mb-4 object-contain mx-auto" // Slightly increased logo size
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
                <img
                  src={item.locationIcon}
                  alt="Location"
                  className="w-4 h-4"
                />
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
    </div>
  );
}

export default LandsDetails;
