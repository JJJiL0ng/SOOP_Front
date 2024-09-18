import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo placeholder */}
          <div className="w-40 h-10 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Logo</span>
          </div>

          {/* Navigation */}
          {/* <nav>
          </nav> */}

          {/* Auth buttons */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors"
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;