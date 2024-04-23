import React from 'react';
import Link from 'next/link';
import { FaSearch, FaBell, FaCog, FaUserCircle } from 'react-icons/fa';

interface HeaderProps {
  title: string;
}

const SideBar: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between fixed  w-full z-10 ">
      <Link href="/" className="text-xl font-bold">
        {title}
      </Link>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search for influencers"
          className="bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none"
        />
        <FaSearch className="text-gray-400" />
        <FaBell className="text-gray-400" />
        <FaCog className="text-gray-400" />
        <FaUserCircle className="text-gray-400" />
      </div>
    </div>
  );
};

export default SideBar;