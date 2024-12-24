'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import PropertyCard from './PropertyCard'
import properties from '../../data/properties'

const filters = [
  {
    id: 'type',
    name: 'Property Type',
    options: [
      { value: 'Apartment', label: 'Apartment' },
      { value: 'Villa', label: 'Villa' },
      { value: 'Independent House', label: 'Independent House' },
    ],
  },
  {
    id: 'features',
    name: 'Features',
    options: [
      { value: 'Ready To Move', label: 'Ready To Move' },
      { value: 'Less than a year old', label: 'Less than a year old' },
      { value: 'Semi Furnished', label: 'Semi Furnished' },
    ],
  },
  {
    id: 'tags',
    name: 'Tags',
    options: [
      { value: 'Luxury', label: 'Luxury' },
      { value: 'Spacious', label: 'Spacious' },
    ],
  },
  {
    id: 'agent',
    name: 'Agent',
    options: [
      { value: 'Praveen Sharma', label: 'Praveen Sharma' },
      { value: 'Ravi Kumar', label: 'Ravi Kumar' },
    ],
  },
  {
    id: 'city',
    name: 'City',
    options: [
      { value: 'New York', label: 'New York' },
      { value: 'Los Angeles', label: 'Los Angeles' },
      { value: 'Chicago', label: 'Chicago' },
    ],
  },
  {
    id: 'priceRange',
    name: 'Price Range',
    options: [
      { value: '<500K', label: '< $500K' },
      { value: '500K-1M', label: '$500K - $1M' },
      { value: '>1M', label: '> $1M' },
    ],
  },
  {
    id: 'bedrooms',
    name: 'Bedrooms',
    options: [
      { value: '1', label: '1 BHK' },
      { value: '2', label: '2 BHK' },
      { value: '3', label: '3 BHK' },
      { value: '4+', label: '4+ BHK' },
    ],
  },
  {
    id: 'area',
    name: 'Area (sq ft)',
    options: [
      { value: '<1000', label: '< 1000 sq ft' },
      { value: '1000-2000', label: '1000 - 2000 sq ft' },
      { value: '>2000', label: '> 2000 sq ft' },
    ],
  },
]

const sortOptions = [
  { name: 'Newest First', value: 'Newest First' },
  { name: 'Price: Low to High', value: 'Price Low to High' },
  { name: 'Price: High to Low', value: 'Price High to Low' },
]

export default function Filters() {
  const [selectedFilters, setSelectedFilters] = useState({})
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [sortOption, setSortOption] = useState('Newest First')

  const handleFilterChange = (sectionId, optionValue, isChecked) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters }

      if (isChecked) {
        updatedFilters[sectionId] = [...(updatedFilters[sectionId] || []), optionValue]
      } else {
        updatedFilters[sectionId] = (updatedFilters[sectionId] || []).filter(
          (val) => val !== optionValue
        )
        if (updatedFilters[sectionId].length === 0) delete updatedFilters[sectionId]
      }

      return updatedFilters
    })
  }

  const handleRangeChange = (sectionId, minValue, maxValue) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters }

      updatedFilters[sectionId] = { min: minValue, max: maxValue }

      return updatedFilters
    })
  }

  const clearFilters = () => {
    setSelectedFilters({})
  }

  useEffect(() => {
    let filtered = properties

    // Apply filters
    Object.keys(selectedFilters).forEach((key) => {
      const filterValues = selectedFilters[key]
      if (filterValues?.length) {
        filtered = filtered.filter((property) => {
          if (key === 'features' || key === 'tags') {
            return filterValues.every((val) => property[key]?.includes(val))
          }
          if (key === 'priceRange') {
            const price = parseInt(property.price.replace(/[^0-9]/g, ''), 10)
            return filterValues.some((range) => {
              if (range === '<500K') return price < 500000
              if (range === '500K-1M') return price >= 500000 && price <= 1000000
              if (range === '>1M') return price > 1000000
            })
          }
          if (key === 'bedrooms') {
            return filterValues.some((val) =>
              val === '4+' ? property[key] >= 4 : property[key] === parseInt(val, 10)
            )
          }
          if (key === 'area') {
            const area = property.area // Assuming 'area' is in sq ft
            return filterValues.some((range) => {
              if (range === '<1000') return area < 1000
              if (range === '1000-2000') return area >= 1000 && area <= 2000
              if (range === '>2000') return area > 2000
            })
          }
          return filterValues.includes(property[key])
        })
      } else if (key === 'priceRange' && filterValues.min && filterValues.max) {
        const price = parseInt(property.price.replace(/[^0-9]/g, ''), 10)
        // Correct filtering based on the min and max range
        if (price < filterValues.min || price > filterValues.max) {
          filtered = filtered.filter(() => false) // Adjust logic for price range filtering
        }
      }
    })

    // Apply sorting
    if (sortOption === 'Price Low to High') {
      filtered = filtered.slice().sort(
        (a, b) =>
          parseInt(a.price.replace(/[^0-9]/g, ''), 10) -
          parseInt(b.price.replace(/[^0-9]/g, ''), 10)
      )
    } else if (sortOption === 'Price High to Low') {
      filtered = filtered.slice().sort(
        (a, b) =>
          parseInt(b.price.replace(/[^0-9]/g, ''), 10) -
          parseInt(a.price.replace(/[^0-9]/g, ''), 10)
      )
    }

    setFilteredProperties(filtered)
  }, [selectedFilters, sortOption])

  return (
    <div className="bg-40">
      <main className="mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">Properties</h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block w-full p-6 bg-white border-r border-gray-300 shadow-xl rounded-lg max-h-fit">
              <div className="flex items-center justify-between">
                <h1>Filters</h1>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              </div>

              {filters.map((section) => (
                <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <svg
                            className="w-4 h-4 transform group-open:rotate-180 transition-transform"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </DisclosureButton>
                    </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      {section.id === 'priceRange' || section.id === 'area' ? (
                        <>
                          <div className="flex gap-3">
                            <input
                              type="number"
                              placeholder={`Min ${section.name}`}
                              onChange={(e) =>
                                handleRangeChange(section.id, e.target.value, selectedFilters[section.id]?.max || '')
                              }
                              value={selectedFilters[section.id]?.min || ''}
                              className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                            <input
                              type="number"
                              placeholder={`Max ${section.name}`}
                              onChange={(e) =>
                                handleRangeChange(section.id, selectedFilters[section.id]?.min || '', e.target.value)
                              }
                              value={selectedFilters[section.id]?.max || ''}
                              className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                        </>
                      ) : (
                        section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`${section.id}-${option.value}`}
                              name={section.id}
                              type="checkbox"
                              onChange={(e) =>
                                handleFilterChange(section.id, option.value, e.target.checked)
                              }
                              checked={
                                selectedFilters[section.id]?.includes(option.value) || false
                              }
                              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                            <label
                              htmlFor={`${section.id}-${option.value}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))
                      )}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            {/* Property List */}
            <div className="lg:col-span-3">
              <div className="flex justify-between mb-4">
                <h1 className="text-lg font-medium">Properties</h1>
                <div className="relative inline-block text-left">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="block w-48 py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-all appearance-none"
                  >
                    {sortOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>

                  {/* Custom Dropdown Arrow */}
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.04 1.08l-4 3.6a.75.75 0 01-1.04 0l-4-3.6a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

              </div>

              <div className="space-y-4">
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                  ))
                ) : (
                  <p className="text-gray-500">
                    No properties match the selected filters. Try adjusting your filters.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
