import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/jobs',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <JobsPage />,
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;