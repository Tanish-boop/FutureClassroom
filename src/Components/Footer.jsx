// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/contact" className="hover:text-gray-300">Contact Us</a>
          <a href="/terms" className="hover:text-gray-300">Terms</a>
          <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
        </div>
        <p className="text-sm text-gray-500">&copy; 2025 Future Classroom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;