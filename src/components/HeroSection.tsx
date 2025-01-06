"use client";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <div className="text-white h-screen flex items-center">
      <div className="flex flex-col gap-1">
        <span className="text-5xl font-bold">Hello 👋, I'm Handito Natael</span>
        <span className="text-4xl tracking-wider font-semibold bg-gradient-to-r from-indigo-600 to-indigo-400 inline-block text-transparent  bg-clip-text">
          <Typewriter
            options={{
              strings: [
                "I'm a Front-end Developer",
                "I'm a Back-end Developer",
                "I'm a Fullstack Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </span>
        <span>
          I'm a Fullstack Developer with experience in website and UI/UX <br />
          Design.
        </span>
      </div>
    </div>
  );
}
