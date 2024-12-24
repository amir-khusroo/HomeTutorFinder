// src/components/TeacherProfile.js

import React from 'react';

const TutorProfile = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Teacher Photo */}
        <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Teacher Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Teacher Details */}
        <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-gray-600">john.doe@example.com</p>
          <p className="text-gray-600">+123 456 7890</p>
          <p className="text-gray-600">123 Main Street, City, Country</p>
        </div>
      </div>

      {/* Profile Information */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Profile Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Qualification */}
          <div>
            <h4 className="text-lg font-medium text-gray-700">Qualification</h4>
            <p className="text-gray-600">Master of Science in Mathematics</p>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-lg font-medium text-gray-700">Experience</h4>
            <p className="text-gray-600">5 years of teaching experience</p>
          </div>

          {/* Expected Salary */}
          <div>
            <h4 className="text-lg font-medium text-gray-700">Expected Salary</h4>
            <p className="text-gray-600">$30,000 per annum</p>
          </div>
        </div>
      </div>

      {/* Demo Video */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Demo Video</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Teacher Demo Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;
