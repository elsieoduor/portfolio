'use client';

import Header from '@/components/Header';
import { FaBuilding, FaStar } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Freelance',
      year: '2023 - Present',
      description: 'Worked on developing and maintaining the main web application. Collaborated with design and backend teams to implement new features and improve user experience.',
      highlights: [
        'Implemented responsive designs with modern frameworks',
        'Optimized web application performance',
        'Led a project to revamp the user interface'
      ],
    },
    {
      title: 'Fullstack Web Developer',
      company: 'Freelance',
      year: '2024',
      location: 'Nairobi, KE',
      description: 'Developed and maintained dynamic web applications using a tech stack including JavaScript, React, Python, Node.js, and Express.',
      highlights: [
        'Designed and implemented RESTful APIs to support frontend features and ensure seamless integration',
        'Collaborated with developers on project requirements and technical specifications',
        'Engaged in code reviews and improved code quality'
      ],
    },
    {
      title: 'Hackathon Participant',
      company: 'Freelance',
      year: '2024',
      location: 'Nairobi, KE',
      description: 'Collaborated with a team to develop and present a functional prototype in a month-long hackathon.',
      highlights: [
        'Utilized Kotlin, Next.js, and Firebase to build a solution for a Technician App',
        'Presented the project to a panel of judges and demonstrated its technical innovation',
        'Received a certificate of participation'
      ],
    },
    {
      title: 'Catalog Designer',
      company: 'Freelance',
      year: '2024',
      location: 'Nairobi, KE',
      description: 'Developed a comprehensive catalog for a crochet brand, enhancing visual appeal and product presentation.',
      highlights: [
        'Utilized Adobe InDesign for a cohesive layout',
        'Praised for clean design and organization, increasing client interest and sales'
      ],
    },
    {
      title: 'Logo Designer',
      company: 'Freelance',
      year: '2024',
      location: 'Nairobi, KE',
      description: 'Created distinctive logos reflecting clients’ brand mission and values.',
      highlights: [
        'Designed versatile logos using Adobe Illustrator',
        'Successfully established strong brand identities'
      ],
    },
    {
      title: 'Menu Designer',
      company: 'Freelance',
      year: '2024',
      location: 'Nairobi, KE',
      description: 'Designed visually appealing menus, enhancing user experience and brand alignment.',
      highlights: [
        'Used Adobe InDesign, Illustrator, and Photoshop to create effective menu layouts',
        'Contributed to a more engaging dining experience with positive client feedback'
      ],
    }
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
            <div key={index} className="bg-[#FAF9F6] shadow-md rounded p-6 mb-6">
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
