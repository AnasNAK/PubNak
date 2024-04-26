import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LogoImage from '../../../../public/images/logo-filerouge-white 1.png';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] py-4 bg-opacity-50 backdrop-filter backdrop-blur-lg transition duration-500 ${scrollY > 0 ? 'bg-white' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto md:grid md:grid-cols-3 flex items-center  justify-between font-bold px-4 md:px-2 relative">
        <div className="md:w-auto w-1/3 col-span-1">
          <img src={LogoImage.src} alt="Logo" className="h-8" />
        </div>
        <nav
          className={`${isMenuOpen ? 'block' : 'hidden'
            } md:col-span-2 md:justify-between md:flex md:items-center md:w-auto w-full md:h-auto md:bg-transparent bg-white absolute left-0 top-16 md:static md:shadow-none shadow-lg`}
        >
          <div className="flex flex-col  md:flex-row md:space-x-6 space-y-4 md:space-y-0 md:py-0 py-4">
            <Link
              href="/"
              className="text-gray-300 hover:text-gray-400 md:inline-block md:mt-0 mt-4"
            >
              HOME
            </Link>
            <Link
              href="/About"
              className="text-gray-300 hover:text-gray-400 md:inline-block md:mt-0 mt-4"
            >
              ABOUT
            </Link>
            <Link
              href="/Contact"
              className="text-gray-300 hover:text-gray-400 md:inline-block md:mt-0 mt-4"
            >
              CONTACT US
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 ml-8 space-y-4 md:space-y-0 md:py-0 py-4">
            <Link
              href="/Login"
              className="text-gray-300 hover:text-gray-400 md:inline-block md:mt-0 mt-4"
            >
              LOGIN
            </Link>
            <Link
              href="/Register"
              className="text-gray-300 hover:text-gray-400 md:inline-block md:mt-0 mt-4"
            >
              REGISTER
            </Link>
          </div>
        </nav>
        <button
          className="block md:hidden ml-auto focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;