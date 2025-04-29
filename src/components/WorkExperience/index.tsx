import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function WorkExperience() {
  return (
    <>
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
            Converted Figma designs into responsive web pages using Vue and Nuxt
            during an internship at Elemes Group. Integrated APIs in
            collaboration with backend developers and contributed to team
            workflows through GitHub, including branching, pull requests, and
            code reviews. Strengthened frontend skills while gaining hands-on
            experience in collaborative development with modern tools and
            frameworks.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
