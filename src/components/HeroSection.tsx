"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  const techStack = [
    {
      title: "Javascript",
      icon: "/javascript.webp",
    },
    {
      title: "Typescript",
      icon: "/typescript.webp",
    },
    {
      title: "React",
      icon: "/react.webp",
    },
    {
      title: "NextJS",
      icon: "/nextjs.webp",
    },
    {
      title: "VueJS",
      icon: "/vuejs.webp",
    },
    {
      title: "NuxtJs",
      icon: "/nuxtjs.webp",
    },
    {
      title: "TailwindCSS",
      icon: "/tailwind.webp",
    },
    {
      title: "Redux",
      icon: "/redux.webp",
    },
    {
      title: "React Query",
      icon: "/reactquery.webp",
    },
    {
      title: "NodeJS",
      icon: "/nodejs.webp",
    },
    {
      title: "ExpressJS",
      icon: "/express.webp",
    },
    {
      title: "MySQL",
      icon: "/mysql.webp",
    },
    {
      title: "Prisma",
      icon: "/prisma.webp",
    },
    {
      title: "Git/Github",
      icon: "/github.webp",
    },
    {
      title: "Postman",
      icon: "/postman.webp",
    },
    {
      title: "FirebaseAuth",
      icon: "/firebase.webp",
    },
  ];

  return (
    <div className="h-screen flex items-center">
      <div className="w-1/2 flex flex-col gap-2.5">
        <span className="text-5xl font-bold text-primary-black">
          Hello 👋, I'm Handito Natael
        </span>
        <span className="text-4xl text-primary-blue font-bold flex gap-2">
          <p>I'm a</p>
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </span>
        <span>
          Proven Full Stack Web Developer with a track record of developing{" "}
          <br />
          efficient and scalable applications.
        </span>
        <span className="flex gap-2.5">
          <button className="w-28 h-10 border-2 border-primary-black rounded-full hover:bg-primary-black hover:text-white font-medium text-sm">
            Contact Me
          </button>
          <button className="w-28 h-10 border-2 border-primary-black rounded-full hover:bg-primary-black hover:text-white font-medium text-sm">
            My Portfolio
          </button>
        </span>
        <div className="pt-2.5">
          <Marquee>
            {techStack.map((item, index) => {
              return (
                <div key={index} className="size-12 relative mx-2">
                  <Image key={index} src={item.icon} fill alt="icon" />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
