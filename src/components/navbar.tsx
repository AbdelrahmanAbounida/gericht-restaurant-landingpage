import React from "react";
import Logo from "./logo";
import Link from "next/link";

const Navbar = () => {
  const NAV_LINKS = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Pages",
      link: "#pages",
    },
    {
      title: "Contact Us",
      link: "#contact",
    },
    {
      title: "Blog",
      link: "#blog",
    },
    {
      title: "Landing",
      link: "#landing",
    },
  ];
  return (
    <div className="container max-w-7xl mx-auto p-[16px] ">
      <div className="flex items-center justify-between gap-1 ">
        <Logo />

        {/** navs */}
        <div className="text-white/80  text-md flex items-center justify-between gap-[32px]  ">
          {NAV_LINKS.map((nav, index) => (
            <Link className="hover:text-white" href={nav.link} key={index}>
              {nav.title}
            </Link>
          ))}
        </div>

        {/** login, book */}
        <div className="text-white flex items-center text-white/80 text-md">
          <Link className="hover:text-white" href={"#login"}>
            Log In / Registeration
          </Link>
          <div className="w-[100px] h-[50px] flex items-center justify-center ">
            <div className="w-[1px] h-full bg-gray-100 bg-gradient-to-b from-black via-white to-black"></div>
          </div>

          <Link className="hover:text-white" href={"#login"}>
            Book table
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
