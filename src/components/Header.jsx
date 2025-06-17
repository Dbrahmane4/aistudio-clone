import React from 'react';
import { MdKey } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#f8faff] shadow-sm">
      {/* Logo Section */}
      <div className="text-xl font-normal text-gray-800">
        <span className="font-semibold text-[#001946] text-2xl">Google</span>{' '}
        AI Studio
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-sm text-gray-700">
        {/* API Key Button */}
        <button className="flex items-center gap-2 px-4 py-1 bg-[#e3e8f8] hover:bg-[#dbe3ff] text-black rounded-full text-sm font-medium">
          <MdKey size={16} />
          Get API key
        </button>

        {/* Navigation Links */}
        <nav className="flex items-center gap-4">
          <span className="font-bold">Studio</span>
          <span>Dashboard</span>
          <a
            href="#"
            className="flex items-center gap-1 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 3h7m0 0v7m0-7L10 14"
              />
            </svg>
          </a>
        </nav>

        {/* Settings Icon */}
        <button className="hover:text-black">
          <FiSettings size={18} />
        </button>

        {/* Profile Circle */}
        <div className="w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-medium">
          D
        </div>
      </div>
    </header>
  );
}

export default Header;
