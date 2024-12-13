import React from "react";
import NewsLetter from "./newsletter";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[url('/about-bg.svg')] bg-cover bg-no-repeat h-[959px] flex w-full items-center justify-center font-cormorant relative">
      <div className="w-full flex flex-col">
        <div className="max-w-5xl flex items-center justify-center  mx-auto z-10  w-full  gap-[90px] relative  ">
          <NewsLetter />
        </div>
        <BottomFooter />
      </div>
    </div>
  );
};

export default Footer;

const BottomFooter = () => (
  <div className="flex flex-col items-center justify-center gap-9 w-full  max-w-5xl mx-auto pt-[100px]">
    <div className="flex items-center justify-between  gap-2 w-full">
      {/** contact col */}
      <div className="flex flex-col gap-5 items-center  justify-center text-center">
        <p className="text-white font-cormorant text-[32px] text-center mx-auto">
          Contact Us
        </p>

        <div className="flex flex-col gap-3 text-gray">
          <p className="">9 W 53rd St, New York, NY 10019, USA</p>

          <div className="flex flex-col gap-1 ">
            <p>+1 212-344-1230</p>
            <p> +1 212-555-1230</p>
          </div>
        </div>
      </div>

      {/** gericht col */}
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-gold font-cormorant text-[64px]">Gerícht</h1>

        <p className="text-white text-[16px] font-sans w-[438px]">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <Image
          src={"/spoon.svg"}
          alt="spoon"
          width={40}
          height={9}
          className="my-7"
        />

        <div className="flex items-center justify-center gap-4 ">
          <Image src={"/facebook.svg"} alt="facebook" width={24} height={24} />
          <Image src={"/twitter.svg"} alt="twitter" width={24} height={24} />
          <Image src={"/insta.svg"} alt="insta" width={24} height={24} />
        </div>
      </div>

      {/** working hours col */}
      <div className="flex flex-col gap-5 items-center  justify-center">
        <p className="text-white font-cormorant text-[32px]">Working Hours</p>

        <div className="flex flex-col gap-3 text-gray text-center items-center justify-center">
          <div className="flex flex-col gap-1 ">
            <p className="">Monday-Friday:</p>
            <p className="">08:00 am -12:00 am</p>
          </div>

          <div className="flex flex-col gap-1 ">
            <p className="">Saturday-Sunday:</p>
            <p className="">07:00am -11:00 pm</p>
          </div>
        </div>
      </div>
    </div>
    <p className="text-gray text-[16px]">2021 Gerícht. All Rights reserved.</p>
  </div>
);
