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
      Location: "Medak, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Medak, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Medak, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Medak, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Medak, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Medak, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Medak, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Medak, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Medak, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Medak, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Medak, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Warangal, Hyderabad",
      Status: "featured",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Warangal, Hyderabad",
      Status: "featured",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Warangal, Hyderabad",
      Status: "featured",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Warangal, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya ",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Warangal, Hyderabad",
      Status: "featured",
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
    <div className="px-4 md:px-8">
      <div className="border border-gray-300 rounded-md mt-6 p-4 max-w-[98%] mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center">
            <div className="text-black font-semibold text-base md:text-lg">
              {title}
            </div>
            <div className="flex ml-auto gap-2">
              <Button
                className="ml-auto mb-4 md:mb-0 mt-2 md:mt-0 gap-1 p-2 border border-gray-300 rounded-md items-center"
                onClick={handleBulkUploadClick}
              >
                <img src={BulkUpload} alt="Bulk Upload" className="w-4 h-4" />
                <span className="text-sm hidden md:block">Bulk Upload</span>
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className={`text-gray-400 mt-2 text-sm ${className}`}>
            {description}
          </div>
        </div>
        <div className="w-full border border-gray-300 mt-4"></div>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <div className="flex flex-wrap">
            {buttons.map((button, index) => (
              <Button
                key={index}
                border="border border-gray-300"
                className={`py-1 px-3 text-sm ${
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
          <div className="flex items-center ml-auto gap-2 w-full md:w-auto">
            <SearchInput className="w-full md:w-[300px]" py="py-1.5" />
            <Button
              border="border border-gray-300"
              className="flex gap-2 p-2 rounded-md items-center"
            >
              <img src={FilterIcon} alt="Filter" className="w-4 h-4" />
              <span className="text-xs md:text-sm hidden md:block">Filter</span>
            </Button>
          </div>
        </div>
        <div className="w-full border mt-3 md:mt-4 border-gray-300"></div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border-spacing-0 mt-4">
            <thead>
              <tr className="border-b border-gray-200">
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="text-left text-black font-medium px-2 py-3"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginateData().map((row, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <div>{row.propertyName}</div>
                    </div>
                  </td>
                  <td className="px-2 py-3">{row.PublishedDate}</td>
                  <td className="px-2 py-3">{row.Price}</td>
                  <td className="px-2 py-3">{row.Views}</td>
                  <td className="px-2 py-3">{row.Leads}</td>
                  <td className="px-2 py-3">{row.Location}</td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-2 border border-gray-300 px-1 rounded-md w-[110px]">
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
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex gap-2">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
        totalDataLength={tableData.length} // Pass your data length here
        itemsPerPage={itemsPerPage}
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
