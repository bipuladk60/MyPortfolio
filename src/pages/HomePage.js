import React from 'react';
import Lottie from 'lottie-react';
import HomePageLottie from "../lotties/HomePageLottie.json";

function HomePage() {
  return (
    <div className="bg-bg text-text min-h-[85vh] flex flex-col md:flex-row items-center w-full pl-12 pr-4 md:pl-16 md:pr-8 relative">
      
      {/* Center Content (comes below animation on small screens) */}
      <div className="order-2 md:order-none flex flex-col md:items-start w-full md:w-1/2 lg:w-1/2 space-y-4 text-left md:text-left py-2 px-8 md:px-2">
        <h1 className="font-heading text-2xl md:text-4xl lg:text-6xl text-text font-bold  ">
          Hey! This is <span className="text-highlight text-primary ">Bipul</span>, an aspiring <span className="text-highlight text-primary">Software Engineer</span>
        </h1>
        <p className="font-body text-sm md:text-xl text-text">
          Curious, Passionate, and Hardworking
        </p>
        
        {/* Button Row */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-primary text-white font-body py-2 px-4 rounded-button hover:bg-secondary transition-colors">
            <a rel="noreferrer" href='https://github.com/bipuladk60' target='_blank'>Github</a>
          </button>
          <button className="bg-primary text-white font-body py-2 px-4 rounded-button hover:bg-secondary transition-colors">
          <a rel="noreferrer" href='https://www.linkedin.com/in/bipul-adhikari/' target='_blank'>LinkedIn</a>
          </button>
        </div>
      </div>
      {/* Right Section with Lottie Animation (stacked on top for small screens) */}
      <div className="order-1 md:order-none flex justify-center w-full md:w-1/3 lg:w-1/2 mb- md:mb-0">
        <Lottie 
          animationData={HomePageLottie} 
          loop={true} 
          autoplay={true} 
          className="w-72 h-72 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]" // Adjust sizes for medium and large screens
        />
      </div>
    </div>
  );
}

export default HomePage;
