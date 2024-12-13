import React from "react";
import TitleWithSpoon from "./extra/title-with-spoon";
import MainButton from "./extra/btn";

const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-9 w-full bg-[#0C0C0C] items-center p-9">
      <div className=" max-w-3xl w-full flex items-center flex-col  justify-center">
        <TitleWithSpoon
          title="NewsLetter"
          titleClass="text-white text-[23px]"
          imgClass="mx-auto"
        />
        <h2 className="text-gold text-[64px] font-cormorant mt-5">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-[16px] font-sans text-white">
          And never miss latest Updates!
        </p>
      </div>

      <div className="flex items-center gap-7 border  w-full max-w-3xl mt-9">
        <input
          className=" border border-gold p-4 focus:border-gold focus:outline-none active:outline-none bg-transparent  flex-1  placeholder:text-gray h-full"
          placeholder="Email Address"
        />
        <MainButton btnTitle="Subscribe" />
      </div>
    </div>
  );
};

export default NewsLetter;
