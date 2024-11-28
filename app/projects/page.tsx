'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import { FaDesktop, FaServer, FaPalette } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  type: 'frontend' | 'backend' | 'graphics';
  image: string;
}

const ITEMS_PER_PAGE = 8;

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

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

  // Calculate the projects to display on the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  // Helper function to determine button class
  const buttonClass = (filterType: string) => (
    filter === filterType
      ? 'bg-white text-black' 
      : 'bg-[#08203e] text-white' // Non-active button
  );

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
            className={`px-4 py-2 rounded flex items-center ${buttonClass('all')}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded flex items-center ${buttonClass('frontend')}`}
          >
            Frontend <FaDesktop className="ml-2" />
          </button>
          {/* <button
            onClick={() => setFilter('backend')}
            className={`px-4 py-2 rounded flex items-center ${buttonClass('backend')}`}
          >
            Backend <FaServer className="ml-2" />
          </button> */}
          <button
            onClick={() => setFilter('graphics')}
            className={`px-4 py-2 rounded flex items-center ${buttonClass('graphics')}`}
          >
            Graphics <FaPalette className="ml-2" />
          </button>
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
          {currentProjects.map(project => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              passHref
              className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition"
            >
              <div className="w-full h-48 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full max-w-full max-h-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="flex items-center px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
