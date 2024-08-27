'use client';

import Header from '@/components/Header';
import { FaBuilding, FaStar } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      year: '2022 - Present',
      description: 'Worked on developing and maintaining the company\'s main web application. Collaborated with design and backend teams to implement new features and improve user experience.',
      highlights: [
        'Implemented responsive designs with modern frameworks',
        'Optimized web application performance',
        'Led a project to revamp the user interface'
      ],
    },
    {
      title: 'Graphic Designer',
      company: 'Creative Studio Ltd.',
      year: '2019 - 2022',
      description: 'Designed marketing materials, including brochures, flyers, and social media graphics. Worked closely with clients to understand their brand and create visually appealing designs.',
      highlights: [
        'Created a new brand identity for several clients',
        'Developed eye-catching visual content for social media',
        'Streamlined design processes and increased efficiency'
      ],
    }
    // Add more experiences as needed
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Experience</h1>

        <div className="max-w-4xl w-full">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <FaBuilding size={30} className="text-blue-600 mr-4" />
                <div className="flex-grow">
                  <h2 className="text-xl md:text-2xl font-semibold">{exp.title}</h2>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500">{exp.year}</p>
                </div>
              </div>
              <p className="text-gray-800 mb-4">{exp.description}</p>
              <ul className="list-disc pl-6 text-gray-700">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start mb-2">
                    <FaStar size={16} className="text-yellow-500 mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
