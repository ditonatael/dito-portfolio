import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { Button } from "../ui/button";

interface Project {
  title: string;
  images: string[];
  description: string;
  link: string;
}

export default function ProjectAccordion({ project }: { project: Project }) {
  return (
    <Accordion type="single" collapsible className="mt-6">
      <AccordionItem value={project.title}>
        <AccordionTrigger className="text-lg text-white font-semibold hover:cursor-pointer">
          {project.title}
        </AccordionTrigger>
        <AccordionContent className="text-white font-medium text-justify">
          <p className="mb-4">{project.description}</p>
          <Link href={project.link} target="_blank">
            <Button className="bg-base-black text-white hover:bg-gray-800 hover:cursor-pointer rounded-full">
              View Project
            </Button>
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
