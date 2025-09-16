// src/context/SearchContext.js

import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
const SearchContext = createContext();

// 2. Custom hook to easily consume the context
export const useSearch = () => {
  return useContext(SearchContext);
};

// 3. Provider component to wrap your application
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search text

  const value = {
    searchQuery,
    setSearchQuery,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};