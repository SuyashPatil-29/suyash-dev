"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function BlogCard({ title, description, href }:{title : string, description : string, href:string}) {
  // const tags = ["GitHub", "React", "JamStack"];
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <a
      className="group mb-4 rounded-2xl transition duration-200 relative bg-[rgb(41,41,47)] text-white w-full"
      href={href}
      aria-label={title}
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="relative h-full md:p-6 p-4">
        <h1 className="text-xl font-semibold md:p-2 md:pl-0">{title}</h1>
        <p>{description.substring(0,150)}...</p>
      </div>
    </a>
  );
}

function HoverPattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/40 to-rose-300/40 opacity-0 transition duration-300 group-hover:opacity-100 border-gradient"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100 border-gradient"
        style={style}
      ></motion.div>
    </div>
  );
}
