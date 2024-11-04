import React from "react";
import IconCloud from "./icon-cloud.tsx";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "supabase",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  'tensorflow',
  'pytorch',
  'python',
];

export default function IconCloudComp() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-8 md:px-0 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
