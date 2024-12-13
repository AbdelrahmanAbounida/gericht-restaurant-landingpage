import React from "react";
import TitleWithSpoon from "./extra/title-with-spoon";
import MainButton from "./extra/btn";
import Image from "next/image";

const PhotoGallery = () => {
  return (
    <div className="w-full p-[100px] bg-[#040404]">
      <div className="w-full  flex items-center justify-between max-w-9xl gap-6 max-w-8xl mx-auto ">
        {/** description */}
        <div className="flex flex-col gap-2 max-w-[491px] w-full ">
          <TitleWithSpoon
            title="Instagram"
            titleClass="text-white text-[23px]"
          />

          <h1 className="text-gold text-[64px]">Photo Gallery</h1>

          <p className="text-gray my-9 font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>

          <MainButton
            btnTitle="View More"
            className="w-[136px] font-cormorant"
          />
        </div>

        {/** gallery:: TODO */}
        <img src={"Gallery.svg"} alt="Gallery.svg" className="flex-1" />
      </div>
    </div>
  );
};

export default PhotoGallery;
