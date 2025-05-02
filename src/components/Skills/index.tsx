import { Badge } from "~/components/ui/badge";

export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Vue",
    "Typescript",
    "Express.js",
    "Prisma ORM",
    "Git",
    "MySQL",
    "React Redux",
    "TailwindCSS",
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {skills.map((skill, i) => {
          return (
            <Badge variant={"default"} key={i} className="hover:bg-gray-900">
              {skill}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
