"use client"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function ProjectCard({ title, description, href, tags }) {
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
      className="group mb-4 hover:shadow-lg rounded-xl  transition duration-200 relative border border-slate-700 w-full  min-h-[250px]"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="relative h-full">
        <span className="absolute w-[40%] -bottom-px right-px h-[1px] bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0"></span>
        <span className="absolute w-[1px] -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-400/0 via-blue-400/40 to-blue-400/0"></span>

        <div className="  flex flex-col items-start border-gray-800 rounded p-4 relative">
          {/* */}

          <div className="my-4">
            <>
              <h4 className="text-xl font-bold tracking-tight text-gray-100">
                {title}
              </h4>
              <p className="leading-6 pt-4 text-gray-300">
                {description}
              </p>
              <div className="pt-4 flex md:flex-row flex-wrap">
                {tags?.map((tag:string, idx:number) => (
                  <p
                    key={idx}
                    className={`leading-5 mb-2 border border-gray-500 text-gray-300 bg-transparent rounded-md text-xs italic mr-2 py-[2px] px-1`}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </>
          </div>
        </div>
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
        className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 transition duration-300 group-hover:opacity-100 from-[#435f61]/80 to-[#586048]/80"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}
