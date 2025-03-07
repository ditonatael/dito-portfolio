import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import ProjectAccordion from "./projectAccordion";

export default function Projects() {
  const projects = [
    {
      title: "Roomer - Property Renting App",
      images: [
        "/assets/project/roomer.webp",
        "/assets/project/roomer-profile.webp",
      ],
      description:
        "In the Roomer project, I developed a property renting app using Firebase Auth for secure signup/signin, including social media accounts like Google. I implemented role-based authorization, user profile management, and dynamic listing features, including seasonal pricing and availability management. This created a secure, user-friendly platform for property management.",
      link: "https://roomer.purwadhikabootcamp.com/",
    },
    {
      title: "Efnote Company Profile",
      images: [
        "/assets/project/efnote.webp",
        "/assets/project/efnote-product.webp",
      ],
      description:
        "I developed a comprehensive company profile website aimed at enhancing their online presence and showcasing their products. My task was to create a user-friendly website. I focused on designing an intuitive website layout that facilitated easy navigation and information accessibility.",
      link: "https://next-efnote.vercel.app/",
    },
  ];

  return (
    <section id="project" className="py-20 flex flex-col gap-10">
      <h2 className="text-center text-4xl font-bold text-[#333]">Projects</h2>
      <Carousel opts={{ loop: true }} className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="p-4">
              <div className="rounded-lg bg-base-light-blue p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  {project.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative w-full h-[300px] rounded-md overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt="project image"
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
                <ProjectAccordion project={project} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-gray-500 hover:text-black" />
        <CarouselNext className="text-gray-500 hover:text-black" />
      </Carousel>
    </section>
  );
}
