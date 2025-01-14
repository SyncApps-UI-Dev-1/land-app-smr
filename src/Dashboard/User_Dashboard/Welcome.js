import ProfilePicture from "../../Agent_Profile/images/profileSidebar.svg";

function Welcome({
  userName = "Uday",
  message = "Here's your property journey at a glance.",
  progress = "We're excited to have you back! Here's a quick glance at your progress.",
}) {
  return (
    <div className="px-4 sm:px-10 mt-6 text-left flex flex-col sm:flex-row items-center sm:items-start">
      <div className="sm:w-2/3">
        <div className="font-semibold text-lg text-center sm:text-left">
          Hello, {userName}! {message}
        </div>
        <p className="text-gray-500 text-sm text-center sm:text-left mt-2">
          {progress}
        </p>
      </div>
      <img
        src={ProfilePicture}
        alt="Profile"
        className="mt-4 sm:mt-0 sm:ml-auto w-16 h-16 sm:w-10 sm:h-12 object-contain cursor-pointer"
      />
    </div>
  );
}

export default Welcome;
