import Image from "next/image";

export default function Experiences() {
  const workExperience = [
    {
      title: "Frontend Developer Internship at Elemes Group",
      images: ["/elemes-certificate.webp", "/elemes-certificate.webp"],
      description: `During my internship at PT Lingkar Mengajar Indonesia as a Frontend Developer, 
I had the opportunity to work on multiple projects that required implementing responsive designs and integrating APIs.

My main responsibilities included converting Figma designs into fully responsive web pages and collaborating with backend developers to integrate APIs seamlessly. Additionally, I aimed to enhance my understanding of Vue, Nuxt, and GitHub collaboration.

To achieve this, I:
- Developed and optimized responsive UIs using Vue and Nuxt.
- Worked closely with backend developers to ensure smooth API integration.
- Gained hands-on experience in GitHub collaboration, including branching, pull requests, and code reviews.

By the end of my internship, I had successfully contributed to several projects, improved my proficiency in Vue and Nuxt, and developed a deeper understanding of team-based development workflows. 
This experience strengthened my technical skills and ability to collaborate effectively in a development team.`,
    },
  ];

  return (
    <div className="py-7 flex flex-col gap-7">
      <h2 className="text-center text-4xl font-semibold text-black mb-6">
        Work Experience
      </h2>
      {workExperience.map((experience, index) => {
        return (
          <div key={index} className="flex items-start">
            <div className="w-1/2 h-auto bg-[#F4EBD0] rounded-md flex flex-col gap-4 px-10 py-7">
              {experience.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-80 bg-base-light-blue rounded-lg p-4"
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={image}
                        alt="experience"
                        fill
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-1/2 h-auto flex flex-col pt-7">
              <h3 className="text-2xl text-center font-medium text-base-light-gray mb-5">
                {experience.title}
              </h3>
              <span className="pl-6 text-justify text-black font-medium">
                {experience.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
