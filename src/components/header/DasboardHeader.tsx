import { useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="border border-gray-300 flex items-center justify-between p-4 relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="/path-to-logo.png" alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Search Input */}
      <div className="hidden md:flex flex-1 mx-4">
        <input
          type="text"
          placeholder="Search by name or service"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Section */}
      <div className="relative">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            src="/path-to-user-icon.png"
            alt="User Icon"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-gray-700 font-medium">Username</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Personal Info
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Security Changes
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Payment
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Terms and Privacy
              </li>
              <li className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer">
                Log Out
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-stretch gap-2 mt-2 px-4">
        <input
          type="text"
          placeholder="Search by name or service"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Header;
