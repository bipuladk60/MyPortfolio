import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

function ProjectContainer() {
    const [activeTab, setActiveTab] = useState('web');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='bg-cardBg text-text p-6 sm:p-8 my-20 rounded-lg w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[95%] xl:max-w-[80%] min-h-[20rem] mx-auto md:mx-4'>
            {/* Tabs */}
            <div className='flex justify-around mb-4'>
                <button
                    className={`font-bold text-3xl md:text-med lg:text-med ${activeTab === "web" ? "text-white" : "text-gray-500"}`}
                    onClick={() => handleTabClick('web')}
                >
                    Web/App
                </button>
                <button
                    className={`font-bold text-3xl md:text-med lg:text-med ${activeTab === "ai" ? "text-white" : "text-gray-500"}`}
                    onClick={() => handleTabClick('ai')}
                >
                    AI/ML
                </button>
            </div>

            {/* Sliding Content Area */}
            <div className="relative overflow-hidden w-full h-[20rem]">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: activeTab === 'web' ? 'translateX(0)' : 'translateX(-100%)', width: '100%' }}
                >
                    {/* Web/App Dev Content */}
                    <div className="w-full flex-shrink-0 flex justify-around bg-transparent p-6 rounded-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                            <ProjectCard title="Web Project 1" description="Description of Web Project 1" />
                            <ProjectCard title="Web Project 2" description="Description of Web Project 2" />
                        </div>
                    </div>

                    {/* AI/ML Content */}
                    <div className="w-full flex-shrink-0 flex items-center justify-center bg-transparent p-6 rounded-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ProjectCard title="AI Project 1" description="Description of AI Project 1" />
                            <ProjectCard title="AI Project 2" description="Description of AI Project 2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectContainer;
