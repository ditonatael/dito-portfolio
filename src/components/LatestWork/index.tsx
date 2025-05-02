import ProjectCard from "./PorjectCard";

export default function LatestWork() {
  const projects = [
    {
      video: "",
      image: "/assets/project/roomer.webp",
      title: "Roomer - Accommodation Booking App",
      desc: "In the Roomer project, I developed a property renting app using Firebase Auth for secure signup/signin, including social media accounts like Google. I implemented role-based authorization, user profile management, and dynamic listing features, including seasonal pricing and availability management. This created a secure, user-friendly platform for property management.",
      tech: [
        "Typescript",
        "Next.js",
        "Express.js",
        "Prisma",
        "TailwindCSS",
        "ShadcnUI",
        "Redux",
      ],
      website: "https://roomer.purwadhikabootcamp.com/",
      source: "",
    },
    {
      video: "",
      image: "/assets/project/depop.webp",
      title: "Depop - Online Thrifting Platform",
      desc: "I built a Depop-inspired online thrifting platform using Next.js as the framework. I focused on UI slicing to ensure a responsive design, optimizing the user experience across mobile screens. For data storage, I integrated Firestore to manage product listings and user data. The platform includes authentication features, allowing users to sign up and sign in using email credentials.",
      tech: ["Typescript", "Next.js", "Firebase", "TailwindCSS", "ShadcnUI"],
      website: "https://next-depop.vercel.app/",
      source: "https://github.com/ditonatael/mini-project.git",
    },
    {
      video: "",
      image: "/assets/project/kopikampung.webp",
      title: "KopiKampung",
      desc: "A modern, responsive coffee brand website built to showcase products, brand story, and team, with dynamic data handled via a custom backend using json-server.",
      tech: ["Typescript", "Next.js", "TailwindCSS", "ShadcnUI"],
      website: "",
      source: "https://github.com/ditonatael/company-profile.git",
    },
    {
      video: "",
      image: "/assets/project/efnote.webp",
      title: "Efnote Company Profile",
      desc: "I developed a comprehensive company profile website aimed at enhancing their online presence and showcasing their products. My task was to create a user-friendly website. I focused on designing an intuitive website layout that facilitated easy navigation and information accessibility.",
      tech: ["Typescript", "Next.js", "TailwindCSS", "DaisyUI", "Axios"],
      website: "https://next-efnote.vercel.app/",
      source: "https://github.com/ditonatael/next-efnote.git",
    },
  ];
  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Check out my latest work
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;ve worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-12">
        {projects.map((projects, i) => {
          return <ProjectCard key={i} props={projects} />;
        })}
      </div>
    </div>
  );
}
