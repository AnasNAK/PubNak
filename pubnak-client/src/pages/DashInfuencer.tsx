import React, { useState } from 'react';
import Navbar from '@/components/dashboard/influencer/Navbar';
import SideBar from '@/components/dashboard/influencer/SideBar';
import Profile from '@/components/dashboard/influencer/Profile';
import Table from '@/components/dashboard/influencer/Table';
import withAuth from '@/utils/withAuth';


const DashInfluencer: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('profile');

    return (
        <div className=''>
            <Navbar />
            <SideBar setSelectedOption={setSelectedOption} />
            {selectedOption === 'profile' && <Profile />}
            {selectedOption === 'table' && <Table />}
        </div>
    );
};

export default withAuth(DashInfluencer);