import DotSvg from "../../Agent_Profile/images/dots.svg";
import Button from "../../Common/Button";
function RevenueTrendsOverview() {
  const cityData = [
    { name: "Hyderabad", percentage: 50 },
    { name: "Bengaluru", percentage: 30 },
    { name: "Vizag", percentage: 10 },
    { name: "Vijayawada", percentage: 10 },
  ];
  return (
    <div className="mx-10 mt-6 flex">
      <div className="flex flex-col w-1/3 border border-gray-300 rounded-lg shadow-md p-4">
        <div className="flex">
          <div className="font-semibold">Source Revenue Contribution</div>
          <img
            src={DotSvg}
            alt={DotSvg}
            className="w-5 h-5 items-center ml-auto"
          />
        </div>
        <div className="mt-4 flex gap-2">
          <div
            className="relative w-36 h-36 rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(
        rgba(75, 0, 130, 1) 0% 50%,  /* Dark Purple - 0% to 25% */
        rgba(138, 43, 226, 1) 50% 80%,  /* Medium Purple - 25% to 50% */
        rgba(148, 0, 211, 1) 80% 90%,  /* Violet - 50% to 75% */
        rgba(186, 85, 211, 1) 90% 100%  /* Lavender - 75% to 100% */
    )`,
            }}
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
          </div>

          <div>
            {cityData.map((city, index) => (
              <p key={index} className="flex gap-1 items-center text-sm">
                <div
                  className={`rounded-full w-2 h-2 ${
                    city.percentage >= 50
                      ? "bg-primarySecond-900"
                      : city.percentage >= 30
                      ? "bg-primarySecond-600"
                      : "bg-primarySecond-400"
                  }`}
                ></div>
                {city.name} {city.percentage}%
              </p>
            ))}
          </div>
        </div>
        <div className="w-full h-[0.40px] bg-gray-300 mt-6"></div>
        <div className="mt-6 ml-auto border border-gray-300 rounded-lg py-1 text-sm font-semibold shadow-md">
          <Button px="px-2">View full report</Button>
        </div>
      </div>
      <div className="w-2/3 border border-gray-300 p-4 rounded-lg shadow-md ml-4">
        <div className="flex">
          <div className="font-semibold">Trends in Property Views</div>
          <img
            src={DotSvg}
            alt={DotSvg}
            className="w-5 h-5 items-center ml-auto"
          />
        </div>
        <div className="text-gray-500 text-sm">
          40% growth in property views over the last 1 year.
        </div>
        <div className="flex gap-2 items-center mt-2 justify-end">
          <div className="rounded-full bg-primarySecond-900 w-2 h-2"></div>
          <p>2024</p>
          <div className="rounded-full bg-primarySecond-600 w-2 h-2"></div>
          <p>2023</p>
        </div>
        <div className="flex">
          <div className="w-1/8 flex justify-center items-center">
            <div className="transform -rotate-90 whitespace-nowrap origin-bottom">
              Trend Views
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 relative">
            {/* Horizontal Lines */}
            <div className="flex items-center">
              100
              <p className="ml-1 border border-gray-200 flex-grow h-[0.60px]"></p>
            </div>
            <div className="flex items-center">
              80
              <p className="ml-1 border border-gray-200 flex-grow h-[0.60px]"></p>
            </div>
            <div className="flex items-center">
              60
              <p className="ml-1 border border-gray-200 flex-grow h-[0.60px]"></p>
            </div>
            <div className="flex items-center">
              40
              <p className="ml-1 border border-gray-200 flex-grow h-[0.60px]"></p>
            </div>
            <div className="flex items-center">
              20
              <p className="ml-1 border border-gray-200 flex-grow h-[0.60px]"></p>
            </div>
            <div className="flex items-center">
              0
              <p className="ml-1 border border-gray-200 flex-grow h-[0.60px]"></p>
            </div>

            {/* Vertical Lines with Curve */}
            <div className="absolute -top-7 left-[5%] w-[95%] h-[100%] flex justify-between items-end">
              {Array.from({ length: 60 }).map((_, index) => {
                const heightIncrement = 43 + index * 0.4;
                return (
                  <div
                    key={index}
                    className="bg-gray-200 w-px"
                    style={{
                      height: `${Math.min(heightIncrement, 70)}%`,
                    }}
                  ></div>
                );
              })}
            </div>

            {/* Month Labels */}
            <div className="flex gap-3 ml-3 -mt-4">
              <div>Jan</div>
              <div>Feb</div>
              <div>March</div>
              <div>April</div>
              <div>May</div>
              <div>June</div>
              <div>July</div>
              <div>August</div>
              <div>Sep</div>
              <div>Oct</div>
              <div>Nov</div>
              <div>Dec</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueTrendsOverview;
