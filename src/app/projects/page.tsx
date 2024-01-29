import ProjectCard from "@/components/ProjectCard";
import React from "react";

export const metadata = {
  title: "Projects - Suyash Patil",
};

const page = () => {
  interface Project {
    title: string;
    description: string;
    href: string;
    tags: string[];
  }
  const projects: Project[] = [
    {
      title: "Moonbeam",
      description:
        "Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant.",
      href: "XXXXXXXXXXXXXXXXXXXXXX",
      tags: [
        "Front-end",
        "GPT-3",
        "Next.js",
        "React",
        "TailwindCSS",
        "Chrome Extension",
      ],
    },
    {
      title: "Aceternity",
      description:
        "Building modern applications that scale well and are easy to maintain. Cutting edge websites with a pinch of magic, and a lot of love.",
      href: "XXXXXXXXXXXXXXXXXXXXXX",
      tags: ["Next.js", "React", "TailwindCSS", "Full-Stack"],
    },
    {
      title: "Algochurn",
      description:
        "Practice the most popular algorithmic questions and Front-end interview questions with an interactive IDE and learning environment.",
      href: "XXXXXXXXXXXXXXXXXXXXXX",
      tags: ["Next.js", "React", "TailwindCSS", "Monaco", "Algorithms"],
    },
  ];

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-white">
        Projects
      </h3>

      <div className="grid h-full w-full place-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project: Project, id: number) => {
            return (
              <ProjectCard
                key={id}
                title={project.title}
                description={project.description}
                href={project.href}
                tags={project.tags}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
