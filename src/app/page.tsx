import Hero from "~/components/Hero";
import About from "~/components/About";
import Projects from "~/components/Projects";

export default function Home() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <Hero />
        <div className="border-t border-primary-black" />
        <About />
        <Projects />
      </div>
    </div>
  );
}
