import Button from "../../Common/Button";
import CalendarDropdown from "../../Common/Calenderdropdown";
import SearchInput from "../../Common/SearchInput";
import filterIcon from "../../Property_Listing/Components/images/filterIcon.svg";

function FilterDashboard({
  showIcon,
  placeholder,
  className,
  placeholderColor,
  border,
}) {
  return (
    <div className="flex md:flex-row flex-col items-center gap-4 sm:gap-2 mt-6 w-full">
      {/* Search Input */}
      <div className="flex flex-1 w-full">
        <button className="border border-gray-300 rounded-l-md p-1 px-3 text-gray-400">
          Default
        </button>
        <SearchInput
          placeholder=""
          placeholderColor={placeholderColor} // Passing placeholderColor to SearchInput
          showIcon={false}
          py="py-2"
          width="w-full"
          rounded="rounded-r-md"
          className="placeholder-black rounded-r-md w-full outline-none" // Adjust width for responsiveness
        />
      </div>
      <CalendarDropdown />
      <Button
        border="border border-gray-300"
        rounded="rounded-lg"
        px="px-4"
        py="py-1"
        gap="gap-1"
      >
        <img
          src={filterIcon}
          alt="Filter Icon"
          className="flex items-center justify-center w-4 h-4"
        />
        <span>Filter</span>
      </Button>
    </div>
  );
}

export default FilterDashboard;
