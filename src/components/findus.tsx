import Image from "next/image";
import React from "react";
import TitleWithSpoon from "./extra/title-with-spoon";
import MainButton from "./extra/btn";

const FindUs = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between   gap-9">
        {/** description */}
        <div className="flex flex-col items-start justify-center gap-9">
          <div className="flex flex-col gap-2">
            <TitleWithSpoon
              title="Contact"
              titleClass="text-white font-medium text-[23px] font-cormorant"
            />
            <h2 className="text-[64px] text-gold  font-cormorant">Find Us</h2>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-gray text-[16px] font-sans">
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
            </p>
            <div className="gap-5 flex flex-col mt-8 font-sans">
              <h5 className="text-gold text-[23px]">Opening Hours</h5>
              <p className="text-[16px] text-gray">
                Mon - Fri: 10:00 am - 02:00 am
              </p>
              <p className="text-[16px] text-gray">
                Sat - Sun: 10:00 am - 03:00 am
              </p>
            </div>
          </div>

          <MainButton btnTitle="Visit Us" className="font-cormorant mt-5" />
        </div>

        {/** image */}
        <Image src={"cup.svg"} alt="cup.svg" width={667} height={736} />
      </div>
    </div>
  );
};

export default FindUs;
