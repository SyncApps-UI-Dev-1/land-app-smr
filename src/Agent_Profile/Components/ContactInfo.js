import Button from "../../Common/Button";
import Receiver from "../images/Receiver.svg";

function ContactInfo() {
  return (
    <>
      <div>
        <div className="flex flex-wrap gap-6 px-4 mt-10 justify-center md:justify-around items-center md:w-full">
          {/* Contact Button */}
          <Button className="flex md:w-auto w-full px-3 py-2 gap-2 bg-primary rounded-md items-center">
            <img src={Receiver} alt="Contact Icon" />
            <span className="text-white text-sm md:text-base">
              Contact Pradeep
            </span>
          </Button>

          {/* Divider Line */}
          <span className="hidden md:block bg-gray-300 w-[2px] h-12"></span>

          {/* Properties for Sale */}
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg md:text-xl">16</span>
            <span className="font-semibold text-xs md:text-sm text-center">
              Properties for Sale
            </span>
          </div>

          {/* In Discussion */}
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg md:text-xl">04</span>
            <span className="font-semibold text-xs md:text-sm text-center">
              In Discussion
            </span>
          </div>

          {/* Deals Closed */}
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg md:text-xl">20</span>
            <span className="font-semibold text-xs md:text-sm text-center">
              Deals Closed
            </span>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 mt-14"></div>
    </>
  );
}

export default ContactInfo;
