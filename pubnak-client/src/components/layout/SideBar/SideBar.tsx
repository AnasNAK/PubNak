import React from 'react';
import Link from 'next/link';
import { FaSearch, FaBell, FaCog, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface HeaderProps {
  title: string;
}

const SideBar: React.FC<HeaderProps> = ({ title }) => {
  const { user, isLoading, error } = useSelector((state: RootState) => state.user);

  const isUserRoleDefined = (obj: any): obj is { role: string } => {
    return typeof obj?.role === 'string';
  };

  const renderUserLink = () => {
    if (isUserRoleDefined(user)) {
      if (user.role === 'Client') {
        return <Link href="/DashClient"><FaUserCircle className="text-gray-400 cursor-pointer" /></Link>;
      } else if (user.role === 'Influencer') {
        return <Link href="/DashInfluencer"><FaUserCircle className="text-gray-400 cursor-pointer" /></Link>;
      }
    }
    return null;
  };

  return (
    <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between fixed  w-full z-10 ">
      <Link href="/Posts" className="text-xl font-bold">
        {title}
      </Link>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-400 cursor-pointer" />
        {renderUserLink()}
      </div>
    </div>
  );
};

export default SideBar;
