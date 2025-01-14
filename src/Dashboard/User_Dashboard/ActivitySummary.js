import React from "react";
import PropTypes from "prop-types";
import Button from "../../Common/Button";
import Report from "../../Agent_Profile/images/Report.svg";
import SearchInput from "../../Common/SearchInput";
import FilterIcon from "../../Agent_Profile/images/../../Property_Listing/Components/images/filterIcon.svg";
import DeleteIcon from "../../Agent_Profile/images/Delete.svg";
import EditIcon from "../../Agent_Profile/images/edit.svg";
import PaginationReusable from "./PaginationReusable";
import prevIcon from "../../Agent_Profile/images/LeftArrow.svg";
import NextIcon from "../../Agent_Profile/images/right-arrow.svg";

function ActivitySummary({
  title = "Activity Summary",
  description = "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
  buttons = ["View all", "Monitored", "Shortlisted"],
  showReport = true,
  className,

  tableHeaders = [
    "Property Name",
    "Owner Name",
    "Inquiry Date",
    "Price",
    "Location",
    "Next Action",
  ],
  tableData = Array(6).fill({
    propertyName: "Janapriya Ventures",
    ownerName: "Arun",
    inquiryDate: "22 Jan 2025",
    price: "1.0 CR",
    location: "Shamshabad, Hyderabad",
    nextAction: "Schedule Visit",
  }),
}) {
  return (
    <div className="px-5">
      <div className="border border-gray-300 rounded-md mt-6 p-4">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center">
            <div className="text-black font-semibold">{title}</div>
            {showReport && (
              <Button className="ml-auto mb-4 md:mb-0 mt-2 md:mt-0 gap-1 p-2 border border-gray-300 rounded-md items-center">
                <img src={Report} alt="Report" className="w-4 h-4" />
                <span className="text-sm">Report</span>
              </Button>
            )}
          </div>
          <div className={`text-gray-300 -mt-3 text-sm ${className} `}>
            {description}
          </div>
        </div>
        <div className="w-full border border-gray-300 mt-4"></div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex mt-4 mb-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                border="border border-gray-300"
                className={`py-1 px-3 text-sm md:text-base ${
                  index === 0
                    ? "rounded-l-md"
                    : index === buttons.length - 1
                    ? "rounded-r-md"
                    : "rounded-none"
                }`}
              >
                {button}
              </Button>
            ))}
          </div>
          <div className="flex items-center ml-auto gap-3 w-full md:w-auto">
            <SearchInput className="w-full md:w-[300px]" py="py-1.5" />
            <Button
              border="border border-gray-300"
              className="flex  md:gap-2 md:p-2 py-2 gap-1 p-4 rounded-md"
              py="py-1"
            >
              <img src={FilterIcon} alt="Filter" />
              <span className=" md:text-sm text-xs md:mr-0 mr-3">Filter</span>
            </Button>
          </div>
        </div>
        <div className="w-full border mt-3 md:mt-0 border-gray-300"></div>
        {/* Table Header */}
        <div
          className={`hidden ${className} md:flex justify-between border-b border-gray-200 bg-gray-100 p-2 mt-4`}
        >
          <div className="flex gap-3">
            <input type="checkbox" />
            <div>{tableHeaders[0]}</div>
          </div>
          <div className="flex gap-3">
            <div>{tableHeaders[1]}</div>
          </div>
          <div className="flex gap-3 mr-6">
            <div>{tableHeaders[2]}</div>
          </div>
          {/* Move the last 3 headers to the left */}
          <div className="flex gap-16  mr-36">
            <div>{tableHeaders[3]}</div>
            <div>{tableHeaders[4]}</div>
            <div>{tableHeaders[5]}</div>
          </div>
        </div>
        {/* Table Rows */}
        {tableData.map((row, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between border-b border-gray-200 px-2 py-3"
          >
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <div>{row.propertyName}</div>
            </div>
            <div className="hidden md:block">{row.ownerName}</div>
            <div className="hidden md:block -mr-10">{row.inquiryDate}</div>
            <div className="hidden md:block -mr-12">{row.price}</div>
            <div className="hidden md:block -mr-12">{row.location}</div>
            <div className="flex items-center gap-2 mt-2 md:mt-0 -mr-12 border border-gray-300 px-1 rounded-md w-[110px] md:w-[110px]">
              <div
                className={`w-2 h-2 ${
                  row.nextAction === "Active" ? "bg-green-500" : "bg-blue-500"
                } rounded-full`}
              ></div>
              <span className="text-black text-xs font-medium">
                {row.nextAction}
              </span>
            </div>

            <div className="flex gap-2 mt-2 md:mt-0">
              <img
                src={DeleteIcon}
                alt="Delete"
                className="w-4 h-4 cursor-pointer"
              />
              <img
                src={EditIcon}
                alt="Edit"
                className="w-4 h-4 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
      <PaginationReusable
        bgColor="bg-white"
        prevIcon={prevIcon}
        NextIcon={NextIcon}
        border="border border-gray-400"
        className="w-4 h-4 flex justify-center items-center cursor-pointer"
        py="py-4"
        px="px-6"
      />
    </div>
  );
}

ActivitySummary.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.string),
  tableHeaders: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      propertyName: PropTypes.string,
      ownerName: PropTypes.string,
      inquiryDate: PropTypes.string,
      price: PropTypes.string,
      location: PropTypes.string,
      nextAction: PropTypes.string,
    })
  ),
  circleColor: PropTypes.string,
};

export default ActivitySummary;
