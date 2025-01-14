function Pagination({ currentTab, setActiveTab }) {
  const tabsOrder = [
    "profileDetails",
    "postedProperties",
    "history",
    "reviews",
    "locations",
  ];

  // Ensure currentTab is set to "profileDetails" if it's not defined
  const currentIndex =
    tabsOrder.indexOf(currentTab) !== -1 ? tabsOrder.indexOf(currentTab) : 0;
  const totalTabs = tabsOrder.length;

  // Handle next tab
  const handleNextTab = () => {
    if (currentIndex < totalTabs - 1) {
      setActiveTab(tabsOrder[currentIndex + 1]);
    }
  };

  // Handle previous tab
  const handlePrevTab = () => {
    if (currentIndex > 0) {
      setActiveTab(tabsOrder[currentIndex - 1]);
    }
  };

  return (
    <div className="flex cursor-pointer flex-col md:flex-row justify-between items-center mt-12 md:gap-80 gap-4">
      {/* Previous Button */}
      <button
        onClick={handlePrevTab}
        disabled={currentIndex === 0} // Disabled when it's the first tab
        className="px-4 py-2 bg-gray-300 rounded-md w-full md:w-auto text-center"
      >
        Previous
      </button>

      {/* Current Tab */}
      <div className="flex gap-2 flex-wrap justify-center">
        {tabsOrder.map((tab, index) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              currentIndex === index ? "bg-primary px-3 py-2 text-white" : ""
            } px-3 py-2 rounded-md border border-gray-400 text-black`}
          >
            {index + 1}
          </span>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNextTab}
        disabled={currentIndex === totalTabs - 1} // Disabled when it's the last tab
        className="px-4 py-2 bg-gray-300 rounded-md w-full md:w-auto text-center"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
