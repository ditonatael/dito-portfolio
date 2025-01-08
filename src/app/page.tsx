import HeroSection from "~/components/HeroSection";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-950 from-10% to-slate-950 to-90%">
      <div className="container mx-auto">
        <HeroSection />
      </div>
      <div className="relative w-full">
        <Marquee className="w-fit text-white text-7xl font-bold whitespace-nowrap pt-4 absolute bottom-0">
          {Array(5)
            .fill("Handito Natael")
            .map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-7">
                  <span className="px-4 text-stroke text-stroke-white text-transparent font-mono">
                    {item}
                  </span>
                  <span className="px-4 text-stroke text-stroke-white text-transparent font-mono">
                    {item}
                  </span>
                  <span className="px-4 text-stroke text-stroke-white text-transparent font-mono">
                    {item}
                  </span>
                </div>
              );
            })}
        </Marquee>
      </div>
    </div>
  );
}
