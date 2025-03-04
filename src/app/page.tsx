import Hero from "~/components/Hero";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <Hero />
        <div className="border-t border-primary-black" />
        <div className="py-7 flex">
          <span className="w-1/2 text-justify font-medium text-lg">
            I'm a Full-Stack Web Developer and an undergraduate student at
            Buddhi Dharma University, majoring in Informatics Engineering. My
            web development journey took off at Purwadhika, where I built a
            strong foundation in modern web technologies. I specialize in
            developing responsive and scalable web applications using front-end
            technologies like React and Next.js, alongside back-end technologies
            such as Node.js and Express.js.
            <br />
            <br />
            Passionate about learning and collaboration, I stay up to date with
            the latest technologies to deliver high-quality web solutions.
          </span>
        </div>
      </div>
    </div>
  );
}
