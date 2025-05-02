"use client";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import About from "~/components/About";
import WorkExperience from "~/components/WorkExperience";
import Education from "~/components/Education";
import Skills from "~/components/Skills";
import LatestWork from "~/components/LatestWork";
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return !isLoaded ? (
    <></>
  ) : (
    <div className="min-h-[100dvh] py-14 px-4 md:px-0">
      <div className="mx-auto w-full max-w-2xl flex flex-col gap-6">
        <Hero />
        <About />
        <div className="border"></div>
        <WorkExperience />
        <Education />
        <Skills />
        <LatestWork />
        <div className="space-y-2 text-center mb-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
            Want to chat? Just send me a direct{" "}
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=6289668247663&text&type=phone_number&app_absent=0"
              }
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              message on WhatsApp
            </Link>{" "}
            with a clear question, and I&apos;ll reply when I can. I won&apos;t
            respond to any kind of soliciting.
          </p>
        </div>
      </div>
    </div>
  );
}
