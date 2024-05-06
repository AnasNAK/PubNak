import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaBell, FaCog, FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { getUser } from '@/features/userSlice';
import Cookies from 'js-cookie';



interface HeaderProps {
  title: string;
}



const SideBar: React.FC<HeaderProps> = ({ title }) => {
  const { user, isLoading, error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const token = Cookies.get('token');



  if (!token) {
    console.log('Token not found in cookie');
  }

  useEffect(() => {

    dispatch(getUser(token));
  }, [dispatch]);

  const isUserRoleDefined = (obj: any): obj is { role: string } => {
    return typeof obj?.role === 'string';
  };

  const renderUserLink = () => {
    if (isUserRoleDefined(user)) {
      if (user.role === 'Client') {
        return <Link href="/DashClient"><FaUserCircle className="text-gray-400 cursor-pointer" /></Link>;
      } else if (user.role === 'Influencer') {
        return <Link href="/DashInfuencer"><FaUserCircle className="text-gray-400 cursor-pointer" /></Link>;
      }
    }
    return null;
  };

  return (
    <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between fixed  w-full z-10 ">
      <Link href="/Posts" className="text-xl font-bold">
        {title}
      </Link>
      <div className='flex justify-center items-center gap-3'>
        <Link href='/Feed'>
          <FaBell className="text-gray-400 cursor-pointer" />
        </Link>
        {renderUserLink()}
      </div>
    </div>
  );
};

export default SideBar;
