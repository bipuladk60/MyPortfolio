import React, { useState } from 'react';
import {  } from "react-icons/md";
import { SiApplemusic } from "react-icons/si";
import { FaVirusCovid } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaReact } from "react-icons/fa"; // Example icons for AI/ML projects
import ProjectCard from './ProjectCard';

function ProjectContainer() {
    const [activeTab, setActiveTab] = useState('web');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='bg-cardBg text-text p-6 my-20 flex flex-col rounded-lg w-full max-w-[100%] sm:max-w-[95%] md:max-w-[85%] lg:max-w-[95%] xl:max-w-[80%] min-h-[20rem] mx-auto md:mx-4'>
            {/* Tabs */}
            <div className='w-full flex justify-around mb-4'>
                <button
                    className={`font-bold text-2xl md:text-3xl lg:text-3xl ${activeTab === "web" ? "text-white" : "text-gray-500"}`}
                    onClick={() => handleTabClick('web')}
                >
                    Web/App
                </button>
                <button
                    className={`font-bold text-2xl md:text-med lg:text-3xl ${activeTab === "ai" ? "text-white" : "text-gray-500"}`}
                    onClick={() => handleTabClick('ai')}
                >
                    AI/ML
                </button>
            </div>

            {/* Sliding Content Area */}
            <div className="relative overflow-hidden w-full h-auto">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: activeTab === 'web' ? 'translateX(0)' : 'translateX(-100%)', width: '100%' }}
                >
                    {/* Web/App Dev Content */}
                    <div className="w-full flex-shrink-0 flex flex-col justify-around bg-transparent py-6 md:px-10 rounded-md">
                        <div className='text-left'>
                            <h2 className='text-lg md:text-3xl lg:text-3xl text-white'>Web/App.<span className='text-gray-400'> TOOLS I'M FAMILIAR WITH</span></h2>
                            <p className='my-4 md:my-10 text-sm  md:text-lg font-body'>React, React Native, Tailwind CSS, Material-UI (MUI), LottieFiles, JavaScript, Python, Swift, MongoDB, PostgreSql, Magic UI, Node.js, Express.js, HTML, CSS, AWS, Vue.js, Azure.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ProjectCard 
                                icon={MdOutlinePhoneIphone}
                                name="CleanLabel"
                                title="An Ingredient Label Scanner"
                                description="Developed as part of a competitive Hackathon, this iOS App uses Computer Vision to scan ingredient labels and detect any harmful ingredients. It also tells the user in which country certain ingredient is banned."
                                linkText="Learn More →"
                                linkUrl="https://www.linkedin.com/posts/bipul-adhikari_im-excited-to-announce-that-my-team-me-activity-7136840828672491520-Bl5k?utm_source=share&utm_medium=member_desktop"
                            />
                            <ProjectCard 
                                icon={FaReact}
                                name="CleanLabel"
                                title="Landing Page" 
                                description="A website developed using React.js and Tailwind for the frontend. Deployed using Microsoft Azure. And UI made using adobe illustrator. This product landing page secured us $1,000 in an idea pitch competition." 
                                linkText="Github →" 
                                linkText2="Live →"
                                linkUrl="https://github.com/bipuladk60/cleanLabel_Landing_Page"
                                linkUrl2="http://cleanlabel.azurewebsites.net/"
                            />
                        </div>
                    </div>

                    {/* AI/ML Content */}
                    <div className="w-full flex-shrink-0 flex flex-col justify-around bg-transparent py-6 md:px-10 rounded-md">
                        <div className='text-left'>
                            <h2 className='text-lg md:text-3xl lg:text-3xl text-white'>AI/ML.<span className='text-gray-400'> TOOLS I'M FAMILIAR WITH</span></h2>
                            <p className='my-4 md:my-10 text-sm  md:text-lg font-body'>TensorFlow, PyTorch, scipy, Pandas, Numpy, Matplotlib, Keras, Python, Jupyter Notebook, Comet ML, Google Colab, Natural Language Processing, Computer Vision.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ProjectCard 
                                icon={SiApplemusic}
                                name="RNN Music Generator" 
                                title="AI Music Generation" 
                                description="This project utilizes a Recurrent Neural Network (RNN) to generate unique music sequences. It explores sequence modeling, where the RNN learns patterns in existing music data and produces novel compositions." 
                                linkText="Github →" 
                                linkUrl="https://github.com/bipuladk60/RNN_Music_Generator"
                            />
                            <ProjectCard 
                                icon={FaVirusCovid}
                                name="Stochastic Simulation" 
                                title="Epidemiological Modeling" 
                                description="A simulation model that uses stochastic processes to predict the spread of infectious diseases. This project models real-world epidemiological scenarios, aiding in the understanding of disease dynamics and intervention effects." 
                                linkText="Github →" 
                                linkUrl="https://github.com/bipuladk60/infectious-disease-simulation"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectContainer;
