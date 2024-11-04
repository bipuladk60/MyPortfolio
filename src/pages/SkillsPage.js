import React from 'react';

import SkillBar from '../components/SkillBar'
import IconCloudComp from '../components/magicui/IconCloud.tsx';
import Quote from '../components/quote';


function SkillsPage() {


  return (
    <div className="bg-bg text-text min-h-screen flex flex-row flex-wrap items-center justify-around w-full px-4">
    <Quote 
            Header="Skills"
            Body="If there's a skill I don't have yet, it just means I haven't tackled it—yet. Learning is always on the horizon."
        />
      <SkillBar />
      <div>
      <IconCloudComp />
      </div>
    </div>
  );
}

export default SkillsPage;