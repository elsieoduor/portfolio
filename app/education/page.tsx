'use client';

import Header from '@/components/Header';
import { FaSchool, FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  const educationItems = [
    {
      school: 'University of Example',
      year: '2018 - 2022',
      degree: 'Bachelor of Science in Computer Science',
      skills: [
        'Programming Fundamentals',
        'Data Structures and Algorithms',
        'Web Development',
        'Database Management'
      ],
    },
    {
      school: 'Example Community College',
      year: '2016 - 2018',
      degree: 'Associate Degree in Information Technology',
      skills: [
        'Networking Basics',
        'Operating Systems',
        'Technical Support',
        'Introduction to Programming'
      ],
    }
    // Add more educational entries as needed
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Education</h1>

        <div className="max-w-4xl w-full">
          {educationItems.map((edu, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <FaSchool size={30} className="text-blue-600 mr-4" />
                <div className="flex-grow">
                  <h2 className="text-xl md:text-2xl font-semibold">{edu.school}</h2>
                  <p className="text-gray-600">{edu.year}</p>
                  <p className="text-gray-800 font-semibold">{edu.degree}</p>
                </div>
              </div>
              <p className="text-gray-800 mb-4 font-semibold">Skills Learned:</p>
              <ul className="list-disc pl-6 text-gray-700">
                {edu.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start mb-2">
                    <FaGraduationCap size={16} className="text-yellow-500 mr-2" />
                    {skill}
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
