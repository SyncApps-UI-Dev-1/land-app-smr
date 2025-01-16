import React, { useState } from "react";
import PropTypes from "prop-types";
import FilterIcon from "../../../Property_Listing/Components/images/filterIcon.svg";
import DeleteIcon from "../../images/Delete.svg";
import EditIcon from "../../images/edit.svg";
import prevIcon from "../../images/LeftArrow.svg";
import NextIcon from "../../images/right-arrow.svg";
import Button from "../../../Common/Button";
import SearchInput from "../../../Common/SearchInput";
import PaginationReusable from "../../../Dashboard/User_Dashboard/PaginationReusable";

function ActivitySummaryTabs({
  title = "Activity Summary",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
  buttons = ["All History", "Contacted"],
  className,

  tableHeaders = [
    "Investor Name",
    "Property Name",
    "Contacted",
    "Location",
    "Status",
  ],
  tableData = [
    {
      InvestorName: "Charles T",
      PropertyName: "Janapriya Properties",
      Contacted: "Dec 9, 2024, 3 PM",
      Location: "Shamshabad, Hyderabad",
      Status: "Active",
    },
    {
      InvestorName: "Charles T",
      PropertyName: "Janapriya Properties",
      Contacted: "Dec 9, 2024, 3 PM",
      Location: "Shamshabad, Hyderabad",
      Status: "Revisit Appointment",
    },
    {
      InvestorName: "Charles T",
      PropertyName: "Janapriya Properties",
      Contacted: "Dec 9, 2024, 3 PM",
      Location: "Shamshabad, Hyderabad",
      Status: "Revisit Appointment",
    },
    {
      InvestorName: "Charles T",
      PropertyName: "Janapriya Properties",
      Contacted: "Dec 9, 2024, 3 PM",
      Location: "Shamshabad, Hyderabad",
      Status: "Revisit Appointment",
    },
    {
      InvestorName: "Charles T",
      PropertyName: "Janapriya Properties",
      Contacted: "Dec 9, 2024, 3 PM",
      Location: "Shamshabad, Hyderabad",
      Status: "Active",
    },
    {
      InvestorName: "Charles T",
      PropertyName: "Janapriya Properties",
      Contacted: "Dec 9, 2024, 3 PM",
      Location: "Shamshabad, Hyderabad",
      Status: "Active",
    },
    {
      InvestorName: "Charles T",
      PropertyName: "Janapriya Properties",
      Contacted: "Dec 9, 2024, 3 PM",
      Location: "Shamshabad, Hyderabad",
      Status: "Active",
    },
    {
      InvestorName: "Charles T",
      PropertyName: "Janapriya Properties",
      Contacted: "Dec 9, 2024, 3 PM",
      Location: "Shamshabad, Hyderabad",
      Status: "Active",
    },
    {
      InvestorName: "Charles T",
      PropertyName: "Janapriya Properties",
      Contacted: "Dec 9, 2024, 3 PM",
      Location: "Shamshabad, Hyderabad",
      Status: "Active",
    },
  ],
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Multiply tableData by repeating it 3 times to make 6 entries
  // const tableDataExpanded = [...tableData, ...tableData, ...tableData];

  // Paginate table data based on current page
  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return tableData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="px-5">
      <div className="border border-gray-300 rounded-md mt-6 p-4 max-w-[98%] mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center">
            <div className="text-black font-semibold">Search History</div>
          </div>
          <div className={`text-gray-300 -mt-1 text-sm ${className}`}>
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum
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
        <div className="flex flex-col md:flex-row gap-14 border-b border-gray-200 px-2 py-3">
          {tableHeaders.map((header, index) => (
            <div key={index} className="text-black font-medium">
              {header}
            </div>
          ))}
        </div>
        {/* Table Rows */}
        {paginateData().map((row, index) => (
          <div
            key={index}
            className="flex flex-col gap-8 space-x-1 md:flex-row border-b border-gray-200 px-2 py-3"
          >
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <div>{row.InvestorName}</div>
            </div>
            <div className="hidden md:block">{row.PropertyName}</div>
            <div className="hidden md:block">{row.Contacted}</div>
            <div className="hidden md:block">{row.Location}</div>
            <div className=" flex items-center gap-2 mt-2 md:mt-0 -mr-24 border border-gray-300 px-1 rounded-md w-[110px] md:w-[110px]">
              <div
                className={`w-2 h-2 ${
                  row.Status === "Active" ? "bg-green-500" : "bg-blue-500"
                } rounded-full`}
              ></div>
              <span className="text-black text-xs font-medium">
                {row.Status}
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
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

ActivitySummaryTabs.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.string),
  tableHeaders: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      propertyName: PropTypes.string,
      PublishedDate: PropTypes.string,
      Price: PropTypes.string,
      Views: PropTypes.string,
      Leads: PropTypes.string,
      Location: PropTypes.string,
      Status: PropTypes.string,
    })
  ),
  circleColor: PropTypes.string,
};

export default ActivitySummaryTabs;
