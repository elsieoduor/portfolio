import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-800 text-white">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 mr-4" /> {/* Replace with your logo */}
          <div className="text-xl font-semibold">Elsie Oduor</div>
        </div>
        <nav className="flex space-x-4">
        <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/education" className="hover:underline">Education</a>
          <a href="/experience" className="hover:underline">Experience</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/skills" className="hover:underline">Skills</a>
          <a href="/resume" className="hover:underline">Resume</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
    </header>
  )
}

export default Header