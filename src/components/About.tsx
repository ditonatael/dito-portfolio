import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="w-full h-full pt-20 pb-7 flex flex-col gap-10">
      <h2 className="text-center text-4xl font-bold text-[#333]">About Me</h2>
      <div className="flex gap-12 items-center">
        <span className="w-1/2 text-justify font-medium text-lg">
          I'm a Full-Stack Web Developer and an undergraduate student at Buddhi
          Dharma University, majoring in Informatics Engineering. My web
          development journey took off at Purwadhika, where I built a strong
          foundation in modern web technologies. I specialize in developing
          responsive and scalable web applications using front-end technologies
          like React and Next.js, alongside back-end technologies such as
          Node.js and Express.js.
          <br />
          <br />
          Passionate about learning and collaboration, I stay up to date with
          the latest technologies to deliver high-quality web solutions.
        </span>
        <div className="w-1/2 h-[400px] bg-base-light-blue rounded-md p-10 shadow-lg">
          <div className="w-full h-full relative ">
            <Image
              src={"/ditonatael.jpg"}
              fill
              quality={100}
              alt="image"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
