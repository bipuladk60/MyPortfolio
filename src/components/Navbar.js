import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-full w-20 bg-bg shadow-md z-10 flex flex-col items-center py-8 text-primary">
      <ul className="space-y-6 mb-8">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline">
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline">
            Contact
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline bg-primary text-white font-body py-1 px-1.5 rounded-button hover:bg-secondary transition-colors">
            Resume
          </Link>
        </li>
      </ul>
      <div className="w-px bg-primary flex-1"></div>
    </nav>
  );
}

export default Navbar;
