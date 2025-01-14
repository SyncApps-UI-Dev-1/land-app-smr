import Button from "../../Common/Button";
import CalendarDropdown from "../../Common/Calenderdropdown";
import SearchInput from "../../Common/SearchInput";
import filterIcon from "../../Property_Listing/Components/images/filterIcon.svg";

function FilterDashboard({
  showIcon,
  placeholder,
  className,
  placeholderColor,
  setInputValue,
  inputValue,
  border,
}) {
  return (
    <div className="flex flex-col items-center sm:flex-row px-4 sm:px-10 gap-4 sm:gap-2 mt-6">
      {/* Search Input */}
      <SearchInput
        placeholder="Default"
        placeholderColor={placeholderColor} // Passing placeholderColor to SearchInput
        showIcon={false}
        py="py-2"
        className="placeholder-black w-full sm:w-[550px]" // Adjust width for responsiveness
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <CalendarDropdown />
      <Button
        border="border border-gray-300"
        rounded="rounded-lg"
        px="px-4"
        py="py-1"
        flex="flex items-center"
        gap="gap-3"
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
