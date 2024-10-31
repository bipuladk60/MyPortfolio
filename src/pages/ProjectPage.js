import React from 'react';
import { RetroGrid } from '../components/magicui/RetroGrid';
import ProjectContainer from '../components/ProjectContainer';
function ProjectPage() {
  return (
    <div className="relative bg-bg font-heading text-text min-h-screen flex flex-col items-center justify-center w-full overflow-hidden">
       <RetroGrid className=" absolute z-0" />
       <ProjectContainer className="relative z-10 md:p-8 lg:p-8 p-4" />
    </div>
  );
}

export default ProjectPage;