'use client';

import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import { FaDesktop, FaServer, FaPalette } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  type: 'frontend' | 'backend' | 'graphics';
  image: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Fetch the projects data from JSON file
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.type === filter);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projects</h1>

        {/* Filter Buttons */}
        <div className="mb-6 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setFilter('all')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
          >
            All
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
          >
            Frontend <FaDesktop className="ml-2" />
          </button>
          <button
            onClick={() => setFilter('backend')}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center"
          >
            Backend <FaServer className="ml-2" />
          </button>
          <button
            onClick={() => setFilter('graphics')}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 flex items-center"
          >
            Graphics <FaPalette className="ml-2" />
          </button>
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
