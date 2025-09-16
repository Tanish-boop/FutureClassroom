// src/App.jsx

import React from 'react';
import './app.css'; // Make sure this path is correct if you have an app.css

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CourseDetailsPage from './pages/CourseDetailsPage.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import { SearchProvider } from './context/SearchContext.jsx'; // Import the SearchProvider

// This component acts as the layout for all routes
const Root = () => {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This is where HomePage or CourseDetailsPage will render */}
      </main>
      <Footer />
    </div>
  );
};

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // Root component provides the layout (Header, Footer, Outlet)
    children: [
      {
        index: true, // HomePage is the default child route for "/"
        element: <HomePage />,
      },
      {
        path: 'course/:id', // Dynamic route for course details
        element: <CourseDetailsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <SearchProvider> {/* Wrap the RouterProvider with SearchProvider */}
      <RouterProvider router={router} />
    </SearchProvider>
  );
}

export default App;