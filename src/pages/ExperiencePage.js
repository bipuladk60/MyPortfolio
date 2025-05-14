import React from 'react';
import { motion } from 'framer-motion';
import Quote from '../components/quote';

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "CadenceAI",
      date: "Mar 2023 - Present",
      summary: "As a Software Engineering Intern at CadenceAI, I developed a React-based frontend with Figma UI/UX alignment and Auth0 integration. I also engineered a FastAPI backend with RabbitMQ for asynchronous tasks, utilized Azure services for messaging and storage, and employed Git for version control, contributing to efficient collaboration and streamlined development cycles using TypeScript, TanStack Query, and Zod Schema."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Gulf South Center for Community Engaged Health Research",
      date: "Aug 2024 - Present",
      summary: "In my role as a Full Stack Developer, I enhanced the Bridz2U app's Vue.js frontend to improve user engagement and integrated a Ruby on Rails backend, significantly speeding up health data updates. I managed deployment on an AWS LAMP stack and actively participated in Agile stand-ups with GitLab CI/CD, fostering better collaboration and efficient feature releases."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="bg-bg w-full min-h-screen flex flex-col items-center justify-start pt-24 pb-8 px-4">
      <Quote Header="Experience" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-cardBg text-text p-6 md:p-8 mt-10 rounded-xl w-full max-w-6xl shadow-2xl backdrop-blur-md"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {experiences.map((exp) => {
            return (
              <motion.div 
                key={exp.id}
                variants={itemVariants}
                className="bg-cardBg rounded-lg flex flex-col p-6 shadow-lg border border-primary h-full text-left"
              >
                <div className="mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-2xl lg:text-3xl font-heading text-accent mb-1">{exp.title}</h3>
                    <p className="font-body text-base md:text-lg text-primary opacity-90 mb-0.5">{exp.company}</p>
                    <p className="text-sm text-text opacity-80">{exp.date}</p>
                  </div>
                </div>
                <p className="text-sm mt-4 text-gray-400 font-bold font-body mb-4 text-left flex-grow">
                  {exp.summary}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage; 