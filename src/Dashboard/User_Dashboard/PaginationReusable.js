// import prevIcon from "../../Agent_Profile/images/LeftArrow.svg";
import NextIcon from "../../Agent_Profile/images/right-arrow.svg";
function PaginationReusable({
  bgColor,
  border,
  prevIcon = null, // Default to null (no icon)
  nextIcon = null, // Default to null (no icon)
  className,
  py = "py-2",
  px = "px-4",
}) {
  return (
    <div className="flex cursor-pointer flex-col md:flex-row justify-between items-center mt-4 md:gap-70 gap-4">
      {/* Previous Button */}
      <button
        disabled
        className={`${px} ${className} ${bgColor} ${border} ${py} rounded-md w-[100px]`}
      >
        {prevIcon && <img src={prevIcon} alt={prevIcon} />}
        <span>Previous</span>
      </button>

      {/* Current Tab */}
      <div className="flex gap-1 flex-wrap justify-center">
        <span className={`px-3 py-2 rounded-md border border-gray-400`}>1</span>
        <span className="px-3 py-2 rounded-md border border-gray-400 text-black">
          2
        </span>
        <span className="px-3 py-2 rounded-md border border-gray-400 text-black">
          3
        </span>
        <span className="px-3 py-2 rounded-md border border-gray-400 text-black">
          4
        </span>
        <span className="px-3 py-2 rounded-md border border-gray-400 text-black">
          5
        </span>
      </div>

      {/* Next Button */}
      <button
        className={`${px} ${py} ${className} gap-1 ${bgColor} ${border} ${py} rounded-md w-[100px]`}
      >
        <span> Next</span>
        {NextIcon && (
          <img src={NextIcon} alt={NextIcon} className="w-4 h-4 mt-1" />
        )}
      </button>
    </div>
  );
}

export default PaginationReusable;
