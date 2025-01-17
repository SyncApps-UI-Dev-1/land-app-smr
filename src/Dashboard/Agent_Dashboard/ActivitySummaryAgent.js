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

function ActivitySummaryAgent({
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
      Location: "Mehdipatnam, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Mehdipatnam, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Mehdipatnam, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Mehdipatnam, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Mehdipatnam, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Mehdipatnam, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Mehdipatnam, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Mehdipatnam, Hyderabad",
      Status: "Active",
    },
    {
      propertyName: "Janapriya Ventures",
      PublishedDate: "20 Jan 2025",
      Price: "1.0 CR",
      Views: "180",
      Leads: "16",
      Location: "Mehdipatnam, Hyderabad",
      Status: "Active",
    },
  ],
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page
  const fileInputRef = useRef(null);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Paginate table data based on current page
  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return tableData.slice(startIndex, startIndex + itemsPerPage);
  };

  // File upload button functionality
  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
    }
  };

  return (
    <div className="px-5">
      <div className="border border-gray-300 rounded-md mt-6 p-4 max-w-[98%] mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center">
            <div className="text-black font-semibold">{title}</div>
            <div className="flex ml-auto gap-2">
              <Button className="ml-auto mb-4 md:mb-0 mt-2 md:mt-0 gap-1 p-2 border border-gray-300 rounded-md items-center">
                <img src={Report} alt="Report" className="w-4 h-4" />
                <span className="text-sm">Download CSV</span>
              </Button>
              <Button
                bg="primary-600"
                className="ml-auto bg-primary text-white mb-4 md:mb-0 mt-2 md:mt-0 gap-1 p-2 border border-gray-300 rounded-md items-center"
                onClick={handleFileButtonClick}
              >
                <span className="text-sm flex gap-2">
                  <span>+</span>
                  <span>Create New</span>
                </span>
              </Button>
              {/* Hidden file input */}
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
        <table className="w-full mt-3">
          <thead>
            <tr className="text-black font-medium flex md:flex-row flex-col">
              {tableHeaders.map((header, index) => (
                <th key={index} className="py-2 px-5 md:text-center text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginateData().map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 flex md:flex-row flex-col"
              >
                <td className="flex items-center gap-2 py-2 px-4">
                  <input type="checkbox" />
                  {row.propertyName}
                </td>
                <td className="md:table-cell py-2 px-4">{row.PublishedDate}</td>
                <td className=" md:table-cell py-2 px-4">{row.Price}</td>
                <td className=" md:table-cell py-2 px-4">{row.Views}</td>
                <td className=" md:table-cell py-2 px-4">{row.Leads}</td>
                <td className=" md:table-cell py-2 px-4">{row.Location}</td>
                <td className="flex items-center gap-2 py-2 px-4">
                  <div
                    className={`w-2 h-2 ${
                      row.Status === "Active" ? "bg-green-500" : "bg-blue-500"
                    } rounded-full`}
                  ></div>
                  <span className="text-black text-xs font-medium">
                    {row.Status}
                  </span>
                </td>
                <td className="flex gap-2 py-2 px-4">
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
      />
    </div>
  );
}

ActivitySummaryAgent.propTypes = {
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
};

export default ActivitySummaryAgent;
