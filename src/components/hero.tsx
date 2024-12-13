import Image from "next/image";
import React from "react";
import MainButton from "./extra/btn";

const Hero = () => {
  return (
    <div className="container max-w-7xl  mx-auto pt-10 pb-[150px]">
      <div className="w-full relative  flex items-center gap-2">
        {/** absolute (left, 2 bottoms) */}

        {/** main title */}
        <div
          className={`flex flex-col items-start gap-2 flex-1 font-cormorant`} // ${cor.className}
        >
          <div className=" max-w-[453px]">
            <div className="relative ">
              <h2 className="text-[23px] text-white/80 font-[700] leading-[30px] pb-[15px]">
                Chase the new Flavour
              </h2>
              <Image
                className="absolute left-0 bottom-0"
                src={"/spoon.svg"}
                alt="spoon"
                width={40}
                height={9}
              />
            </div>

            <div
              className={`text-gold flex text-[90px] leading-[117px] font-[700] `}
            >
              The key to <br /> Fine dining
            </div>

            <p className="text-[16px] leading-[28px] text-gray">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus
            </p>

            <MainButton className="mt-5" btnTitle={"Explore Menu"} />
          </div>
        </div>

        {/** side image */}
        <Image src={"/hero.svg"} alt="hero.svg" width={619} height={688} />
      </div>
    </div>
  );
};

export default Hero;
