// ProjectCard.js
import React from 'react';

function ProjectCard({ title, description }) {
    return (
        <div className="bg-secondary p-4 rounded-lg shadow-lg w-60 h-40 m-4 flex flex-col justify-between">
            <h4 className="text-xl font-semibold text-white">{title}</h4>
            <p className="text-sm text-gray-200">{description}</p>
        </div>
    );
}

export default ProjectCard;
