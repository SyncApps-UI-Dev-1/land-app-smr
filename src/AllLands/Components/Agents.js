import Button from "../common/Button";
import AgentOne from "./images/agentOne.svg";
import WhatsApp from "./images/WhatsApp.svg";
import AgentTwo from "./images/AgentTwo.svg";
import AgentThree from "./images/AgentThree.svg";

function Agents() {
  return (
    <div className="mx-4 md:mx-20">
      <div className="mt-6 text-lg md:text-xl font-semibold text-center md:text-left">
        Top Agents in Shamshabad, Telengana
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 rounded-md p-4 mt-6">
        <div className="border border-gray-500 p-4 rounded-md flex flex-col items-center md:items-start">
          <div className="flex gap-3 items-center w-full justify-between">
            <div className="flex gap-3 items-center">
              <img src={AgentOne} alt={AgentOne} className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-bold">Manikanta</span>
                <span className="text-sm">Vikarabad 140 Listings</span>
              </div>
            </div>
            <img src={WhatsApp} alt={WhatsApp} className="w-6 h-6" />
          </div>
          <div className="mt-4 w-full">
            <Button
              bg="bg-black"
              textSize="sm"
              text="text-gray-300"
              paddingX="4"
              paddingY="1"
              className="w-full"
            >
              Contact Partner
            </Button>
          </div>
        </div>
        <div className="border border-gray-500 p-4 rounded-md flex flex-col items-center md:items-start">
          <div className="flex gap-3 items-center w-full justify-between">
            <div className="flex gap-3 items-center">
              <img src={AgentTwo} alt={AgentTwo} className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-bold">Manikanta</span>
                <span className="text-sm">Vikarabad 140 Listings</span>
              </div>
            </div>
            <img src={WhatsApp} alt={WhatsApp} className="w-6 h-6" />
          </div>
          <div className="mt-4 w-full">
            <Button
              bg="bg-black"
              textSize="sm"
              text="text-gray-300"
              paddingX="4"
              paddingY="1"
              className="w-full"
            >
              Contact Partner
            </Button>
          </div>
        </div>
        <div className="border border-gray-500 p-4 rounded-md flex flex-col items-center md:items-start">
          <div className="flex gap-3 items-center w-full justify-between">
            <div className="flex gap-3 items-center">
              <img src={AgentThree} alt={AgentThree} className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-bold">Manikanta</span>
                <span className="text-sm">Vikarabad 140 Listings</span>
              </div>
            </div>
            <img src={WhatsApp} alt={WhatsApp} className="w-6 h-6" />
          </div>
          <div className="mt-4 w-full">
            <Button
              bg="bg-black"
              textSize="sm"
              text="text-gray-300"
              paddingX="4"
              paddingY="1"
              className="w-full"
            >
              Contact Partner
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agents;
