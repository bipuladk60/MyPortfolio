import React from "react";
import { SiHtml5, SiPython, SiJavascript, SiReact, SiTailwindcss, SiPytorch, SiTensorflow, SiNumpy, SiSwift} from 'react-icons/si'
import {FaNodeJs, FaAws} from 'react-icons/fa'
import Marquee from "react-fast-marquee";



const MarqueeComp = () => (
 <div className="w-screen h-24 bg-bg flex items-center">
  <Marquee speed={50} gradient={false}>
    <div className="flex space-x-[6rem] text-primary lg:text-[7rem] lg:text-[6rem] text-[4rem]">
        <SiPython h-16 w-auto/>
        <SiHtml5 h-16 w-auto/>
        <SiJavascript h-16 w-auto/>
        <SiReact h-16 w-auto/>
        <SiTailwindcss h-16 w-auto/>
        <SiPytorch h-16 w-auto/>
        <SiTensorflow h-16 w-auto/>
        <SiNumpy h-16 w-auto/>
        <SiSwift h-16 w-auto/>
        <FaNodeJs h-16 w-auto/>
        <FaAws h-16 w-auto/>
            
    </div>
  </Marquee>
</div>
);

export default MarqueeComp;
