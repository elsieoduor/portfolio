'use client';

import Header from '@/components/Header';
import { FaPenNib, FaLaptopCode } from 'react-icons/fa';

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-3xl md:text-4xl text-white font-bold mb-6 text-center">Resume</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {/* Graphics Design Card */}
          <a 
            href="/Graphics Design Resume.pdf" 
            download="Graphics Design Resume.pdf" 
            className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition"
          >
            <FaPenNib size={40} className="text-blue-600 mb-4" />
            <h2 className="text-xl font-bold mb-4">Graphics Design</h2>
            <p className="text-gray-700">Download my Graphics Design resume</p>
          </a>

          {/* Software Engineering Card */}
          <a 
            href="/Software Engineer Resume.pdf" 
            download="Software Engineer Resume.pdf" 
            className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition"
          >
            <FaLaptopCode size={40} className="text-green-600 mb-4" />
            <h2 className="text-xl font-bold mb-4">Software Engineering</h2>
            <p className="text-gray-700">Download my Software Engineering resume</p>
          </a>
        </div>
      </main>
    </div>
  );
}
