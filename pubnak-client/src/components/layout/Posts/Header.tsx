import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/offers">Offers</Link>
            </li>
            {/* Add more navigation links */}
          </ul>
        </nav>
        <div>
          <input
            type="text"
            placeholder="Search for influencers"
            className="bg-gray-700 px-4 py-2 rounded-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;