"use client";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";

export default function Hero() {
  const techStack = [
    {
      title: "Javascript",
      icon: "/assets/techstack/javascript.webp",
    },
    {
      title: "Typescript",
      icon: "/assets/techstack/typescript.webp",
    },
    {
      title: "React",
      icon: "/assets/techstack/react.webp",
    },
    {
      title: "NextJS",
      icon: "/assets/techstack/nextjs.webp",
    },
    {
      title: "VueJS",
      icon: "/assets/techstack/vuejs.webp",
    },
    {
      title: "NuxtJs",
      icon: "/assets/techstack/nuxtjs.webp",
    },
    {
      title: "TailwindCSS",
      icon: "/assets/techstack/tailwind.webp",
    },
    {
      title: "Redux",
      icon: "/assets/techstack/redux.webp",
    },
    {
      title: "React Query",
      icon: "/assets/techstack/reactquery.webp",
    },
    {
      title: "NodeJS",
      icon: "/assets/techstack/nodejs.webp",
    },
    {
      title: "ExpressJS",
      icon: "/assets/techstack/express.webp",
    },
    {
      title: "MySQL",
      icon: "/assets/techstack/mysql.webp",
    },
    {
      title: "Prisma",
      icon: "/assets/techstack/prisma.webp",
    },
    {
      title: "Git/Github",
      icon: "/assets/techstack/github.webp",
    },
    {
      title: "Postman",
      icon: "/assets/techstack/postman.webp",
    },
    {
      title: "FirebaseAuth",
      icon: "/assets/techstack/firebase.webp",
    },
  ];

  return (
    <div className="h-screen flex items-center">
      <div className="w-1/2 flex flex-col gap-2.5">
        <h1 className="text-5xl font-bold text-base-black">
          Hello 👋, I'm Handito Natael
        </h1>
        <h2 className="text-4xl text-base-blue font-bold flex gap-2">
          I'm a
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
        </h2>
        <span>
          Proven Full Stack Web Developer with a track record of developing{" "}
          <br />
          efficient and scalable applications.
        </span>
        <span className="flex gap-2.5">
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=6289668247663&text&type=phone_number&app_absent=0"
            }
            target="_blank"
          >
            <Button
              variant={"outline"}
              className="w-28 h-10 border-2 bg-base border-base-black rounded-full hover:bg-base-black hover:text-white font-medium text-sm hover:cursor-pointer"
            >
              Contact Me
            </Button>
          </Link>
          <Button
            variant={"outline"}
            className="w-28 h-10 border-2 bg-base border-base-black rounded-full hover:bg-base-black hover:text-white font-medium text-sm hover:cursor-pointer"
          >
            My Portfolio
          </Button>
        </span>
        <div className="pt-2.5">
          <Marquee>
            {techStack.map((item, index) => {
              return (
                <div key={index} className="size-12 relative mx-2">
                  <Image key={index} src={item.icon} alt="icon" fill />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
