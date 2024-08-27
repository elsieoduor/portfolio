'use client';

import Header from '@/components/Header';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';

export default function Skills() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-6 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Skills</h1>

        {/* Skills Categories */}
        <div className="max-w-4xl w-full">

          {/* Languages */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Languages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaHtml5 size={40} className="text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">HTML</h3>
                <p className="text-gray-700">HyperText Markup Language</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaCss3Alt size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">CSS</h3>
                <p className="text-gray-700">Cascading Style Sheets</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaJs size={40} className="text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">JavaScript</h3>
                <p className="text-gray-700">Programming Language</p>
              </div>
            </div>
          </section>

          {/* Frameworks */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Frameworks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaReact size={40} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">React</h3>
                <p className="text-gray-700">Frontend Library</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaNodeJs size={40} className="text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Node.js</h3>
                <p className="text-gray-700">Backend Runtime</p>
              </div>
            </div>
          </section>

          {/* Databases */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Databases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaDatabase size={40} className="text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">SQL</h3>
                <p className="text-gray-700">Structured Query Language</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaDatabase size={40} className="text-blue-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">NoSQL</h3>
                <p className="text-gray-700">Non-relational Databases</p>
              </div>
            </div>
          </section>

          {/* Tools */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaTools size={40} className="text-gray-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Git</h3>
                <p className="text-gray-700">Version Control</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaTools size={40} className="text-gray-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Docker</h3>
                <p className="text-gray-700">Containerization</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaTools size={40} className="text-gray-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Webpack</h3>
                <p className="text-gray-700">Module Bundler</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
