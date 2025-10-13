import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainLayout