
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginLogoutButton = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
        <div className='flex flex-col items-center'>
          <button onClick={toggleDropdown} className="text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none border border-blue-800"
          >
            Log in
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg w-48">
              <Link
                to="/student/login"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => setDropdownOpen(false)} // Close dropdown when navigating
              >
                Student
              </Link>
              <Link
                to="/tutor/login"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={() => setDropdownOpen(false)} // Close dropdown when navigating
              >
                Tutor
              </Link>
            </div>
          )}
        </div>
    </nav>
  );
};

export default LoginLogoutButton;
