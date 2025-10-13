import React from 'react';
import { Route, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewJobs from './components/ViewJobs';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([{path: '/', element: <HomePage />}])

const App = () => {
  return <RouterProvider router={router} />
}

export default App