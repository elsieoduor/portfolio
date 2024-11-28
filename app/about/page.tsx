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
            src="/projects/profile.jpg" 
            alt="Elsie Oduor"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-800"
          />
        </div>

        {/* Information Section */}
        <div className="w-full md:w-2/3 md:pl-6 text-[#F5F5F5]">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">About Me</h1>
          <p className="text-base md:text-lg mb-4">
            Hello! I'm Elsie Oduor, a passionate Graphics Designer and Fullstack Developer with a knack for creating beautiful and functional user experiences. I have a diverse skill set, including expertise in both frontend and backend development, and a strong background in graphic design.
          </p>

          {/* Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base md:text-lg mb-4">
            <div>
              <p><strong>Birthday:</strong> June 9, 2005</p>
            </div>
            <div>
              <p><strong>Location:</strong> Nairobi, Kenya</p>
            </div>
            <div>
              <p><strong>Phone Number:</strong> +254 728 969182</p>
            </div>
            <div>
              <p><strong>Email:</strong> eoatieno@gmail.com</p>
            </div>
          </div>
        </div>
      </main>

      {/* Interests Section */}
      <div className="mt-6 p-6 w-full md:w-2/3 mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Interests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#FAF9F6] shadow-md rounded-lg p-4 flex items-center">
            <FaGamepad size={30} className="text-blue-500 mr-4" />
            <span className="text-base md:text-lg font-semibold">Gaming</span>
          </div>
          <div className="bg-[#FAF9F6] shadow-md rounded-lg p-4 flex items-center">
            <FaCode size={30} className="text-green-500 mr-4" />
            <span className="text-base md:text-lg font-semibold">Programming</span>
          </div>
          <div className="bg-[#FAF9F6] shadow-md rounded-lg p-4 flex items-center">
            <FaPaintBrush size={30} className="text-purple-500 mr-4" />
            <span className="text-base md:text-lg font-semibold">Arts and Crafts</span>
          </div>
        </div>
      </div>
    </div>
  );
}
