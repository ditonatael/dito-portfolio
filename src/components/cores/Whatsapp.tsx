import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function WhatsappButton() {
  return (
    <div className="flex justify-end items-center sticky bottom-4 pr-4 mb-4">
      <Link
        href={
          "https://api.whatsapp.com/send/?phone=6289668247663&text&type=phone_number&app_absent=0"
        }
        target="_blank"
      >
        <div className="size-14 bg-green-500 rounded-full flex items-center justify-center text-white hover:cursor-pointer">
          <FaWhatsapp size={35} />
        </div>
      </Link>
    </div>
  );
}
