import React, { useState } from "react";
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
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
  buttons = ["View all", "Monitored", "Shortlisted"],
  className,
  tableHeaders = [
    "Property Name",
    "Owner Name",
    "Inquiry Date",
    "Price",
    "Location",
    "Next Action",
  ],
  tableData = Array(30).fill(
    {
      propertyName: "Janapriya Ventures",
      ownerName: "Arun",
      inquiryDate: "22 Jan 2025",
      price: "1.0 CR",
      location: "Shamshabad, Hyderabad",
      nextAction: "Schedule Visit",
    },
    {
      propertyName: "Janapriya Ventures",
      ownerName: "Arun",
      inquiryDate: "22 Jan 2025",
      price: "1.0 CR",
      location: "Shamshabad, Hyderabad",
      nextAction: "Schedule Visit",
    }
  ),
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Paginate table data based on current page
  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return tableData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="px-6">
      <div className="border border-gray-300 rounded-md mt-6 p-4 max-w-[98%] mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center">
            <div className="text-black font-semibold">{title}</div>
            <div className="flex ml-auto gap-2">
              <Button className="ml-auto mb-4 md:mb-0 mt-2 md:mt-0 gap-1 p-2 border border-gray-300 rounded-md items-center">
                <img src={Report} alt="Report" className="w-4 h-4" />
                <span className="text-sm">Report</span>
              </Button>
            </div>
          </div>
          <div className={`text-gray-300 -mt-2 text-sm ${className}`}>
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
            <SearchInput
              className="w-full md:w-[300px]"
              py="py-1.5"
              rounded="rounded-md"
            />
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
        <table className="w-full table-auto border-collapse mt-4">
          <thead className="bg-gray-100 w-screen">
            <tr>
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="py-2 px-2 text-center text-black font-medium border-b border-gray-200"
                >
                  {header}
                </th>
              ))}
              <th className="py-2 px-2 text-black font-medium text-left border-b border-gray-200">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {paginateData().map((row, index) => (
              <tr key={index} className="border-b border-gray-200 text-center">
                {/* Property Name */}
                <td className="py-3 px-2">
                  {/* <input type="checkbox" className="mr-2" /> */}
                  {row.propertyName}
                </td>

                {/* Owner Name */}
                <td className="py-3 px-2 hidden md:table-cell">
                  {row.ownerName}
                </td>

                {/* Inquiry Date */}
                <td className="py-3 px-2 hidden md:table-cell">
                  {row.inquiryDate}
                </td>

                {/* Price */}
                <td className="py-3 px-2 hidden md:table-cell">{row.price}</td>

                {/* Location */}
                <td className="py-3 px-4 hidden md:table-cell">
                  {row.location}
                </td>

                {/* Next Action */}
                <td className="py-3 px-4">
                  <span className="text-black text-xs font-medium">
                    {row.nextAction}
                  </span>
                </td>

                {/* Status */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 ${
                        row.nextAction === "Active"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      } rounded-full`}
                    ></div>
                    <span className="text-black text-xs font-medium">
                      {row.nextAction === "Active" ? "Active" : "Pending"}
                    </span>
                  </div>
                </td>

                {/* Actions (Edit/Delete) */}
                <td className="py-3 px-4 flex gap-2">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <PaginationReusable
          bgColor="bg-white"
          prevIcon={prevIcon}
          NextIcon={NextIcon}
          border="border border-gray-400"
          className="w-4 h-4 flex justify-center items-center cursor-pointer"
          py="py-4"
          px="px-6"
          onPageChange={handlePageChange} // Pass the page change handler to PaginationReusable
          currentPage={currentPage} // Pass the current page
          totalDataLength={tableData.length} // Pass your data length here
        />
      </div>
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
