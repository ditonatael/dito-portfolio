"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Experiences() {
  const workExperience = [
    {
      title: "Frontend Developer Internship at Elemes Group",
      images: [
        "/assets/certificate/elemes-certificate.webp",
        "/assets/certificate/elemes-certificate-2.webp",
      ],
      description: `During my internship at PT Lingkar Indonesia Mengajar as a Frontend Developer, 
I had the opportunity to work on multiple projects that required implementing responsive designs and integrating APIs.

My main responsibilities included converting Figma designs into fully responsive web pages and collaborating with backend developers to integrate APIs seamlessly. Additionally, I aimed to enhance my understanding of Vue, Nuxt, and GitHub collaboration.

To achieve this, I:
• Developed and optimized responsive UIs using Vue and Nuxt.
• Worked closely with backend developers to ensure smooth API integration.
• Gained hands-on experience in GitHub collaboration, including branching, pull requests, and code reviews.

By the end of my internship, I had successfully contributed to several projects, improved my proficiency in Vue and Nuxt, and developed a deeper understanding of team-based development workflows. 
This experience strengthened my technical skills and ability to collaborate effectively in a development team.`,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div id="experience" className="py-20 lg:px-16">
      <h2
        data-aos="zoom-in"
        className="text-center text-4xl font-bold text-gray-900 mb-10"
      >
        Work Experience
      </h2>
      {workExperience.map((experience, index) => (
        <div
          data-aos="zoom-in"
          key={index}
          className="flex flex-col lg:flex-row items-center gap-10 bg-base-cream p-1 md:p-8 rounded-xl shadow-lg"
        >
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-4">
            {experience.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-40 md:h-96 rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt="Experience Certificate"
                  fill
                  sizes="fill"
                  className="rounded-lg object-contain"
                />
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 text-gray-800">
            <h3 className="text-2xl font-semibold text-gray-900 text-center lg:text-left mb-4">
              {experience.title}
            </h3>
            <p className="text-justify leading-relaxed text-gray-700">
              {experience.description.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
