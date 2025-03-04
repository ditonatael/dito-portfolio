import HeroSection from "~/components/HeroSection";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <HeroSection />
      </div>
    </div>
  );
}
