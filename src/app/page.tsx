import BlogCard from "@/components/BlogCard";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { TracingBeam } from "@/components/TracingBeam";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { allBlogs, Blog } from "contentlayer/generated";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const words = [
    {
      text: "Oh,",
      className: "text-4xl text-white font-extrabold mb-4",
    },
    {
      text: "hello",
      className: "text-4xl text-white font-extrabold mb-4",
    },
    {
      text: "there",
      className: "text-4xl text-white font-extrabold mb-4",
    },
  ];

  const textToGenerate =
    "This blog will serve as a home for all my thoughts, notes and experiences, ranging from programming to math, machine learning, web development and more. Scroll down and check ‘em out!";

  return (
    <TracingBeam className="text-sky-200">
      <TypewriterEffect words={words} />

      <div className="text-[rgb(177,177,177)] dark:text-black leading-7">
        <p>
          👨‍🎓 I’m{" "}
          <span className="underline underline-offset-2">Suyash Patil</span>, a
          20 year-old student.
        </p>
        <p>
          👨‍💻 A self taught programmer, footballer and a lover of all things
          tech.
        </p>
        <p>⚒️ I mainly work with Java, TypeScript and Rust on a daily basis.</p>
        <p>🏡 Currently living in the beautiful city of Bengaluru in India.</p>

        <div className="flex mt-6 gap-4">
          <Link
            className="hover:text-white"
            href="https://github.com/SuyashPatil-29"
          >
            <Github />
          </Link>
          <Link
            className="hover:text-white"
            href="https://twitter.com/_suyashpatil"
          >
            <Twitter />
          </Link>
          <Link
            className="hover:text-white"
            href="https://www.linkedin.com/in/suyash-patil-1921b0202/"
          >
            <Linkedin />
          </Link>
        </div>

        <TextGenerateEffect words={textToGenerate} />

        <h1 className="mt-10 text-3xl text-white font-bold mb-6">Blogs</h1>

        <div className="grid grid-cols-1 gap-3">
          {allBlogs
            .slice()
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map((blog: Blog) => (
              <BlogCard
                title={blog.title}
                key={blog._id}
                description={blog.description!}
                href={`/archive/${blog.slugAsParams}`}
              />
            ))}
        </div>
      </div>
    </TracingBeam>
  );
}
