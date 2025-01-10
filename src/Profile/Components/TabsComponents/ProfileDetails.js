import WhatsApp from "../../../AllLands/Components/images/WhatsApp.svg";
import BenchMark from "../../images/BenchmarkBlue.svg";
import BenchMarkGreen from "../../images/BenchmarkGreen.svg";
import Certified from "../../images/Certified.svg";

function ProfileDetails() {
  return (
    <div className="pb-12 px-4 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        {/* LeftSide */}
        <div className="lg:flex-1">
          <h1 className="font-semibold text-lg">About me</h1>
          <div className="text-gray-500 mt-2 max-w-xl text-sm md:text-base">
            His in-depth understanding of land transactions, market trends, and
            personalized service has earned him the trust of numerous clients
            seeking reliable investment opportunities.
          </div>
          <div className="font-semibold mt-4">Operates in</div>
          <div className="text-gray-500 mt-2 text-sm md:text-base">
            Maheshwaram, Moinabad, Chevella, Shadnagar, Kothur, Bhongir &
            Narsingi
          </div>
          <div className="mt-4 font-semibold">Deals in</div>
          <div className="mt-2 text-gray-500 text-sm md:text-base">
            Original Booking, Agricultural & Non-agricultural properties
          </div>
        </div>

        {/* RightSide */}
        <div className="border border-gray-300 rounded-md p-4 flex md:flex-row flex-col gap-4 w-full lg:w-auto">
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-gray-500 text-sm">Location</div>
              <div className="text-customPurple font-semibold mt-1 text-sm md:text-base">
                Karimnagar
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-sm">Office</div>
              <div className="text-customPurple font-semibold text-sm md:text-base">
                MG Road, Karimnagar
              </div>
              <img
                src={WhatsApp}
                alt="WhatsApp"
                className="w-6 h-6 mt-4 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-gray-500 text-sm">Phone</div>
              <div className="text-customPurple font-semibold mt-1 text-sm md:text-base">
                9454xxxxxx
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-sm">Email</div>
              <div className="text-customPurple font-semibold text-sm md:text-base">
                pradeep@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="mt-12">
        <h2 className="mb-6 font-semibold text-lg">Key Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First */}
          <div className="flex flex-col">
            <div className="flex gap-4">
              <img src={BenchMark} alt="BenchMark" className="w-12 h-12" />
              <div>
                <p className="font-semibold text-sm md:text-base">
                  Top Sales Agent of Year (2023)
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                  Benchmark for sales success
                </p>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-400">
              Jan 2023 - Dec 2023
            </div>
          </div>
          {/* Second */}
          <div className="flex flex-col">
            <div className="flex gap-4">
              <img
                src={BenchMarkGreen}
                alt="BenchMarkGreen"
                className="w-12 h-12"
              />
              <div>
                <p className="font-semibold text-sm md:text-base">
                  Closed over 100 transactions
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                  Benchmark for sales success
                </p>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-400">
              Jan 2021 – Dec 2024
            </div>
          </div>
          {/* Third */}
          <div className="flex flex-col">
            <div className="flex gap-4">
              <img src={Certified} alt="Certified" className="w-12 h-12" />
              <div>
                <p className="font-semibold text-sm md:text-base">
                  Certified Specialist
                </p>
                <p className="text-gray-500 text-xs md:text-sm">
                  Benchmark for sales success
                </p>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-400">
              Jan 2021 – Dec 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
