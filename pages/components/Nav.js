'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SearchIcon from '@mui/icons-material/Search';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      <nav aria-label="Global" className="mx-auto flex items-center justify-between p-2 lg:px-3">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Your Company</span>
            <img
              alt="HexaHome Logo"
              src="images/HexaLogo.png"
              className="h-8 w-auto"
            />
            <h1 className="ml-2 text-blue-600 font-bold text-lg">HexaHome</h1>
          </a>
        </div>

        {/* Search Bar */}

        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-auto max-w-md lg:max-w-max lg:pl-20">
            {/* Dropdown */}
            <div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 px-4 py-2 flex items-center rounded-l-lg cursor-pointer shadow-sm"
            >
              <span className="text-sm font-semibold">Residential Buy</span>
              <ArrowDropDownIcon className="ml-2 text-gray-500" />
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search for City, locality, area"
              className="w-full px-4 py-2 pl-36 pr-10 border border-gray-300 rounded-lg   "
            />

            {/* Search Icon */}
            <SearchIcon className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500" />
          </div>
        </div>

        {/* Post Property Button */}
        <div className="hidden md:flex items-center justify-end">
          <div className="mr-3 flex p-2 text-blue-400 p-0 border-blue-100 border-2 rounded-3xl bg-blue-50 text-gray-900 hover:shadow-2xl pl-5 pr-5">
            <h1 className="mt-1">Post Property </h1>
            <section className="bg-green-600 ml-2 p-1 text-white rounded-2xl pl-3 pr-3 font-bold text-xs mt-1 mb-1">Free</section>
          </div>
        </div>

        {/* Login Button (fixed) */}
        <div className="hidden md:flex items-center justify-end relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-sm font-semibold text-gray-900"
          >
            Log In
          </button>
          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
              <ul className="py-2 text-sm text-gray-700 text-center content-center">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">My Activity</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Post Property</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Terms & Condition</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Download App</a></li>
                <li>
                  <button
                    onClick={() => setDropdownOpen(false)}  // Add functionality for button if necessary
                    className="w-full text-left block px-4 py-2 hover:bg-gray-100 bg-blue-400 m-2 w-fit rounded-3xl shadow-3xl text-sm text-gray-700 m-auto"
                  >
                    Log In / Sign Up
                  </button>
                </li>
              </ul>

            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="fixed inset-0 z-10">
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Account</h2>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon fontSize="large" />
              </button>
            </div>

            {/* Additional Menu Content */}
            <div className="mt-4">
              {/* Profile Section */}
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-base font-semibold">Hi Guest 👋</p>
                  <p className="text-sm text-gray-500">Seamless experience<br />Login/Register with HexaHome</p>
                </div>
                <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
              </div>

              {/* Menu Options */}
              <div className="space-y-4">
                {[
                  { name: 'My Listing', description: "See Properties you've listed recently" },
                  { name: 'My Leads', description: 'View and edit your recent activity' },
                  { name: 'Blogs', description: 'Checkout our latest blogs on Real estate' },
                  { name: 'Career', description: 'Join our community, become a part of HexaHome' },
                  { name: 'Area Converter', description: 'Land area conversion tool' },
                  { name: 'Bookmark', description: "See the Properties you've Bookmarked" },
                  { name: 'Share Feedback', description: 'Share your feedback about HexaHome' },
                  { name: 'Account Privacy', description: 'Account privacy & Delete account' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <span className="text-gray-500">{'>'}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-4 bg-gray-200 p-5 rounded-lg">
                <p className="text-sm font-semibold">Follow us on</p>
                <div className="flex space-x-4 mt-2 text-gray-700">
                  <FacebookIcon fontSize="large" />
                  <InstagramIcon fontSize="large" />
                  <TwitterIcon fontSize="large" />
                  <LinkedInIcon fontSize="large" />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      )}
    </header>
  )
}
