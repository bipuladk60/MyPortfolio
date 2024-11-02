import React from 'react';
import { Link } from 'react-scroll';
import { IoIosHome } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { PiUserGearFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-full md:w-20 bg-bg shadow-md z-10 flex flex-col items-center py-8 text-primary">
      <ul className="space-y-6 mb-8">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-50} className="cursor-pointer hover:underline">
            <span className='hidden md:block'>Home</span>
            <span className='block md:hidden text-2xl ml-2'><IoIosHome /></span>
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline">
           <span className='hidden md:block'>Projects</span> 
           <span className='block md:hidden text-2xl ml-2'><GrProjects /></span>
          </Link>
        </li>
        
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline">
            <span className='hidden md:block'>Skills</span>
            <span className='block md:hidden text-2xl ml-2'><PiUserGearFill /></span>
          </Link>
        </li>
        
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline">
            <span className='hidden md:block'>Contact</span>
            <span className='block md:hidden text-2xl ml-2'><FaPhoneAlt /></span>
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline">
            <span className='md:block hidden bg-primary text-white font-body py-1 px-2 rounded-button hover:bg-secondary transition-colors'>Resume</span>
            <span className='block md:hidden text-2xl ml-2'><IoDocumentTextSharp /></span>
          </Link>
        </li>
      </ul>
      <div className="w-px bg-primary flex-1"></div>
    </nav>
  );
}

export default Navbar;
