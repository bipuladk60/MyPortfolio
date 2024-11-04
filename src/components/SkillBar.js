import React from 'react';

const SkillBar = () => {
  return (
    <div className="w-full px-4 lg:w-5/12">

    <div className="mb-8">
        <p className='text-left font-body'>FrontEnd</p>
        <div className="relative h-2.5 w-full rounded-2xl">
          <div className="bg-primary absolute top-0 left-0 h-full w-full rounded-2xl"></div>
        </div>
      </div>
    
      <div className="mb-8">
      <p className='text-left font-body'>BackEnd</p>
        <div className="relative h-2.5 w-full rounded-2xl">
          <div className="bg-primary absolute top-0 left-0 h-full w-3/4 rounded-2xl"></div>
        </div>
      </div>


      <div className="mb-8">
      <p className='text-left font-body'>Machine Learning</p>
        <div className="relative h-2.5 w-full rounded-2xl">
          <div className="bg-primary absolute top-0 left-0 h-full w-3/4 rounded-2xl"></div>
        </div>
      </div>

      <div className="mb-8">
      <p className='text-left font-body'>DevOps</p>
        <div className="relative h-2.5 w-full rounded-2xl">
          <div className="bg-primary absolute top-0 left-0 h-full w-1/2 rounded-2xl"></div>
        </div>
      </div>
      
    </div>
  );
};

export default SkillBar;
