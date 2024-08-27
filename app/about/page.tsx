'use client';

import Header from '@/components/Header';
import { FaGamepad, FaCode, FaFutbol, FaPaintBrush } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center md:items-start p-6">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src="/profile-image.jpg" // Replace with your profile image path
            alt="Elsie Oduor"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-800"
          />
        </div>

        {/* Information Section */}
        <div className="w-full md:w-2/3 md:pl-6">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            Hello! I'm Elsie Oduor, a passionate Graphics Designer and Fullstack Developer with a knack for creating beautiful and functional user experiences. I have a diverse skill set, including expertise in both frontend and backend development, and a strong background in graphic design.
          </p>

          {/* Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg mb-4">
            <div>
              <p><strong>Birthday:</strong> January 1, 1990</p>
            </div>
            <div>
              <p><strong>Location:</strong> Nairobi, Kenya</p>
            </div>
            <div>
              <p><strong>Phone Number:</strong> +254 712 345678</p>
            </div>
            <div>
              <p><strong>Email:</strong> eoatieno@gmail.com</p>
            </div>
          </div>
        </div>
      </main>

      {/* Interests Section */}
      <div className="mt-6 p-6 w-full md:w-2/3 mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Interests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <FaGamepad size={40} className="text-blue-500 mr-4" />
            <span className="text-lg font-semibold">Gaming</span>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <FaCode size={40} className="text-green-500 mr-4" />
            <span className="text-lg font-semibold">Programming</span>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <FaFutbol size={40} className="text-orange-500 mr-4" />
            <span className="text-lg font-semibold">Playing Soccer</span>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <FaPaintBrush size={40} className="text-purple-500 mr-4" />
            <span className="text-lg font-semibold">Drawing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
