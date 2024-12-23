import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import properties from "../../data/properties";

import { ChevronDownIcon, FunnelIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const sortOptions = [
  { name: "Most Popular", value: "Most Popular" },
  { name: "Best Rating", value: "Best Rating" },
  { name: "Newest", value: "Newest First" },
  { name: "Price: Low to High", value: "Price Low to High" },
  { name: "Price: High to Low", value: "Price High to Low" },
  { name: "Oldest", value: "Oldest" },
];

const PropertyList = ({ filters }) => {
  const [sortOption, setSortOption] = useState("Newest First");

  // Function to filter and sort properties based on the selected options and filters
  const filteredProperties = () => {
    let filtered = [...properties];

    // Apply filters if they exist (e.g., price range, location, etc.)
    if (filters.location) {
      filtered = filtered.filter(property =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.minPrice && filters.maxPrice) {
      filtered = filtered.filter(property => {
        const price = parseInt(property.price.replace(/[^\d]/g, ""), 10);
        return price >= filters.minPrice && price <= filters.maxPrice;
      });
    }

    return filtered;
  };

  // Function to sort properties based on the selected sort option
  const sortedProperties = () => {
    let sorted = filteredProperties();

    if (sortOption === "Price Low to High") {
      sorted = sorted.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^\d]/g, ""), 10);
        const priceB = parseInt(b.price.replace(/[^\d]/g, ""), 10);
        return priceA - priceB;
      });
    } else if (sortOption === "Price High to Low") {
      sorted = sorted.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^\d]/g, ""), 10);
        const priceB = parseInt(b.price.replace(/[^\d]/g, ""), 10);
        return priceB - priceA;
      });
    }
    // Add more sorting logic here for other options (e.g., Most Popular, Best Rating, etc.)
    return sorted;
  };

  return (
    <div className="p-5 lg:w-full pr-5 ml-5">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-0">
        <h2 className="text-xl font-semibold mb-4">
          Residential Property for Sale in Noida
        </h2>
        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                />
              </MenuButton>
            </div>
            <MenuItems
              className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none"
            >
              <div className="py-1">
                {sortOptions.map((option) => (
                  <MenuItem key={option.value}>
                    {({ active }) => (
                      <button
                        onClick={() => setSortOption(option.value)}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                        )}
                      >
                        {option.name}
                      </button>
                    )}
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
          <button
            type="button"
            className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
          >
            <span className="sr-only">View grid</span>
            <Squares2X2Icon aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
          >
            <span className="sr-only">Filters</span>
            <FunnelIcon aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {sortedProperties().map((property) => (
          <PropertyCard key={property.id} {...property} sortOption={sortOption} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
