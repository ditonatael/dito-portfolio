"use client";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import About from "~/components/About";
import WorkExperience from "~/components/WorkExperience";
import Education from "~/components/Education";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return !isLoaded ? (
    <></>
  ) : (
    <div className="min-h-[100dvh] pt-14 px-4 md:px-0">
      <div className="mx-auto w-full max-w-2xl flex flex-col gap-4">
        <Hero />
        <About />
        <WorkExperience />
        <Education />
      </div>
    </div>
  );
}
