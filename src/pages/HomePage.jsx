import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings />
    </>
  )
}

export default HomePage