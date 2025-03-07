import Hero from "~/components/Hero";
import About from "~/components/About";
import Projects from "~/components/projectSection/Projects";
import Experiences from "~/components/Experiences";

export default function Home() {
  return (
    <div className="bg-base">
      <div className="container mx-auto px-7">
        <Hero />
        <div className="border-t border-base-black mb-5" />
        <About />
        <Projects />
        <Experiences />
      </div>
    </div>
  );
}
