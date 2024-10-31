import React from 'react';

function ProjectCard({ icon: Icon, name, title, description, linkText, linkText2, linkUrl, linkUrl2 }) {
    return (
        <div className="p-6 bg-cardBg rounded-lg shadow-lg border border-primary w-full h-auto flex flex-col justify-between">
            {/* Icon and Title */}
            <div className="flex items-center space-x-3">
                <div className="text-primary md:text-8xl text-5xl">
                    {Icon && <Icon />} {/* Render the passed icon */}
                </div>
                <div className='flex flex-col text-left font-bold font-heading text-gray-400'>
                    <h3 className='text-lg md:text-3xl'>{name}</h3>
                    <h4 className="font-semibold font-body text-sm md:text-lg text-text text-md uppercase">{title}</h4>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm mt-4 text-text font-bold font-body mb-4 text-left">
                {description}
            </p>

            {/* Links */}
            <div className='flex'>
                {linkText && <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-primary text-left text-lg md:text-2xl font-bold mr-8 mt-4 underline cursor-pointer">
                    {linkText} 
                </a>}
                {linkText2 && <a href={linkUrl2} target="_blank" rel="noopener noreferrer" className="text-primary text-left text-lg md:text-2xl font-bold mt-4 underline cursor-pointer">
                    {linkText2} 
                </a>}
            </div>
        </div>
    );
}

export default ProjectCard;
