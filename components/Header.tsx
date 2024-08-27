'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars } from 'react-icons/fa';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  return (
    <div className="flex flex-col">
      {/* Header for Small Screens */}
      <header className="md:hidden flex justify-between items-center p-6 bg-blue-800 text-white">
        <div className="text-xl font-semibold">Elsie Oduor</div>
        <Sheet>
          <SheetTrigger className="text-white text-2xl">
            <FaBars />
          </SheetTrigger>
          <SheetContent className="bg-white text-blue-800">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-4 mb-8">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/education" className="hover:underline">Education</a></li>
              <li><a href="/experience" className="hover:underline">Experience</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/skills" className="hover:underline">Skills</a></li>
              <li><a href="/resume" className="hover:underline">Resume</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
            <div className="flex flex-wrap gap-6 mb-8">
              <a href="https://www.linkedin.com/in/elsie-oduor-8844082a1/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="text-blue-600 hover:text-gray-500" />
              </a>
              <a href="https://github.com/elsieoduor" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="text-gray-900 hover:text-gray-500" />
              </a>
              <a href="mailto:eoatieno@gmail.com">
                <FaEnvelope size={30} className="text-red-600 hover:text-gray-500" />
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </header>

      {/* Header for Larger Screens */}
      <header className="hidden md:flex justify-between items-center p-6 bg-blue-800 text-white">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 mr-4" /> {/* Replace with your logo */}
          <div className="text-xl font-semibold">Elsie Oduor</div>
        </div>
        <nav className="flex space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/education" className="hover:underline">Education</a>
          <a href="/experience" className="hover:underline">Experience</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/skills" className="hover:underline">Skills</a>
          <a href="/resume" className="hover:underline">Resume</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
