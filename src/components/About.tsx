"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div id="about" className="w-full h-full pt-20 pb-7 flex flex-col gap-10">
      <h2
        data-aos="zoom-in"
        className="text-center text-4xl font-bold text-[rgb(51,51,51)]"
      >
        About Me
      </h2>
      <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row items-center justify-center gap-12">
        <span
          data-aos="fade-right"
          className="w-full lg:w-1/2 text-justify font-medium text-lg"
        >
          I'm a Full-Stack Web Developer and an undergraduate student at Buddhi
          Dharma University, majoring in Informatics Engineering. My web
          development journey took off at Purwadhika, where I built a strong
          foundation in modern web technologies. I specialize in developing
          responsive and scalable web applications using front-end technologies
          like React and Next.js, alongside back-end technologies such as
          Node.js and Express.js.
          <br />
          <br />
          Passionate about learning and collaboration, I stay up to date with
          the latest technologies to deliver high-quality web solutions.
        </span>
        <div
          data-aos="fade-left"
          className="w-full lg:w-1/2 h-[400px] bg-base-light-blue rounded-md p-10 shadow-lg"
        >
          <div className="w-full h-full relative ">
            <Image
              src={"/ditonatael.jpg"}
              fill
              quality={100}
              alt="image"
              sizes="fill"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
