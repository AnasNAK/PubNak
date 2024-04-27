import React,{useState} from 'react'
import Navbar from '../../../components/dashboard/Admin/Navbar'
import SideBar from '../../../components/dashboard/Admin/SideBar'
import Table from '../../../components/dashboard/Admin/Table'

function AdminDashboardContainer() {

  const [selectedOption, setSelectedOption] = useState('profile');

  return (
    <div className=''>
            <Navbar />
            <SideBar setSelectedOption={setSelectedOption} />
          
            {selectedOption === 'table' && <Table />}
        </div>
  )
}

export default AdminDashboardContainer