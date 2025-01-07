function MoreDetails() {
  return (
    <div className="mt-6 mx-4 md:mx-20">
      {/* More Details Text */}
      <h2 className="text-xl font-bold text-gray-800">More Details</h2>

      {/* Flex Container for Links */}
      <div className="flex space-x-6 mt-4">
        <a
          href="#basic-details"
          className="text-gray-500 font-semibold hover:underline"
        >
          Basic Details
        </a>
        <a
          href="#documents"
          className="text-gray-500 font-semibold hover:underline"
        >
          Documents
        </a>
        <a
          href="#pricing"
          className="text-gray-500 font-semibold hover:underline"
        >
          Pricing & Other
        </a>
        <a
          href="#owner-details"
          className="text-gray-500 font-semibold hover:underline"
        >
          Owner Details
        </a>
      </div>

      {/* More Details Content */}
      <div className="p-6 bg-customGray border border-gray-300 rounded-md">
        {/* Flex container with responsive styles */}
        <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 text-end">
          {/* Price and details container */}
          <div className="flex flex-col sm:w-[260px] text-start">
            <div>Price Details</div>
            <div>Address</div>
            <div>Distance From ORR</div>
            <div>Direction</div>
            <div>Loan Offered</div>
          </div>

          <div className="flex flex-col sm:w-[600px] text-start">
            <div>Rs 1.2 CR</div>
            <div>Premium 2-Acre Land Near Shamshabad Airport</div>
            <div>16 KM</div>
            <div>Shankarpally road, Chevella highway</div>
            <div>Estimated EMI: ₹67652</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreDetails;
