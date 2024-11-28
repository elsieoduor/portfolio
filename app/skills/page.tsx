'use client';

import Header from '@/components/Header';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaTools, FaPython, FaPhp, 
  FaGitAlt, FaLinux, FaFigma, FaGithub, 
  FaTerminal, FaSlack, FaMicrosoft, FaWordpressSimple
} from 'react-icons/fa'; // Font Awesome alternatives
import { 
  SiDjango, SiTailwindcss, SiMongodb, SiMysql, SiNextdotjs, SiFlask, 
  SiAdobeindesign, SiAdobeillustrator, SiAdobephotoshop, SiVisualstudiocode, SiFlutter
} from 'react-icons/si'; // Other tech icons

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
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaHtml5 size={40} className="text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">HTML</h3>
                <p className="text-gray-700">HyperText Markup Language</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaCss3Alt size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">CSS</h3>
                <p className="text-gray-700">Cascading Style Sheets</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaJs size={40} className="text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">JavaScript</h3>
                <p className="text-gray-700">Programming Language</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaPython size={40} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Python</h3>
                <p className="text-gray-700">Backend Language</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <SiFlutter size={40} className="text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Flutter</h3>
                <p className="text-gray-700">Mobile Development</p>
              </div>
            </div>
          </section>

          {/* Frameworks */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Frameworks & Libraries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaReact size={40} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">React</h3>
                <p className="text-gray-700">Frontend Library</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <SiNextdotjs size={40} className="text-black mb-4" />
                <h3 className="text-xl font-bold mb-2">Next.js</h3>
                <p className="text-gray-700">React Framework</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaNodeJs size={40} className="text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Node.js</h3>
                <p className="text-gray-700">Backend Runtime</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <SiDjango size={40} className="text-green-800 mb-4" />
                <h3 className="text-xl font-bold mb-2">Django</h3>
                <p className="text-gray-700">Python Web Framework</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <SiFlask size={40} className="text-gray-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Flask</h3>
                <p className="text-gray-700">Python Micro-framework</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <SiTailwindcss size={40} className="text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Tailwind CSS</h3>
                <p className="text-gray-700">Utility-First CSS Framework</p>
              </div>
            </div>
          </section>

          {/* Databases */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Databases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <SiMongodb size={40} className="text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">MongoDB</h3>
                <p className="text-gray-700">NoSQL Database</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <SiMysql size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">MySQL</h3>
                <p className="text-gray-700">SQL Database</p>
              </div>
            </div>
          </section>

          {/* Tools */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tools & Platforms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaGitAlt size={40} className="text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Git</h3>
                <p className="text-gray-700">Version Control</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaGithub size={40} className="text-black mb-4" />
                <h3 className="text-xl font-bold mb-2">GitHub</h3>
                <p className="text-gray-700">Code Hosting Platform</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaMicrosoft size={40} className="text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Microsoft Office</h3>
                <p className="text-gray-700">Office Suite</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <SiVisualstudiocode size={40} className="text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">VS Code</h3>
                <p className="text-gray-700">Code Editor</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaFigma size={40} className="text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Figma</h3>
                <p className="text-gray-700">Design Tool</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <SiAdobeindesign size={40} className="text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">InDesign</h3>
                <p className="text-gray-700">Adobe InDesign</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <SiAdobeillustrator size={40} className="text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Illustrator</h3>
                <p className="text-gray-700">Adobe Illustrator</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <SiAdobephotoshop size={40} className="text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Photoshop</h3>
                <p className="text-gray-700">Adobe Photoshop</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaLinux size={40} className="text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Linux</h3>
                <p className="text-gray-700">Linux OS</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaTerminal size={40} className="text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Terminal</h3>
                <p className="text-gray-700">Terminal</p>
              </div>
              <div className="bg-[#FAF9F6] shadow-md rounded p-6 flex flex-col items-center text-center hover:bg-gray-100 transition">
                <FaSlack size={40} className="text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Slack</h3>
                <p className="text-gray-700">Slack</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
