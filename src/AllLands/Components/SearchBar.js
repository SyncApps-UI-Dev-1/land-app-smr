import Button from "../common/Button";
import SearchInput from "../common/SearchInput";
import filterIcon from "./images/filterIcon.svg";

function SearchBar() {
  return (
    <div className="px-4 md:px-20">
      {/* Search Bar Container */}
      <div className="flex flex-col md:flex-row items-center gap-2 w-full">
        {/* Search Input */}
        <SearchInput className="flex-1 w-full md:w-auto" />

        {/* Medium and above screens: Show Clear and Search buttons in one line */}
        <div className="hidden md:flex gap-2">
          <Button paddingY="2" paddingX="4">
            Clear
          </Button>
          <Button bg="bg-black" text="text-white" paddingY="2" paddingX="4">
            Search
          </Button>
        </div>
      </div>

      {/* Mobile View: Clear, Search, and More Filters Buttons */}
      <div className="md:hidden flex flex-col items-center mt-4 gap-4 w-full">
        {/* Clear and Search Buttons */}
        <div className="flex flex-col items-center gap-2 w-full">
          <Button className="w-full max-w-xs" paddingX="4" paddingY="2">
            Clear
          </Button>
          <Button
            className="w-full max-w-xs"
            bg="bg-black"
            text="text-white"
            paddingX="4"
            paddingY="2"
          >
            Search
          </Button>
        </div>
        {/* More Filters Button */}
        <Button className="w-full max-w-sm" paddingX="4" paddingY="2">
          <span className="flex gap-2 items-center justify-center w-full">
            <img src={filterIcon} alt="Filter Icon" className="w-4 h-4" />
            More Filters
          </span>
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
