"use client";
import Stack from "~/blocks/Components/Stack/Stack";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";

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
    {
      id: 3,
      img: "/ditonatael.webp",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return !isLoaded ? (
    <div>Loading...</div>
  ) : (
    <div className="min-h-[100dvh] pt-14 px-4 md:px-0">
      <div className="mx-auto w-full max-w-2xl flex flex-col gap-4">
        {/* Hero */}
        <div className="gap-2 flex justify-between items-center space-y-8">
          <div className="flex flex-col flex-1 space-y-5">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              Hi, I&apos;m Dito 👋
            </h1>
            <span className="max-w-[600px] text-base md:text-xl md:text-justify">
              Proven Full Stack Web Developer with a track record of developing
              efficient and scalable applications.
            </span>
          </div>
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 200, height: 200 }}
            cardsData={images}
          />
        </div>
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold">About</h2>
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
        {/* Work Experience */}
        <div>
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <Accordion type="single" collapsible className="w-full mt-2">
            <AccordionItem value="item-1">
              <AccordionTrigger className="group hover:cursor-pointer">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-4">
                    <div className="size-12 relative">
                      <Image
                        src={"/assets/work/elemes-icon.webp"}
                        alt="company logo"
                        fill
                        loading="lazy"
                        quality={100}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-base inline-flex items-center">
                        Elemes Group
                        <ChevronDownIcon className="size-4 transform transition-all duration-300 -rotate-90 -translate-x-0.5 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100 group-data-[state=open]:rotate-0" />
                      </h3>
                      <span className="font-light text-sm">
                        Front-end Developer {"(Internship)"}
                      </span>
                    </div>
                  </div>
                  <div className="text-muted-foreground">Sept - Dec 2024</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 text-justify tra">
                Converted Figma designs into responsive web pages using Vue and
                Nuxt during an internship at Elemes Group. Integrated APIs in
                collaboration with backend developers and contributed to team
                workflows through GitHub, including branching, pull requests,
                and code reviews. Strengthened frontend skills while gaining
                hands-on experience in collaborative development with modern
                tools and frameworks.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
