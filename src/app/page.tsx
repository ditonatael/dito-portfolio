"use client";
import Stack from "~/blocks/Components/Stack/Stack";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const images = [
    {
      id: 1,
      img: "/assets/project/depop-mockup.webp",
    },
    {
      id: 2,
      img: "/assets/project/roomer-mockup.webp",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return !isLoaded ? (
    <div>Loading...</div>
  ) : (
    <div className="flex flex-col min-h-[100dvh] space-y-10 pt-14">
      <div className="mx-auto w-full max-w-2xl">
        {/* Hero */}
        <div className="gap-2 flex justify-between items-center space-y-8">
          <div className="flex-col flex flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              Hi, I&apos;m Dito 👋
            </h1>
            <p className="max-w-[600px] md:text-xl text-justify">
              Proven Full Stack Web Developer with a track record of developing
              efficient and scalable applications.
            </p>
          </div>
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 150, height: 150 }}
            cardsData={images}
          />
        </div>
        {/* About */}
        <h2 className="text-xl font-bold">About</h2>
        <span className="text-zinc-700 text-sm">
          In early 2024, I began my full-stack web development journey at{" "}
          <Link href={"/"} className="text-black font-semibold underline">
            Purwadhika
          </Link>
          , where I built a solid foundation in modern technologies like{" "}
          <Link href={"/"} className="text-black font-semibold underline">
            React, Next.js, Node.js, and Express.
          </Link>{" "}
          Now, as an Informatics Engineering student at{" "}
          <Link href={"/"} className="text-black font-semibold underline">
            Buddhi Dharma
          </Link>{" "}
          University, I’m focused on creating responsive, scalable, and
          user-friendly web applications. I thrive on learning, collaborating,
          and turning ideas into clean, impactful digital experiences.
        </span>
      </div>
    </div>
  );
}
