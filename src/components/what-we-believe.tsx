import Image from "next/image";
import React from "react";
import TitleWithSpoon from "./extra/title-with-spoon";

const WhatWeBelieve = () => {
  return (
    <div className="bg-[url('/about-bg.svg')] bg-cover bg-no-repeat h-[959px] flex w-full items-center justify-center font-cormorant relative">
      <div className="max-w-7xl flex items-center  mx-auto z-10 justify-between w-full  gap-[90px] relative">
        {/** Left Image */}
        <Image src={"/person.svg"} height={789} width={634} alt="person" />

        {/** Right Description */}
        <div className="py-[90px]">
          <div className="flex flex-col gap-11 font-cormorant w-full ">
            <div className="">
              <TitleWithSpoon
                title="Chef’s Word"
                titleClass="text-white text-[23px]"
              />
              <h2 className="text-[64px] text-gold">What we believe in</h2>
            </div>

            <div className="flex flex-col">
              <div className="flex items-end">
                <Image
                  src={"/mark.svg"}
                  alt="mark"
                  width={47}
                  height={40}
                  className="mr-2"
                />
                <p className="text-gray text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                  sit .
                </p>
              </div>
              <p className="text-gray text-[16px]">
                auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
                sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
                molestie lectus eu. Congue iaculis integer curabitur semper sit
                nunc.
              </p>
            </div>

            <div className="">
              <h4 className="text-gold text-[32px]">Kevin Luo</h4>
              <p className="text-gray font-normal">Chef & Founder</p>
            </div>

            <Image
              alt="Kevin Luo"
              src={"Kevin Luo.svg"}
              width={235}
              height={83}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBelieve;
