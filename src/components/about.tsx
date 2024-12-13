import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import MainButton from "./extra/btn";
import TitleWithSpoon from "./extra/title-with-spoon";

const About = () => {
  return (
    <div className="bg-[url('/about-bg.svg')] bg-cover bg-no-repeat h-[959px] flex w-full items-center justify-center font-cormorant relative">
      <div className="max-w-5xl flex items-center  mx-auto z-10 justify-between w-full  gap-[90px] relative">
        <AboutSubSection
          title="About Us"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.`}
          btnTitle="Know More"
          dir="left"
        />
        <Image
          className="z-10"
          src={"/knife.svg"}
          alt="knife"
          height={703}
          width={70}
        />
        <Image
          className="absolute z-0  left-[31%] top-[20%]"
          src={"/G.svg"}
          alt="G"
          height={415}
          width={391}
        />
        <AboutSubSection
          title="Our History"
          description={`Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.`}
          btnTitle="Know More"
          dir="right"
        />
      </div>
    </div>
  );
};

export default About;

const AboutSubSection = ({
  title,
  description,
  btnTitle,
  dir = "right",
}: {
  title: string;
  description: string;
  btnTitle: string;
  dir?: "right" | "left";
}) => (
  <div
    className={cn(
      "w-full max-w-[523px] z-10 flex flex-col  font-cormorant",
      dir === "left" ? "items-end" : "items-start"
    )}
  >
    <TitleWithSpoon
      imgClass={cn(dir == "left" && "rotate-180")}
      titleClass=""
      title={title}
    />

    <p
      className={cn(
        "text-[16px] text-md flex  text-gray my-9",
        dir == "left" ? "text-end" : ""
      )}
    >
      {description}
    </p>

    <MainButton btnTitle={btnTitle} />
  </div>
);
