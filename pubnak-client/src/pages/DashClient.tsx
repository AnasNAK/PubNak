import React, { useState } from 'react';
import Navbar from '@/components/dashboard/client/Navbar';
import SideBar from '@/components/dashboard/client/SideBar';
import Profile from '@/components/dashboard/client/Profile';
import Posts from '@/components/dashboard/client/PostComponent';
import withAuth from '@/utils/withAuth';

const DashClient: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('profile');

  return (
    <div className="flex min-h-screen bg-white">
      <SideBar setSelectedOption={setSelectedOption} />
      <div className="flex-1 flex flex-col">
        <Navbar  setSelectedOption={setSelectedOption}/>
        <div className="flex-1 p-6">
          {selectedOption === 'profile' && <Profile />}
          {selectedOption === 'Posts' && <Posts />}
        </div>
      </div>
    </div>
  );
};

export default withAuth(DashClient);