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
    <div className="flex md:flex-row flex-col items-center gap-4 sm:gap-2 mt-6">
      {/* Search Input */}
      <SearchInput
        placeholder="Default"
        placeholderColor={placeholderColor} // Passing placeholderColor to SearchInput
        showIcon={false}
        py="py-2"
        width="w-full"
        className="placeholder-black w-full" // Adjust width for responsiveness
      />
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
