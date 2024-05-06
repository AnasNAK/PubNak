import React, { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  setSelectedOption: (option: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedOption }) => {
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M4 5h12a1 1 0 010 2H4a1 1 0 110-2zm0 5h12a1 1 0 010 2H4a1 1 0 010-2zm0 5h12a1 1 0 010 2H4a1 1 0 010-2z"
                />
              </svg>
            </button>
            <Link href="/Posts" className="flex ms-2 md:me-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">PubNak</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Render menu if isMenuOpen is true */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 z-50 w-full bg-white shadow-md rounded-md">
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100"
                onClick={() => handleOptionClick('Posts')}
              >
                <svg
                  className="w-6 h-6 mr-2"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 0h14a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V2a2 2 0 012-2zm1 7h12v1H7V7zm0 5h12v1H7v-1zm0 5h12v1H7v-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Posts
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100"
                onClick={() => handleOptionClick('profile')}
              >
                <svg
                  className="w-6 h-6 mr-2"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
                    clipRule="evenodd"
                  />
                </svg>
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100">
                <svg
                  className="w-6 h-6 mr-2"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                Log out
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
