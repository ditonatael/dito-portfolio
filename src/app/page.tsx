import Hero from "~/components/Hero";
import About from "~/components/About";
import Projects from "~/components/Projects";

export default function Home() {
  return (
    <div className="bg-base">
      <div className="container mx-auto">
        <Hero />
        <div className="border-t border-base-black" />
        <About />
        <Projects />
      </div>
    </div>
  );
}
