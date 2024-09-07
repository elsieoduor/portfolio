'use client';

import Header from '@/components/Header';
import { FaSchool, FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  const educationItems = [
    {
      school: 'Testimony Upper',
      year: '2021 - 2022',
      degree: 'Secondary School',
      skills: [
        'Programming Fundamentals',
        'Introduction to Computer Studies',
        'Basic Mathematics',
        'Problem Solving',
      ],
    },
    {
      school: 'Moringa School',
      year: '2023',
      degree: 'Software Engineering',
      skills: [
        'Programming Fundamentals',
        'Data Structures and Algorithms',
        'Web Development (HTML, CSS, JavaScript)',
        'Database Management (SQL, NoSQL)',
        'Version Control (Git, GitHub)',
      ],
    },
    {
      school: 'Self Taught',
      year: '2023 - 2024',
      degree: 'Understanding Figma',
      skills: [
        'Graphics Fundamentals',
        'User Interface Design (UI)',
        'User Experience Design (UX)',
        'Prototyping',
        'Wireframing',
        'Design Systems',
      ],
    },
    {
      school: 'Self Taught',
      year: '2024',
      degree: 'Adobe Illustrator',
      skills: [
        'Vector Graphics',
        'Logo Design',
        'Illustration Techniques',
        'Typography',
        'Branding Design',
      ],
    },
    {
      school: 'Self Taught',
      year: '2024',
      degree: 'Adobe InDesign',
      skills: [
        'Layout Design',
        'Print Design',
        'Typography',
        'Magazine and Brochure Design',
        'Page Formatting',
      ],
    },
    {
      school: 'Self Taught',
      year: '2024',
      degree: 'Adobe Photoshop',
      skills: [
        'Photo Editing',
        'Image Manipulation',
        'Digital Painting',
        'Retouching',
        'Compositing',
      ],
    },
    {
      school: 'Self Taught',
      year: '2024',
      degree: 'Microsoft Suite',
      skills: [
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Document Formatting',
        'Data Analysis (Excel)',
        'Presentation Skills',
      ],
    },
    {
      school: 'Self Taught',
      year: '2024',
      degree: 'WordPress Development',
      skills: [
        'Content Management Systems (CMS)',
        'WordPress Theme Customization',
        'Plugin Development',
        'SEO Optimization',
        'Website Management',
      ],
    }
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
            <div key={index} className="bg-[#FAF9F6] shadow-md rounded p-6 mb-6">
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
