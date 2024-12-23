import React from "react";

const Filters = () => {
  return (
    <div className="w-1/4 p-6 bg-white border-r border-gray-300 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Filters</h3>
      
      <button className="mb-6 px-5 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
        Clear All
      </button>
      
      <div className="space-y-6">
        {/* Property Type */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-600">Property Type</label>
          <select className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Apartment</option>
            <option>Builder Floor</option>
            <option>Independent House</option>
            <option>Villa</option>
            <option>1Rk/Studio House</option>
          </select>
        </div>

        {/* Property Condition */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-600">Property Condition</label>
          <select className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Ready to Move</option>
            <option>Under Construction</option>
          </select>
        </div>

        {/* BHK Type */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-600">BHK Type</label>
          <select className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>4 BHK</option>
            <option>5 BHK</option>
            <option>5+ BHK</option>
          </select>
        </div>

        {/* Budget */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-600">Budget</label>
          <div className="flex space-x-3">
            <input
              type="number"
              placeholder="Min"
              className="border border-gray-300 rounded-lg p-3 text-gray-700 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Max"
              className="border border-gray-300 rounded-lg p-3 text-gray-700 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Area (Sq.ft) */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-600">Area (Sq.ft)</label>
          <div className="flex space-x-3">
            <input
              type="number"
              placeholder="Min"
              className="border border-gray-300 rounded-lg p-3 text-gray-700 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Max"
              className="border border-gray-300 rounded-lg p-3 text-gray-700 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Furnish Type */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-600">Furnish Type</label>
          <select className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Unfurnished</option>
            <option>Semi Furnished</option>
            <option>Fully Furnished</option>
          </select>
        </div>

        {/* Facing */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-600">Facing</label>
          <select className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
            <option>North East</option>
            <option>North West</option>
            <option>South East</option>
            <option>South West</option>
          </select>
        </div>

        {/* Posted By */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-600">Posted by</label>
          <select className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Owner</option>
            <option>Dealer</option>
            <option>Builder</option>
          </select>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="mt-8 space-y-4">
        <label className="flex items-center space-x-3 text-sm text-gray-700">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 focus:ring-blue-500" />
          <span>View only properties with images</span>
        </label>
        <label className="flex items-center space-x-3 text-sm text-gray-700">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 focus:ring-blue-500" />
          <span>View only hot deals properties</span>
        </label>
      </div>
    </div>
  );
};

export default Filters;
