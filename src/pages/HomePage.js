import React from 'react';
import Lottie from 'lottie-react';
import HomePageLottie from "../lotties/HomePageLottie.json";

function HomePage() {
  return (
    <div className="bg-bg text-text min-h-[85vh] flex flex-col md:flex-row items-center justify-between w-full pl-12 pr-4 md:pl-16 md:pr-8">
      
      {/* Right Section with Lottie Animation (stacked on top for small screens) */}
     

      {/* Center Content (comes below animation on small screens) */}
      <div className="order-2 md:order-none flex flex-col items-center md:items-start w-full md:w-2/3 lg:w-1/2 space-y-4 text-center md:text-left py-2">
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-text font-bold px-2">
          Hey! This is <span className="text-highlight text-primary ">Bipul</span>, an aspiring <span className="text-highlight text-primary">Software Engineer</span>
        </h1>
        <p className="font-body text-md md:text-xl text-text">
          Curious, Passionate, and Hardworking
        </p>
        
        {/* Button Row */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-primary text-white font-body py-2 px-4 rounded-button hover:bg-secondary transition-colors">
            Github
          </button>
          <button className="bg-primary text-white font-body py-2 px-4 rounded-button hover:bg-secondary transition-colors">
            LinkedIn
          </button>
        </div>
      </div>
      <div className="order-1 md:order-none flex justify-center w-full md:w-1/3 lg:w-1/2 mb-8 md:mb-0">
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
