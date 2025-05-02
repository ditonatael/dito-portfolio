import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({
  props,
}: {
  props: {
    video: string;
    image: string;
    title: string;
    desc: string;
    tech: string[];
    website: string;
    source: string;
  };
}) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link href={props.website || "#"} target="_blank">
        {props.video && (
          <video
            src={props.video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {props.image && (
          <Image
            src={props.image}
            alt={props.title}
            width={500}
            height={300}
            className="h-48 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="">
          <CardTitle className="mt-1 text-base mb-1">{props.title}</CardTitle>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {props.desc}
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-1.5 flex flex-col px-2">
        {props.tech && props.tech.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {props.tech?.map((tech) => (
              <Badge className="p-1 text-[10px]" variant="secondary" key={tech}>
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2 mt-1.5">
        <div className="flex flex-row flex-wrap items-start gap-1">
          {props.website && (
            <Link href={props.website} target="_blank">
              <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                <FaExternalLinkAlt />
                Website
              </Badge>
            </Link>
          )}
          {props.source && (
            <Link href={props.source} target="_blank">
              <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                <FaGithub />
                Source
              </Badge>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
