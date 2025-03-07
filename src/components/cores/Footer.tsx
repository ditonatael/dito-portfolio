import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  const socialIcons = [
    { icon: <FaGithub size={35} />, link: "https://github.com/ditonatael" },
    {
      icon: <FaLinkedin size={35} />,
      link: "https://www.linkedin.com/in/handito-natael-83268028b/",
    },
    { icon: <IoMail size={35} />, link: "mailto:nataelhandito@gmail.com" },
  ];
  return (
    <div className="h-56 rounded-t-3xl bg-base-black shadow-2xl">
      <div className="h-full container mx-auto flex items-center justify-between px-7">
        <div className="flex flex-col w-1/2 gap-4">
          <div className="text-white text-2xl lg:text-5xl font-extrabold">
            Let&apos;s Work Together !
          </div>
          <div className="flex gap-4">
            {socialIcons.map((icon, index) => {
              return (
                <Link key={index} href={icon.link} target="_blank">
                  <div className="size-12 bg-white rounded-full flex items-center justify-center hover:cursor-pointer">
                    {icon.icon}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
