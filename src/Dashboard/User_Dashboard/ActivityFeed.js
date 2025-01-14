import DotsSvg from "../../Agent_Profile/images/dots.svg";
import TopRightArrowRed from "../../Agent_Profile/images/arrow-upper-right-Red.svg";
import TopRightArrowGreen from "../../Agent_Profile/images/arrow-upper-right-green.svg";

// Define default data
const defaultData = [
  {
    title: "Saved Properties",
    count: 13,
    percentage: "10%",
    arrow: TopRightArrowGreen,
  },
  {
    title: "My Investments",
    count: 4,
    percentage: "12%",
    arrow: TopRightArrowGreen,
  },
  {
    title: "Recent Searches",
    count: 9,
    percentage: "2%",
    arrow: TopRightArrowRed,
  },
  {
    title: "Saved Properties",
    count: 4,
    percentage: "2%",
    arrow: TopRightArrowRed,
  },
];

// Create a reusable component for the boxes
function ActivityBox({ title, count, percentage, arrow }) {
  return (
    <div className="flex flex-col shadow-md gap-5 p-4 rounded-lg border border-gray-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-12px)]">
      <div className="flex items-center justify-between">
        <div className="text-gray-600 font-semibold">{title}</div>
        <img src={DotsSvg} alt="dots icon" className="w-4 h-4" />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-black text-3xl -mt-4 font-semibold">{count}</div>
        <div className="flex items-center px-2 gap-2 rounded-md border-2 border-gray-300">
          <img src={arrow} alt="arrow icon" className="w-2 h-2" />
          <div>{percentage}</div>
        </div>
      </div>
    </div>
  );
}

function ActivityFeed({ data = defaultData }) {
  return (
    <div className="flex flex-wrap gap-4 px-4 sm:px-10 mt-6">
      {data.map((item, index) => (
        <ActivityBox
          key={index}
          title={item.title}
          count={item.count}
          percentage={item.percentage}
          arrow={item.arrow}
        />
      ))}
    </div>
  );
}

export default ActivityFeed;
