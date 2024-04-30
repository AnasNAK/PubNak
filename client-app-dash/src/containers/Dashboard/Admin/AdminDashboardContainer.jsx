import React,{useState} from 'react'
import Navbar from '../../../components/dashboard/Admin/Navbar'
import SideBar from '../../../components/dashboard/Admin/SideBar'
import Table from '../../../components/dashboard/Admin/Table'
import Statistics from '../../../components/dashboard/Admin/Statistics'

function AdminDashboardContainer() {

  const [selectedOption, setSelectedOption] = useState('statistics');

  return (
    <div className=''>
            <Navbar />
            <SideBar setSelectedOption={setSelectedOption} />
            {selectedOption === 'table' && <Table />}
            {selectedOption === 'statistics' && <Statistics />}

        </div>
  )
}

export default AdminDashboardContainer