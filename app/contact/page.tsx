'use client';

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useState } from 'react';
import Header from '@/components/Header';

export default function Contact() {
  const [phoneNumber] = useState('+254728969182');
  const [email] = useState('eoatieno@gmail.com');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {/* Address Card */}
          <div className="bg-[#FAF9F6] shadow-md rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">My Address</h2>
            <p className="text-gray-700 text-center">
              Nairobi<br />
              Kenya
            </p>
          </div>

          {/* Social Links Card */}
          <div className="bg-[#FAF9F6] shadow-md rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Social Links</h2>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/elsie-oduor-8844082a1/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="text-blue-700 hover:text-blue-900" />
              </a>
              <a href="https://github.com/elsieoduor" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="text-gray-800 hover:text-gray-600" />
              </a>
              <a href={`mailto:${email}`}>
                <FaEnvelope size={30} className="text-red-600 hover:text-red-800" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-[#FAF9F6] shadow-md rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Email</h2>
            <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
              <FaEnvelope size={30} className="text-red-600 hover:text-red-800 inline-block mr-2" />
              {email}
            </a>
          </div>

          {/* Phone Number Card */}
          <div className="bg-[#FAF9F6] shadow-md rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Phone Number</h2>
            <a href={`https://wa.me/${phoneNumber}`} className="text-green-500 hover:underline">
              <FaPhone size={30} className="inline-block mr-2" /> {phoneNumber}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
