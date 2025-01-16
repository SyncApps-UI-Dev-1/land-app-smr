import React from "react";

function PaginationReusable({
  bgColor,
  border,
  prevIcon = null,
  nextIcon = null,
  className,
  py = "py-2",
  px = "px-4",
  onPageChange, // Accept page change handler
  currentPage, // Accept the current page
}) {
  const totalPages = 6; // Example total pages (since we're using same data)

  return (
    <div className="px-3 flex cursor-pointer flex-col md:flex-row justify-between items-center mt-4 md:gap-70 gap-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${px} ${className} ${bgColor} ${border} ${py} rounded-md w-[100px]`}
      >
        {prevIcon && <img src={prevIcon} alt="Previous" />}
        <span>Previous</span>
      </button>

      {/* Current Tab */}
      <div className="flex gap-1 flex-wrap justify-center">
        {[...Array(totalPages)].map((_, index) => (
          <span
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`px-3 py-2 rounded-md border border-gray-400 ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </span>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${px} ${py} ${className} gap-1 ${bgColor} ${border} ${py} rounded-md w-[100px]`}
      >
        <span>Next</span>
        {nextIcon && <img src={nextIcon} alt="Next" className="w-4 h-4 mt-1" />}
      </button>
    </div>
  );
}

export default PaginationReusable;
