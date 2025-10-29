import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSidebar from './components/JobOpening/DashboardSidebar'
import styled from 'styled-components'

const AdminApp = () => {
  return (
    <AdminAppContainer>
    <DashboardSidebar />
    <Outlet />
    </AdminAppContainer>
  )
}

export default AdminApp

const AdminAppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(203, 18, 49);
`