// src/components/Header.jsx

import React from 'react';
import { useSearch } from '../context/SearchContext.jsx'; // Import the useSearch hook

const Header = () => {
  // Get the current searchQuery and the function to update it from the context
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update the shared search query state
  };

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-300">Future Classroom</a>
        </div>
        <nav className="hidden md:flex space-x-4 items-center">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/categories" className="hover:text-gray-300">Categories</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for courses..." 
              className="bg-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery} // Binds input to the shared state
              onChange={handleSearchChange} // Updates shared state on change
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </nav>
        <div className="hidden md:flex space-x-4">
          <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Login</a>
          <a href="/signup" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md">Sign Up</a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;