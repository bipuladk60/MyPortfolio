import React from 'react';
import { motion } from 'framer-motion';
import Quote from '../components/quote';

const AwardsPage = () => {
  const awards = [
    {
      title: "Undergraduate Symposium for Research and Creative Activity (2nd place - USM)",
      date: "Apr 2025"
    },
    {
      title: "Professionalism Work Ethics Award (The University of Southern Mississippi)",
      date: "Apr 2025"
    },
    {
      title: "Best Use of OnChainKit (HackHeist HackPrinceton 2024 - Princeton University)",
      date: "Nov 2024"
    },
    {
      title: "2023 Hackathon | Tech for Social Impact ($2.5K out of 50+ teams - USM)",
      date: "Nov 2023"
    },
    {
      title: "Golden Eagle Idea Pitch 2024 ($1K for CleanLabel - USM)",
      date: "May 2024"
    }
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="bg-bg w-full min-h-screen flex flex-col items-center justify-start py-12 px-4">
      <Quote Header="Awards" />
      <div className="w-full max-w-2xl mx-auto px-4 font-body text-text mt-10">
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {awards.map((award, index) => (
            <motion.li 
              key={index}
              variants={itemVariants}
              className="border-b border-primary/20 pb-3 pt-2 transition-all duration-300 hover:bg-primary/5"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <h3 className="text-md lg:text-lg font-body text-accent mb-1 sm:mb-0">{award.title}</h3>
                <p className="text-sm text-primary opacity-90 sm:ml-4 whitespace-nowrap">{award.date}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default AwardsPage; 