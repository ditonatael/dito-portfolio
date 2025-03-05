import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/legacy/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Roomer - Property Renting App",
      images: ["/roomer.webp", "/roomer-profile.webp"],
      link: "https://roomer.purwadhikabootcamp.com/",
    },
    {
      title: "Efnote Company Profile",
      images: ["/efnote.webp", "/efnote-product.webp"],
      link: "https://next-efnote.vercel.app/",
    },
  ];

  return (
    <div className="py-7 flex flex-col gap-7">
      <div className="text-center text-4xl font-bold text-black">My Works</div>
      <div>
        <Carousel>
          <CarouselContent>
            {projects.map((project, index) => {
              return (
                <CarouselItem key={index}>
                  <div className="h-full w-full bg-base-blue rounded-lg flex flex-col gap-2 p-4 pb-8">
                    <div className="flex gap-4">
                      {project.images.map((image, index) => {
                        return (
                          <div
                            key={index}
                            className="w-1/2 h-[400px] bg-amber-950 p-4 pb-8 rounded-lg"
                          >
                            <div className="w-full h-full relative">
                              <Image
                                key={index}
                                src={image}
                                fill
                                alt="project"
                                quality={100}
                                objectFit="cover"
                                className="rounded-md"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <Link href={project.link} target="_blank">
                      <Button
                        variant={"link"}
                        className="pl-2 text-2xl text-white font-bold hover:cursor-pointer"
                      >
                        {project.title}
                      </Button>
                    </Link>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
