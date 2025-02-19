import ButtonOne from "../../Common/ButtonOne";
import BgImg from "../images/BgImg.svg";
import ProfileAgent from "../images/ProfileAgent.svg";
import LeftArrow from "../images/LeftArrow.svg";
import star from "../images/Star.svg";
import ThreeDots from "../images/ThreeDots.svg";
import { useNavigate } from "react-router-dom";

function ProfileDetails() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="z-40">
        {/* Background Image and Profile Image */}
        <div className="relative">
          <img
            src={BgImg}
            alt="Background"
            className="w-full object-cover z-40"
          />
          <img
            src={ProfileAgent}
            alt="Profile Agent"
            className="w-[100px] md:w-[130px] rounded-full absolute top-32 md:top-48 left-4 md:left-6"
          />
        </div>

        {/* Profile Information and Action Buttons */}
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col ml-28 md:ml-40 mt-6 md:mt-4">
            <div className="flex items-center gap-2" onClick={handleClick}>
              <img src={LeftArrow} alt="Left Arrow" />
              <button className="text-sm">Back to</button>
            </div>
            <p className="font-bold text-lg md:text-xl">Pradeep Kumar</p>
            <div className="text-gray-400 text-xs md:text-sm mt-1">
              Senior Real Estate Consultant
            </div>
            <div className="flex gap-1 mt-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img src={star} alt="Star" key={index} />
                ))}
            </div>
          </div>

          <div className="flex ml-auto mt-4 md:mt-4 gap-3 items-center mr-4 md:mr-16">
            <ButtonOne paddingX="2" paddingY="1">
              <img src={ThreeDots} alt="Three Dots" />
            </ButtonOne>
            <ButtonOne
              bg="bg-primary"
              text="text-gray-200"
              paddingX="2"
              paddingY="1"
              cursorPointer="cursor-pointer" // Pass the correct Tailwind class for cursor-pointer
            >
              Follow
            </ButtonOne>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-300 mt-10 md:mt-14"></div>
      </div>
    </div>
  );
}

export default ProfileDetails;
