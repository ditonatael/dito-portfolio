import Link from "next/link";

export default function About() {
  return (
    <div>
      <h2 className="text-2xl font-bold">About</h2>
      <span className="text-zinc-700 text-sm">
        In early 2024, I began my full-stack web development journey at{" "}
        <Link href={"/"} className="text-black font-semibold underline">
          Purwadhika
        </Link>
        , where I built a solid foundation in modern technologies like{" "}
        <Link href={"/"} className="text-black font-semibold underline">
          React, Next.js, Node.js, and Express.
        </Link>{" "}
        Now, as an Informatics Engineering student at{" "}
        <Link href={"/"} className="text-black font-semibold underline">
          Buddhi Dharma
        </Link>{" "}
        University, I’m focused on creating responsive, scalable, and
        user-friendly web applications. I thrive on learning, collaborating, and
        turning ideas into clean, impactful digital experiences.
      </span>
    </div>
  );
}
