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
      title: "Pdfile",
      description:
        "Chat with your Document in seconds. Pdfile allwos you to have conversations with any document. Simply upload your file and start asking questions right away.",
      href: "https://pdfileai.vercel.app/",
      tags: [
        "Front-end",
        "GPT-3.5",
        "Next.js",
        "TailwindCSS",
        "Prisma",
        "Pinecone",
        "Supabase",
      ],
    },
    {
      title: "SpenseShop",
      description:
        "Beautiful e-commerce app integrated with Sanity CMS and Firebase for Authentication and Data Storage.",
      href: "https://spenseshop.vercel.app/",
      tags: ["Next.js", "Sanity CMS", "TailwindCSS", "Firebase"],
    },
    {
      title: "Breadit",
      description:
        "A minimal yet beautiful reddit clone where you can create groups, join groups and post messages using the integrated rich text editor.",
      href: "https://breadit-suyash.vercel.app/",
      tags: ["Next.js", "Supabase", "TailwindCSS", "Redis", "Editor"],
    },
    {
      title: "Visualize",
      description:
        "A next gen text to video app. Simply enter your prompt and get stunning high quality videos generated in seconds",
      href: "https://visualize-ten.vercel.app/",
      tags: ["Next.js", "TailwindCSS", "Replicate", "AI", "Supabase", "Prisma"],
    },
  ];

  return (
    <>
      {/* <h3 className="font-bold text-xl md:text-4xl tracking-tight mb-6 text-white">
        Projects
      </h3> */}

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
    </>
  );
};

export default page;
