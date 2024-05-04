// components/common/Navigation/Navigation.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaInbox, FaCommentAlt, FaUserFriends, FaBriefcase, FaClipboardList, FaTimes } from 'react-icons/fa';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white hover:text-gray-400">
            <FaTimes />
          </button>
        </div>
        <nav className="mt-10 px-6">
          <Link href="/Posts" className="flex items-center space-x-2 py-4 text-white hover:text-green-500">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link href="/Feed" className="flex items-center space-x-2 py-4 text-white hover:text-green-500">
            <FaInbox />
            <span>Feed</span>
          </Link>
          <Link href="/ChatRoom" className="flex items-center space-x-2 py-4 text-white hover:text-green-500">
            <FaCommentAlt />
            <span>Chat</span>
          </Link>
          <Link href="/negotiations" className="flex items-center space-x-2 py-4 text-white hover:text-green-500">
            <FaBriefcase />
            <span className="bg-green-500 text-white px-2 py-1 rounded">Negotiations</span>
          </Link>
          <Link href="/posts" className="flex items-center space-x-2 py-4 text-white hover:text-green-500">
            <FaClipboardList />
            <span>Posts</span>
          </Link>
        </nav>
      </div>
      <button
        onClick={toggleSidebar}
        className={`fixed z-40 bottom-4 right-4 bg-green-500 text-white rounded-full p-3 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Navigation;