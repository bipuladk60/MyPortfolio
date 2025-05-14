import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoIosHome } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { PiUserGearFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import ResumeModal from './assets/ResumeModal';

function Navbar() {
  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();
    setShowResume(!showResume);
  };

  return (
    <>
      <nav className="fixed left-0 top-0 h-full md:w-20 bg-bg shadow-md z-10 flex flex-col items-center py-8 text-primary">
        <ul className="space-y-6 mb-8">
          <li>
            <Link to="home" smooth={true} duration={500} offset={-50} className="cursor-pointer hover:underline">
              <span className='hidden md:block'>Home</span>
              <span className='block md:hidden text-2xl ml-2'><IoIosHome /></span>
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline">
              <span className='hidden md:block'>Experience</span>
              <span className='block md:hidden text-2xl ml-2'><MdWork /></span>
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
            <Link to="awards" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline">
              <span className='hidden md:block'>Awards</span>
              <span className='block md:hidden text-2xl ml-2'><FaTrophy /></span>
            </Link>
          </li>
          <li>
            <Link to="contacts" smooth={true} duration={500} offset={-50} className="cursor-pointer transform rotate-90 hover:underline">
              <span className='hidden md:block'>Contact</span>
              <span className='block md:hidden text-2xl ml-2'><FaPhoneAlt /></span>
            </Link>
          </li>
          <li>
            <div onClick={handleResumeClick} className="cursor-pointer transform hover:underline">
              <span className='md:block hidden bg-primary text-white font-body py-1 px-2 rounded-button'>Resume</span>
              <span className='block md:hidden text-2xl ml-2'><IoDocumentTextSharp /></span>
            </div>
          </li>
        </ul>
        <div className="w-px bg-primary flex-1"></div>
      </nav>

      <ResumeModal 
        isOpen={showResume} 
        onClose={() => setShowResume(false)} 
      />
    </>
  );
}

export default Navbar;
