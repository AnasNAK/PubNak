import React from 'react'
import Navbar from '../../../components/dashboard/Client/Navbar'
import SideBar from '../../../components/dashboard/Client/SideBar'
import Table from '../../../components/dashboard/Client/Table'


function ClientDashboardContainer() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Table />
    </>
  )
}

export default ClientDashboardContainer