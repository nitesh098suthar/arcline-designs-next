import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { SheetDemo } from "./SheetDemo";
import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Header = () => {
  //   const navLinks = [
  //     { href: "/", label: "Home" },
  //     { href: "/category/all", label: "Category" },
  //     { href: "/about-us", label: "About Us" },
  //     { href: "/contact-us", label: "Contact Us" },
  //   ];

  return (
    <div className="h-[56px] border-b-[1px] flex items-center px-4 justify-between">
      <Image
        width={120}
        height={40}
        src="/images/logo.png"
        alt="Logo"
        className="w-[120px] cursor-pointer"
      />
      <div className="sm:flex justify-center items-center gap-4 hidden ">
        <Link href="/">
          <p className="">Home</p>
        </Link>
        <p className="">Category</p>
        <p className="">About Us</p>
        <p className="">Contact Us</p>
      </div>
      <div className=" flex justify-center gap-2">
        <a
          href="https://wa.me/919636537466"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          <WhatsAppIcon
            className="rounded-md border-[1px] border-border p-1 hover:cursor-pointer hover:bg-secondary"
            style={{ height: "36px", width: "36px" }}
          />
          {/* <p className="hidden sm:block">Whatsapp</p> */}
        </a>
        <div className="block sm:hidden">
          <SheetDemo />
        </div>
      </div>
    </div>
  );
};

export default Header;
