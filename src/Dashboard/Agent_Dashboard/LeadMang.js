import DotsImg from "../../Agent_Profile/images/dots.svg";
import DashboardCalendar from "./DashboardCalendar";
import PenIcon from "../../Agent_Profile/images/pen.svg";
function LeadMang() {
  return (
    <div className="px-10 mt-6">
      <div className="flex">
        <div className="font-semibold">Lead Management</div>
        <img src={DotsImg} alt="Lead Management" className="w-4 h-4 ml-auto" />
      </div>
      <div className="w-full border-b border-x-gray-300 mt-3"></div>
      <div className="flex gap-4 mt-4">
        <div className="border borer-gray-300 rounded-lg p-4 mt-4">
          <div className="flex w-[450px]">
            <DashboardCalendar />
            <div className="flex flex-col -ml-3">
              <span>Appointment with Ravi Kumar</span>
              <span>6th Dec 4:00 PM</span>
            </div>
          </div>
        </div>
        <div className="border borer-gray-300 rounded-lg p-4 mt-4">
          <div className="flex w-[450px] gap-4">
            <div className="px-4  py-3 border border-gray-300 rounded-lg">
              <img src={PenIcon} alt={PenIcon} />
            </div>
            <div className="flex flex-col">
              <span>Follow-Up with Mohan Reddy</span>
              <span>6th Dec 4:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadMang;
