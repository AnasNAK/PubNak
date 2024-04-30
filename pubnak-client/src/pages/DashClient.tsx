import React, { useState } from 'react';
import Navbar from '@/components/dashboard/client/Navbar';
import SideBar from '@/components/dashboard/client/SideBar';
import Profile from '@/components/dashboard/client/Profile';
import Table from '@/components/dashboard/client/Table';
import withAuth from '@/utils/withAuth';

const DashClient: React.FC = () => {
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

export default withAuth(DashClient);