import React from "react";
import { SheetDemo } from "./SheetDemo";
import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Header = () => {
  return (
    // <div className="h-[60px] border-b-[1px] flex items-center px-4 justify-between bg-white">
    <div className="h-[60px] border-b-[1px] flex items-center px-4 justify-between bg-white backdrop-blur-md bg-opacity-75">
      <Link href="/">
        <Image
          width={180}
          height={40}
          src="/images/logo.png"
          alt="Logo"
          className="w-[160px] cursor-pointer"
        />
      </Link>
      <div className="sm:flex justify-center items-center gap-4 hidden ">
        <Link href="/">
          <p className="text-sm hover:opacity-85">Home</p>
        </Link>
        <Link href="/category">
          <p className="text-sm hover:opacity-85">Category</p>
        </Link>
        <Link href="/about-us">
          <p className="text-sm hover:opacity-85">About Us</p>
        </Link>

        <Link href="/contact-us">
          <p className="text-sm hover:opacity-85">Contact Us</p>
        </Link>
      </div>
      <div className=" flex justify-center gap-2">
        <a
          href="https://wa.me/919636537466"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          <WhatsAppIcon
            className="hover:opacity-90 transition-opacity"
            style={{ height: "36px", width: "36px" }}
          />
        </a>
        <div className="block sm:hidden">
          <SheetDemo />
        </div>
      </div>
    </div>
  );
};

export default Header;
