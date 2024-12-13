import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className=" flex items-center">
      <Image src={"/logo.svg"} alt="logo" width={199} height={57} />;
    </Link>
  );
};

export default Logo;
