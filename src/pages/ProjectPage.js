import React from 'react';
import { RetroGrid } from '../components/magicui/RetroGrid';
import ProjectContainer from '../components/ProjectContainer';
import Quote from '../components/quote';

function ProjectPage() {
  return (
    <div className="relative bg-bg font-heading text-text min-h-screen flex flex-col lg:items-center items-start justify-end w-full overflow-hidden">
       <RetroGrid className=" absolute z-0" />
        <Quote 
          Header="Projects"
          Body="I have worked on a variety of projects ranging from Web Development to AI/ML. Here are a few of my projects."
          HyperLink={"View More Projects →"}
          Link="https://www.linkedin.com/in/bipul-adhikari/"/>
       <ProjectContainer className="z-10 md:p-8 lg:p-8 p-0" />
    </div>
  );
}

export default ProjectPage;