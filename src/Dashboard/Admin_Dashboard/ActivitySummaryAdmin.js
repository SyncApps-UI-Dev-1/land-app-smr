import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../../Common/Button";
import Report from "../../Agent_Profile/images/Report.svg";
import SearchInput from "../../Common/SearchInput";
import FilterIcon from "../../Agent_Profile/images/../../Property_Listing/Components/images/filterIcon.svg";
import DeleteIcon from "../../Agent_Profile/images/Delete.svg";
import EditIcon from "../../Agent_Profile/images/edit.svg";
import prevIcon from "../../Agent_Profile/images/LeftArrow.svg";
import NextIcon from "../../Agent_Profile/images/right-arrow.svg";
import PaginationReusable from "../User_Dashboard/PaginationReusable";
import BulkUpload from "../../Agent_Profile/images/Upload.svg";

function ActivitySummaryAdmin({
  title = "Activity Summary",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
  buttons = ["View all", "Monitored", "Shortlisted"],
  className,

  tableHeaders = [
    "Property Name",
    "Published Date",
    "Price",
    "Views",
    "Leads",
    "Location",
    "Status",
  ],
  tableData = [
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "22 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "12",
      Location: "Shamshabad, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Shamshabad, Hyderabad",
      Status: "Sold",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Shamshabad, Hyderabad",
      Status: "Under Review",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Shamshabad, Hyderabad",
      Status: "Schedule Visit",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Shamshabad, Hyderabad",
      Status: "Featured",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Shamshabad, Hyderabad",
      Status: "Featured",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Shamshabad, Hyderabad",
      Status: "Featured",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Shamshabad, Hyderabad",
      Status: "Featured",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Shamshabad, Hyderabad",
      Status: "Featured",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Shamshabad, Hyderabad",
      Status: "Featured",
    },
  ],
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page
  const fileInputRef = useRef(null); // Corrected ref initialization

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Paginate table data based on current page
  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return tableData.slice(startIndex, startIndex + itemsPerPage);
  };

  // Handler when a file is selected
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      // Your file upload logic here
    }
  };

  // Trigger the file input click when the Bulk Upload button is clicked
  const handleBulkUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="px-5">
      <div className="border border-gray-300 rounded-md mt-6 p-4 max-w-[98%] mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center">
            <div className="text-black font-semibold">{title}</div>
            <div className="flex ml-auto gap-2">
              <Button
                className="ml-auto mb-4 md:mb-0 mt-2 md:mt-0 gap-1 p-2 border border-gray-300 rounded-md items-center"
                onClick={handleBulkUploadClick}
              >
                <img src={BulkUpload} alt="Report" className="w-4 h-4" />
                <span className="text-sm">Bulk Upload</span>
              </Button>

              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
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
        <div className="flex flex-col md:flex-row gap-14 border-b border-gray-200 px-2 py-3">
          {tableHeaders.map((header, index) => (
            <div key={index} className="text-black font-medium">
              {header}
            </div>
          ))}
        </div>
        {paginateData().map((row, index) => (
          <div
            key={index}
            className="flex flex-col gap-8 space-x-1 md:flex-row border-b border-gray-200 px-2 py-3"
          >
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <div>{row.propertyName}</div>
            </div>
            <div className="hidden md:block">{row.PublishedDate}</div>
            <div className="hidden md:block">{row.Price}</div>
            <div className="hidden md:block">{row.Views}</div>
            <div className="hidden md:block">{row.Leads}</div>
            <div className="hidden md:block">{row.Location}</div>
            <div className="flex items-center gap-2 mt-2 md:mt-0 -mr-24 border border-gray-300 px-1 rounded-md w-[110px] md:w-[110px]">
              <div
                className={`w-2 h-2 ${
                  row.Status === "Active"
                    ? "bg-green-500"
                    : row.Status === "Sold"
                    ? "bg-blue-900"
                    : row.Status === "Under Review"
                    ? "bg-orange-600"
                    : "bg-purple-600"
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

ActivitySummaryAdmin.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
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
};

export default ActivitySummaryAdmin;
