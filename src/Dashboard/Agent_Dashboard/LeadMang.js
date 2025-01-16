import DotsImg from "../../Agent_Profile/images/dots.svg";
import PenIcon from "../../Agent_Profile/images/pen.svg";
import ChevronRightImg from "../../Agent_Profile/images/ChevronRight.svg";
import DashboardCalendar from "./DashboardCalendar";

function LeadCard({ icon, title, dateTime }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 md:w-[440px] w-[340px]">
      <div className="flex gap-4">
        {icon && (
          <div className="px-4 flex justify-center items-center border border-gray-300 rounded-lg">
            <img src={icon} alt={`${title} icon`} className="w-5 h-5" />
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-medium">{title}</span>
          <span className="text-sm text-gray-500">{dateTime}</span>
        </div>
      </div>
    </div>
  );
}

function LeadMang() {
  return (
    <div className="px-10 mt-6">
      {/* Header */}

      <div className="flex items-center">
        <h1 className="font-semibold text-lg">Lead Management</h1>
        <img src={DotsImg} alt="Menu options" className="w-4 h-4 ml-auto" />
      </div>
      <div className="w-full border-b border-gray-300 mt-3"></div>

      {/* Content */}
      <div className="flex md:flex-row flex-col gap-6 mt-4  items-center">
        {/* Appointment Card */}
        <div className="border border-gray-300 rounded-lg p-4 md:w-[440px] w-[340px]">
          <div className="flex relative">
            <DashboardCalendar />
            <div className="flex flex-col absolute ml-20">
              <span className="font-medium">Appointment with Ravi Kumar</span>
              <span className="text-sm text-gray-500">6th Dec 4:00 PM</span>
            </div>
          </div>
        </div>

        {/* Follow-Up Card */}
        <LeadCard
          icon={PenIcon}
          title="Follow-Up with Mohan Reddy"
          dateTime="6th Dec 4:00 PM"
        />

        {/* Chevron Icon */}
        <img
          src={ChevronRightImg}
          alt="Next"
          className="w-4 h-4 md:ml-auto cursor-pointer hover:scale-110 transition-transform"
        />
      </div>
    </div>
  );
}

export default LeadMang;
