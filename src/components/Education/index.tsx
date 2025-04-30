import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";

export default function Education() {
  const educationData = [
    {
      univ: "Buddhi Dharma University",
      studyField: "Bachelor of Engineering - BE, Informatics",
      logo: "/assets/education/buddhi-dharma-logo.webp",
      date: "Aug 2024 - Present",
    },
    {
      univ: "Purwadhika",
      studyField: "Full-stack Web Development",
      logo: "/assets/education/purwadhika-logo.webp",
      date: "Jan - Jun 2024",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold">Education</h2>
      <div className="flex flex-col gap-4 mt-3">
        {educationData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center w-full group"
            >
              <div className="flex items-center gap-4">
                <div className="size-12 relative">
                  <Image
                    src={item.logo}
                    alt="Education Logo"
                    fill
                    loading="lazy"
                    quality={100}
                    className="rounded-full"
                    sizes="full"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-base inline-flex items-center">
                    {item.univ}
                    <ChevronDownIcon className="size-4 transform transition-all duration-300 -rotate-90 -translate-x-0.5 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100 group-data-[state=open]:rotate-0" />
                  </h3>
                  <span className="font-light text-sm">{item.studyField}</span>
                </div>
              </div>
              <div className="text-muted-foreground">{item.date}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
