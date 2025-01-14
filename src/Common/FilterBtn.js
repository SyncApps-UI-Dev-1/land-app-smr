import FilterIcon from "../Property_Listing/Components/images/filterIcon.svg";
function FilterBtn() {
  return (
    <button className="px-4 py-1 border border-gray-300 rounded-lg flex items-center gap-3">
      <img src={FilterIcon} alt="Filter Icon" className="w-4 h-4" />
      <span className="mr-3">Filter</span>
    </button>
  );
}

export default FilterBtn;
