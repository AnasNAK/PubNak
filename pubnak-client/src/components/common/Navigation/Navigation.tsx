import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaInbox, FaCommentAlt, FaArrowLeft, FaUserFriends, FaBriefcase, FaClipboardList, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, getUser } from '@/features/userSlice';
import { AppDispatch, RootState } from '@/store/store';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';



const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.user);
  // const navigate = useNavigate();
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const handleLogout = () => {
    dispatch(logoutUser())
      .then(() => {
        router.push('/Login');
      })
      .catch(() => { });
  }
  const token = Cookies.get('token');



  if (!token) {
    console.log('Token not found in cookie');
  }
  useEffect(() => {

    dispatch(getUser(token));
  }, [dispatch]);
  return (
    <div className="relative">
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white hover:text-gray-400">
            <FaTimes />
          </button>
        </div>
        <nav className="mt-10 px-6 flex flex-col gap-48">
          <div>
            <Link href="/Posts" className="flex items-center space-x-2 py-4 text-white hover:text-green-500">
              <FaHome />
              <span>Home</span>
            </Link>
            {user.role === 'Influencer' && (
              <Link href="/Feed" className="flex items-center space-x-2 py-4 text-white hover:text-green-500">
                <FaInbox />
                <span>Feed</span>
              </Link>
            )}
            {user.role === 'Influencer' ? (
              <Link href="/DashInfluencer" className="flex items-center space-x-2 py-4 text-white hover:text-green-500">
                <FaBriefcase />
                <span className="bg-green-500 text-white px-2 py-1 rounded">Dashboard</span>
              </Link>
            ) : (
              <Link href="/DashClient" className="flex items-center space-x-2 py-4 text-white hover:text-green-500">
                <FaBriefcase />
                <span className="bg-green-500 text-white px-2 py-1 rounded">Dashboard</span>
              </Link>
            )}


          </div>
          <button onClick={handleLogout} className="flex items-center space-x-2 py-4 text-white hover:text-green-500">
            <FaArrowLeft />
            <span>Logout</span>
          </button>
        </nav>
      </div>
      <button
        onClick={toggleSidebar}
        className={`fixed z-40 bottom-4 right-4 bg-green-500 text-white rounded-full p-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
          }`}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Navigation;
