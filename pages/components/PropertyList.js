import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import properties from "../../data/properties";
const PropertyList = () => {
  const [sortOption, setSortOption] = useState("Newest First");

  // Function to sort properties based on the selected option
  const sortedProperties = () => {
    if (sortOption === "Price Low to High") {
      return [...properties].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^\d]/g, ""), 10); // Extracts numeric value from the price string
        const priceB = parseInt(b.price.replace(/[^\d]/g, ""), 10);
        return priceA - priceB;
      });
    }
    // Default sorting (Newest First)
    return properties;
  };

  // Handle dropdown change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="w-3/4 p-5">
      <h2 className="text-xl font-semibold mb-4">
        Residential Property for Sale in Noida
      </h2>
      <div className="flex justify-between items-center mb-4">
        <label className="text-sm font-medium">Sort by:</label>
        <select
          className="border border-gray-300 rounded p-2"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option>Newest First</option>
          <option>Price Low to High</option>
        </select>
      </div>
      <div className="space-y-4">
        {sortedProperties().map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
