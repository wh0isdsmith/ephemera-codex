import React from 'react';

function Navigation() {
  return (
    <nav className="bg-gray-800 text-white py-2 px-4 flex space-x-4">
      <a href="#" className="hover:text-gray-300">
        Home
      </a>
      <a href="#" className="hover:text-gray-300">
        Dashboard
      </a>
      <a href="#" className="hover:text-gray-300">
        About
      </a>
    </nav>
  );
}

export default Navigation;
