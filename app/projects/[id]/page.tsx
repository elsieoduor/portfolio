'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';

interface Project {
  id: number;
  title: string;
  type: 'frontend' | 'backend' | 'graphics';
  image: string;
  role: string;
  liveSite: string | null;
  github: string | null;
  date: string;
  description: string;
  skills: string[];
  pdf?: string;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch('/data/projects.json');
        const data: Project[] = await response.json();
        const foundProject = data.find((p) => p.id === parseInt(params.id));
        if (foundProject) {
          setProject(foundProject);
        } else {
          router.push('/404'); 
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        router.push('/500'); // Redirect to 500 if there's an error
      }
    };

    fetchProject();
  }, [params.id, router]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumb />

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-w-3xl h-auto mb-6 rounded-lg shadow-lg"
        />

        {/* Project Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">{project.title}</h1>

        {/* Project Details */}
        <div className="flex flex-col md:flex-row md:justify-between items-center w-full max-w-3xl mb-6">
          <span className="text-lg mb-2 md:mb-0">Role: {project.role}</span>
          <span className="text-lg mb-2 md:mb-0">Date: {project.date}</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            {project.liveSite && (
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Project Description */}
        <p className="text-lg text-gray-700 mb-6 text-center">{project.description}</p>

        {/* Skills and Technologies */}
        <div className="flex flex-wrap gap-4 justify-center">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* PDF Link for Graphics Projects */}
        {project.type === 'graphics' && project.pdf && (
          <a
            href={project.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-blue-500 hover:underline"
          >
            Download PDF
          </a>
        )}
      </main>
    </div>
  );
}
