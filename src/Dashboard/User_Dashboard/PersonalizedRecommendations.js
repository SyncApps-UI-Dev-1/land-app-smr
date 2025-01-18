import RecommendImgOne from "../../Agent_Profile/images/RecommendImgOne.svg";

function PersonalizedRecommendations() {
  return (
    <div className="mt-6 px-10">
      {/* Main Container with Reduced Width */}
      <div className="border border-gray-300 p-4 rounded-md w-full mx-auto">
        <div className="font-semibold text-lg mb-2 -mt-2">
          Personalized Recommendations
        </div>
        {/* Boxes */}
        <div className="flex gap-4 flex-col md:flex-row">
          {" "}
          {/* Updated flex settings */}
          {/* Box : 1 */}
          <div className="flex p-4 border border-gray-300 rounded-md w-full md:w-1/2">
            {" "}
            {/* Ensure full width on mobile */}
            <div className="flex gap-4">
              <img
                src={RecommendImgOne}
                alt="Recommendation 1"
                className="w-16 h-16 sm:w-auto sm:h-auto"
              />
              <div className="flex flex-col justify-around">
                <div className="flex flex-col">
                  <div className="font-semibold">Land Kalpataru Avante</div>
                  <div>Shamshabad, Rangareddy Dist</div>
                </div>
                <div className="border border-gray-300 mt-1 w-full"></div>
                <div className="flex gap-3">
                  <div className="text-black font-bold">Rs 1.2Cr</div>
                  <div className="text-black font-bold">|</div>
                  <div className="font-bold">2546 sqft</div>
                </div>
              </div>
            </div>
          </div>
          {/* Box : 2 */}
          <div className="flex p-4 border border-gray-300 rounded-md w-full md:w-1/2">
            {" "}
            {/* Ensure full width on mobile */}
            <div className="flex gap-4">
              <img
                src={RecommendImgOne}
                alt="Recommendation 2"
                className="w-16 h-16 sm:w-auto sm:h-auto"
              />
              <div className="flex flex-col justify-around">
                <div className="flex flex-col">
                  <div className="font-semibold">Land Kalpataru Avante</div>
                  <div>Shamshabad, Rangareddy Dist</div>
                </div>
                <div className="border border-gray-300 mt-1 w-full"></div>
                <div className="flex gap-3">
                  <div className="text-black font-bold">Rs 1.2Cr</div>
                  <div className="text-black font-bold">|</div>
                  <div className="font-bold">2546 sqft</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Activity Summary */}
    </div>
  );
}

export default PersonalizedRecommendations;
