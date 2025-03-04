"use client";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <div className="h-screen flex items-center">
      <div className="flex flex-col gap-2.5">
        <span className="text-5xl font-bold text-primary-black">
          Hello 👋, I'm Handito Natael
        </span>
        <span className="text-4xl text-primary-blue font-bold flex gap-2">
          <p>I'm a</p>
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </span>
        <span>
          Proven Full Stack Web Developer with a track record of developing{" "}
          <br />
          efficient and scalable applications.
        </span>
        <span className="flex gap-2.5">
          <button className="w-28 h-10 border-2 border-primary-black rounded-full">
            Contact Me
          </button>
          <button className="w-28 h-10 border-2 border-primary-black rounded-full">
            My Portfolio
          </button>
        </span>
      </div>
    </div>
  );
}
