'use client';

import Header from '@/components/Header';
import { useState } from 'react';
import { FaDesktop, FaServer, FaPalette } from 'react-icons/fa';

// Sample data for projects
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    type: 'frontend',
    image: '/projects/portfolio-website.png',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    type: 'backend',
    image: '/projects/ecommerce-platform.png',
  },
  {
    id: 3,
    title: 'Brand Identity',
    type: 'graphics',
    image: '/projects/brand-identity.png',
  },
  {
    id: 4,
    title: 'Dashboard UI',
    type: 'frontend',
    image: '/projects/dashboard-ui.png',
  },
  // Add more projects as needed
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.type === filter);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>

        {/* Filter Buttons */}
        <div className="mb-6">
          <button
            onClick={() => setFilter('all')}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            All
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
          >
            Frontend <FaDesktop className="inline ml-2" />
          </button>
          <button
            onClick={() => setFilter('backend')}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
          >
            Backend <FaServer className="inline ml-2" />
          </button>
          <button
            onClick={() => setFilter('graphics')}
            className="bg-purple-500 text-white px-4 py-2 rounded mr-2 hover:bg-purple-600"
          >
            Graphics <FaPalette className="inline ml-2" />
          </button>
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
