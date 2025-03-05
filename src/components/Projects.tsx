import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Projects() {
  const projects = [
    {
      title: "Roomer - Property Renting App",
      images: ["/roomer.webp", "/roomer-profile.webp"],
      description:
        "In the Roomer project, I developed a property renting app using Firebase Auth for secure signup/signin, including social media accounts like Google. I implemented role-based authorization, user profile management, and dynamic listing features, including seasonal pricing and availability management. This created a secure, user-friendly platform for property management.",
      link: "https://roomer.purwadhikabootcamp.com/",
    },
    {
      title: "Efnote Company Profile",
      images: ["/efnote.webp", "/efnote-product.webp"],
      description:
        "I developed a comprehensive company profile website aimed at enhancing their online presence and showcasing their products. My task was to create a user-friendly website. I focused on designing an intuitive website layout that facilitated easy navigation and information accessibility.",
      link: "https://next-efnote.vercel.app/",
    },
  ];

  return (
    <div className="py-7 flex flex-col gap-7">
      <h2 className="text-center text-4xl font-semibold text-black mb-6">
        Projects
      </h2>
      <div>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {projects.map((project, index) => {
              return (
                <CarouselItem key={index}>
                  <div className="h-auto w-full bg-base-light-blue rounded-md flex flex-col gap-2 p-4 pb-8">
                    <div className="flex gap-4">
                      {project.images.map((image, index) => {
                        return (
                          <div
                            key={index}
                            className="w-1/2 h-[400px] bg-base-light-gray p-4 pb-8 rounded-md"
                          >
                            <div className="w-full h-full relative rounded-lg">
                              <Image
                                key={index}
                                src={image}
                                alt="project"
                                quality={100}
                                className="rounded-md"
                                fill
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <Accordion type="single" collapsible>
                      <AccordionItem value={project.title}>
                        <AccordionTrigger className="decoration-[#F4EBD0] hover:cursor-pointer">
                          <div className="pl-2 text-2xl text-[#F4EBD0] font-bold w-fit">
                            {project.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-3 text-white">
                          <div className="mb-6">{project.description}</div>
                          <Link
                            href={project.link}
                            target="_blank"
                            className="hover:cursor-pointer hover:underline"
                          >
                            <span>Click to See {project.title}</span>
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
            variant={"link"}
            className="hover:cursor-pointer text-black"
          />
          <CarouselNext
            variant={"link"}
            className="hover:cursor-pointer text-black"
          />
        </Carousel>
      </div>
    </div>
  );
}
