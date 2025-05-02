import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Separator } from "~/components/ui/separator";

export default function Navbar() {
  const socialLinks = [
    {
      icon: <FaGithub className="size-6" />,
      url: "https://github.com/ditonatael",
    },
    {
      icon: <FaLinkedin className="size-6" />,
      url: "https://www.linkedin.com/in/handito-natael-83268028b/",
    },
    {
      icon: <IoIosMail className="size-6" />,
      url: "mailto:nataelhandito@gmail.com",
    },
    {
      icon: <IoLogoWhatsapp className="size-6" />,
      url: "https://api.whatsapp.com/send/?phone=6289668247663&text&type=phone_number&app_absent=0",
    },
  ];
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <div className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-full">
        <Link href={"/"} className="size-12 flex items-center justify-center">
          <AiOutlineHome className="size-6" />
        </Link>
        <Separator orientation="vertical" className="h-full" />
        {socialLinks.map((link, i) => {
          return (
            <Link
              key={i}
              href={link.url}
              target="_blank"
              className="size-12 flex items-center justify-center"
            >
              {link.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
