'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {  MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import PropertyList from './PropertyList'




const filters = [
  {
    id: 'property-type',
    name: 'Property Type',
    options: [
      { value: 'apartment', label: 'Apartment', checked: false },
      { value: 'builder-floor', label: 'Builder Floor', checked: false },
      { value: 'independent-house', label: 'Independent House', checked: true },
      { value: 'villa', label: 'Villa', checked: false },
      { value: '1rk-studio-house', label: '1RK/Studio House', checked: false },
    ],
  },
  {
    id: 'property-condition',
    name: 'Property Condition',
    options: [
      { value: 'ready-to-move', label: 'Ready to Move', checked: true },
      { value: 'under-construction', label: 'Under Construction', checked: false },
    ],
  },
  {
    id: 'bhk-type',
    name: 'BHK Type',
    options: [
      { value: '1-bhk', label: '1 BHK', checked: false },
      { value: '2-bhk', label: '2 BHK', checked: true },
      { value: '3-bhk', label: '3 BHK', checked: false },
      { value: '4-bhk', label: '4 BHK', checked: false },
      { value: '5-bhk', label: '5 BHK', checked: false },
      { value: '5-plus-bhk', label: '5+ BHK', checked: false },
    ],
  },
  {
    id: 'budget',
    name: 'Budget',
    options: [
      { value: 'under-1000000', label: 'Under 10 Lakhs', checked: false },
      { value: '1000000-3000000', label: '10 Lakhs - 30 Lakhs', checked: false },
      { value: '3000000-5000000', label: '30 Lakhs - 50 Lakhs', checked: true },
      { value: '5000000-10000000', label: '50 Lakhs - 1 Crore', checked: false },
      { value: 'above-10000000', label: 'Above 1 Crore', checked: false },
    ],
  },
  {
    id: 'area',
    name: 'Area (Sq.ft)',
    options: [
      { label: '100', value: '100' },
      { label: '4000', value: '4000' },
    ],
  },
  {
    id: 'furnishType',
    name: 'Furnish Type',
    options: [
      { label: 'Unfurnished', value: 'Unfurnished' },
      { label: 'Semi Furnished', value: 'Semi Furnished' },
      { label: 'Fully Furnished', value: 'Fully Furnished' },
    ],
  },
  {
    id: 'facing',
    name: 'Facing',
    options: [
      { label: 'North', value: 'North' },
      { label: 'South', value: 'South' },
      { label: 'East', value: 'East' },
      { label: 'West', value: 'West' },
      { label: 'North East', value: 'North East' },
      { label: 'North West', value: 'North West' },
      { label: 'South East', value: 'South East' },
      { label: 'South West', value: 'South West' },
    ],
  },
  {
    id: 'postedBy',
    name: 'Posted by',
    options: [
      { label: 'Owner', value: 'Owner' },
      { label: 'Dealer', value: 'Dealer' },
      { label: 'Builder', value: 'Builder' },
    ],
  },

]



export default function Filter() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({})

  // Function to handle checkbox change
  const handleFilterChange = (sectionId, optionValue, isChecked) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev }

      if (isChecked) {
        // Add the selected option to the section
        if (!updatedFilters[sectionId]) {
          updatedFilters[sectionId] = []
        }
        updatedFilters[sectionId].push(optionValue)
      } else {
        // Remove the option from the section
        if (updatedFilters[sectionId]) {
          updatedFilters[sectionId] = updatedFilters[sectionId].filter((val) => val !== optionValue)
          if (updatedFilters[sectionId].length === 0) {
            delete updatedFilters[sectionId]
          }
        }
      }
      return updatedFilters
    })
  }
  return (
    <div className="bg-40">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>


                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto  px-4 sm:px-6 lg:px-8">


          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4  ">
              {/* Filters */}
              <form className="hidden lg:block w-full p-6 bg-white border-r border-gray-300 shadow-xl rounded-lg max-h-fit">
                <div className="flex items-center justify-between ">
                  <h1>Filters</h1>
                  <button
                    type="button"
                    onClick={() => {
                      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                      checkboxes.forEach((checkbox) => {
                        checkbox.checked = false;
                      });
                    }}
                    className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    Clear
                  </button>

                </div>

                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          {/* Downward arrow when closed */}
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
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>



              {/* Product grid */}
              <div className="lg:col-span-3  ">
               
              <PropertyList filters={selectedFilters} /></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
