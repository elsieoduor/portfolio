'use client';

import { FaLinkedin, FaGithub, FaEnvelope, FaBars } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import {Sheet, SheetContent,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header for Small Screens */}
      <header className="md:hidden flex justify-between items-center p-6 bg-transparent">
        <div className="text-white text-xl font-semibold">Elsie Oduor</div>
        <Sheet>
          <SheetTrigger className="text-white text-2xl">
            <FaBars />
          </SheetTrigger>
          <SheetContent className='bg-white'>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-4 mb-8 ">
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
                <FaLinkedin size={30} className="text-white hover:text-gray-300" />
              </a>
              <a href="https://github.com/elsieoduor" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="text-white hover:text-gray-300" />
              </a>
              <a href="mailto:eoatieno@gmail.com">
                <FaEnvelope size={30} className="text-white hover:text-gray-300" />
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-start justify-center flex-grow text-white text-left p-6">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Elsie Oduor</h1>
        <h2 className="text-2xl mb-6">
          I am{' '}
          <TypeAnimation
            sequence={[
              'Graphics Designer',
              1000,
              'Fullstack Developer',
              1000,
              'Backend Developer',
              1000,
              'Frontend Developer',
              1000,
              'UI/UX Designer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h2>

        {/* Social Media Links for Mobile */}
        <div className="md:hidden flex flex-wrap gap-6 mb-8">
          <a href="https://www.linkedin.com/in/elsie-oduor-8844082a1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-white hover:text-gray-300" />
          </a>
          <a href="https://github.com/elsieoduor" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-white hover:text-gray-300" />
          </a>
          <a href="mailto:eoatieno@gmail.com">
            <FaEnvelope size={30} className="text-white hover:text-gray-300" />
          </a>
        </div>

        <ul className="hidden md:flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-6 md:p-0 text-white mb-6">
          <li><a href="/" className="hover:underline active:underline active:text-black">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/education" className="hover:underline">Education</a></li>
          <li><a href="/experience" className="hover:underline">Experience</a></li>
          <li><a href="/projects" className="hover:underline">Projects</a></li>
          <li><a href="/skills" className="hover:underline">Skills</a></li>
          <li><a href="/resume" className="hover:underline">Resume</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>

        <div className="hidden md:flex flex-wrap gap-6 mb-8">
          <a href="https://www.linkedin.com/in/elsie-oduor-8844082a1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-white hover:text-gray-300" />
          </a>
          <a href="https://github.com/elsieoduor" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-white hover:text-gray-300" />
          </a>
          <a href="mailto:eoatieno@gmail.com">
            <FaEnvelope size={30} className="text-white hover:text-gray-300" />
          </a>
        </div>
      </main>
    </div>
  );
}
